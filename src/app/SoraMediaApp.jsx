"use client";
import React, { useState, useEffect, useRef } from "react";

// components
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import MediaGrid from "./components/MediaGrid/MediaGrid";
import ActivityBox from "./components/ActivityBox/ActivityBox";
import PromptEditModal from "./components/PromptEditModal/PromptEditModal";
import MediaDetailModal from "./components/MediaDetailModal/MediaDetailModal";
import GenerationInterface from "./components/GenerationInterface/GenerationInterface";

// hooks
import { useActivityBox } from "./hooks/useActivityBox";
import { useOutsideClick } from "./hooks/useOutsideClick";
import { useMediaGeneration } from "./hooks/useMediaGeneration";

// utils
import { getAspectRatioClass } from "./utils/aspectRatio";
import { mockMediaData, allowedPrompts, soraOptions } from "./utils/mockData";

const SoraMediaApp = () => {
  // Refs
  const wrapperRef = useRef(null);
  const activityBoxRef = useRef(null);

  // States
  const [activeTab, setActiveTab] = useState("explore");
  const [editingPrompt, setEditingPrompt] = useState("");

  const [mediaItems, setMediaItems] = useState([]);
  const [selectedMedia, setSelectedMedia] = useState(null);

  const [showPromptEdit, setShowPromptEdit] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false); // New state

  const [settings, setSettings] = useState({
    type: "Image",
    ratio: "2:3",
    variation: "4v",
    resolution: "1080p",
    duration: "15s",
  });

  // Custom hooks
  const {
    activityList,
    showActivityBox,
    setShowActivityBox,
    toggleActivityBox,
    addActivity,
  } = useActivityBox();

  const {
    generationPrompt,
    setGenerationPrompt,
    isGenerating,
    handleGenerateImage,
  } = useMediaGeneration(mockMediaData, allowedPrompts, settings);

  // Outside click handler
  useOutsideClick(
    [activityBoxRef, wrapperRef],
    () => {
      setShowActivityBox(false);
    },
    showActivityBox
  );

  // Initialize media items
  useEffect(() => {
    setMediaItems(mockMediaData);
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = selectedMedia ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedMedia]);

  // Event handlers
  const handleMediaClick = (media) => {
    setSelectedMedia(media);
    setEditingPrompt(media.prompt);
  };

  const handlePromptEdit = () => {
    if (selectedMedia) {
      const updatedMedia = { ...selectedMedia, prompt: editingPrompt };
      setMediaItems((prev) =>
        prev.map((item) => (item.id === selectedMedia.id ? updatedMedia : item))
      );
      setSelectedMedia(updatedMedia);
      setShowPromptEdit(false);
    }
  };

  const handleGenerate = () => {
    handleGenerateImage(addActivity);
  };

  const updateSetting = (key, value) => {
    setSettings((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <div className="flex h-screen bg-black text-white">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full z-40 bg-black transition-transform duration-300 md:relative md:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:block w-64`}
      >
        <Sidebar setActiveTab={setActiveTab} activeTab={activeTab} />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col relative">
        {/* Header */}
        <Header
          toggleActivityBox={toggleActivityBox}
          wrapperRef={wrapperRef}
          activeTab={activeTab}
          toggleSidebar={() => setSidebarOpen((prev) => !prev)}
        />

        {showActivityBox && (
          <ActivityBox
            activityList={activityList}
            activityBoxRef={activityBoxRef}
            setShowActivityBox={setShowActivityBox}
            setSelectedMedia={setSelectedMedia}
          />
        )}

        {/* Media Grid */}
        <MediaGrid
          mediaItems={mediaItems}
          handleMediaClick={handleMediaClick}
          getAspectRatioClass={getAspectRatioClass}
        />

        {/* Generation Int  erface */}
        <GenerationInterface
          generationPrompt={generationPrompt}
          setGenerationPrompt={setGenerationPrompt}
          handleGenerateImage={handleGenerate}
          isGenerating={isGenerating}
          settings={settings}
          updateSetting={updateSetting}
          soraOptions={soraOptions}
        />
      </div>

      {/* Media Detail Modal */}
      {selectedMedia && (
        <MediaDetailModal
          selectedMedia={selectedMedia}
          setSelectedMedia={setSelectedMedia}
          getAspectRatioClass={getAspectRatioClass}
          setShowPromptEdit={setShowPromptEdit}
        />
      )}

      {showPromptEdit && (
        <PromptEditModal
          showPromptEdit={showPromptEdit}
          setShowPromptEdit={setShowPromptEdit}
          prompt={editingPrompt}
          setPrompt={setEditingPrompt}
          settings={settings}
          updateSetting={updateSetting}
          soraOptions={soraOptions}
          onSubmit={handlePromptEdit}
          isGenerating={false}
        />
      )}
    </div>
  );
};

export default SoraMediaApp;

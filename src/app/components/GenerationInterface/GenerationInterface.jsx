// components/GenerationInterface/GenerationInterface.jsx
import React from "react";
import PromptBox from "../PromptBox/PromptBox";

export default function GenerationInterface({
  generationPrompt,
  setGenerationPrompt,
  handleGenerateImage,
  isGenerating,
  settings,
  updateSetting,
  soraOptions,
}) {
  return (
    <PromptBox
      prompt={generationPrompt}
      setPrompt={setGenerationPrompt}
      onSubmit={handleGenerateImage}
      isGenerating={isGenerating}
      settings={settings}
      updateSetting={updateSetting}
      soraOptions={soraOptions}
    />
  );
}

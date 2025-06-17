import React from "react";
import { X, Heart, MoreHorizontal } from "lucide-react";

const MediaDetailModal = ({
  selectedMedia,
  setSelectedMedia,
  getAspectRatioClass,
  setShowPromptEdit,
}) => {
  if (!selectedMedia) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center text-white">
      {/* Close Button */}
      <button
        onClick={() => setSelectedMedia(null)}
        className="absolute top-4 right-4 text-white cursor-pointer"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Media Container */}
      <div className="max-w-[90vw] max-h-[90vh] w-full flex flex-col items-center justify-center">
        {/* Header */}
        <div className="text-center mb-4">
          <h2 className="text-sm text-gray-400">
            <span className="font-medium text-white">
              {selectedMedia.title}
            </span>
          </h2>
        </div>

        {/* Media */}
        <div
          className={`${getAspectRatioClass(
            selectedMedia.aspectRatio
          )} rounded-lg overflow-hidden relative`}
        >
          {selectedMedia.type === "image" ? (
            <img
              src={selectedMedia.src}
              alt={selectedMedia.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <video
              src={selectedMedia.src}
              controls
              autoPlay
              loop
              className="w-full h-full object-contain"
            />
          )}
        </div>

        {/* Actions */}
        <div className="absolute top-4 right-16 flex items-center space-x-4">
          <button className="hover:text-pink-400 flex">
            <Heart className="w-5 h-5" />
            <span className="text-sm ml-1">{selectedMedia.likes}</span>
          </button>
          <button className="hover:text-white">
            <MoreHorizontal className="w-5 h-5" />
          </button>
        </div>

        {/* Prompt */}
        <div className="w-full max-w-xl mt-6 border-t border-gray-700 pt-4 text-center">
          <p className="text-sm text-gray-400">
            <span className="text-white font-semibold">Prompt:</span>{" "}
            {selectedMedia.prompt}
          </p>
        </div>

        {/* Action Bar at Bottom */}
        <div className="flex justify-center space-x-4 mt-6">
          <button
            onClick={() => setShowPromptEdit(true)}
            className="bg-gray-800 hover:bg-gray-700 text-white text-sm px-4 py-2 rounded-full"
          >
            Edit prompt
          </button>
          <button className="bg-gray-800 hover:bg-gray-700 text-white text-sm px-4 py-2 rounded-full">
            Remix
          </button>
          <button className="bg-gray-800 hover:bg-gray-700 text-white text-sm px-4 py-2 rounded-full">
            Create video
          </button>
        </div>
      </div>
    </div>
  );
};

export default MediaDetailModal;

import { useState } from "react";

export const useMediaGeneration = (mockMediaData, allowedPrompts, settings) => {
  const [generationPrompt, setGenerationPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerateImage = (addActivity) => {
    const trimmedPrompt = generationPrompt.trim();
    if (!trimmedPrompt) return;

    const isPromptAllowed = allowedPrompts.some(
      (prompt) => prompt.toLowerCase() === trimmedPrompt.toLowerCase()
    );

    if (!isPromptAllowed) {
      alert("Please enter a valid prompt from the allowed list.");
      return;
    }

    const matchedItem = mockMediaData.find((item) => {
      const isPromptMatch =
        item.prompt.toLowerCase() === trimmedPrompt.toLowerCase();
      const isTypeMatch =
        item.type.toLowerCase() === settings?.type.toLowerCase();
      const isRatioMatch = item.aspectRatio === settings?.ratio;

      const isCommonMatch = isPromptMatch && isTypeMatch && isRatioMatch;

      if (!isCommonMatch) return false;

      if (settings?.type.toLowerCase() === "Video") {
        return item.duration === settings?.duration;
      }

      return true; // for image
    });

    if (!matchedItem) {
      alert("No media found for the entered prompt.");
      return;
    }

    addActivity(trimmedPrompt, matchedItem);
    setGenerationPrompt("");
  };

  return {
    generationPrompt,
    setGenerationPrompt,
    isGenerating,
    setIsGenerating,
    handleGenerateImage,
  };
};

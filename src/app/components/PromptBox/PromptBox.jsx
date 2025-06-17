// components/PromptBox/PromptBox.jsx
import React from "react";
import { Plus, ArrowUp } from "lucide-react";
import { Dropdown } from "./dropdown";

export default function PromptBox({
  prompt,
  setPrompt,
  onSubmit,
  isGenerating,
  settings,
  updateSetting,
  soraOptions,
  isModal = false,
}) {
  return (
    <div
      className={`${
        isModal
          ? "w-full max-w-3xl"
          : "absolute bottom-4 left-1/2 -translate-x-1/2 w-full max-w-3xl px-3 pointer-events-auto"
      }`}
    >
      <div
        className={`relative rounded-3xl p-2 backdrop-blur-3xl backdrop-brightness-50 ${
          isModal ? "bg-[#2b2b2b]" : "bg-transparent"
        }`}
      >
        <div className="flex flex-col gap-2">
          <div className="flex items-center">
            <button className="flex items-center justify-center w-6 h-6">
              <Plus className="text-white w-5 h-5" />
            </button>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Describe your image or video..."
              rows={1}
              className="flex-1 bg-transparent text-white placeholder:text-gray-400 px-3 py-2 resize-none max-h-32 focus:outline-none"
              style={{ overflow: "hidden", overflowWrap: "break-word" }}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Dropdown
                label="Type"
                value={settings?.type}
                setValue={(val) => updateSetting("type", val)}
                options={soraOptions.type}
              />
              <Dropdown
                label="Aspect Ratio"
                value={settings?.ratio}
                setValue={(val) => updateSetting("ratio", val)}
                options={soraOptions.ratio}
              />
              <Dropdown
                label="Variations"
                value={settings?.variation}
                setValue={(val) => updateSetting("variation", val)}
                options={soraOptions.variations}
              />
              {settings?.type === "Video" && (
                <>
                  <Dropdown
                    label="Resolution"
                    value={settings?.resolution}
                    setValue={(val) => updateSetting("resolution", val)}
                    options={soraOptions.resolution}
                  />
                  <Dropdown
                    label="Duration"
                    value={settings?.duration}
                    setValue={(val) => updateSetting("duration", val)}
                    options={soraOptions.duration}
                  />
                </>
              )}
            </div>

            <button
              onClick={onSubmit}
              disabled={isGenerating || !prompt.trim()}
              className={`flex items-center justify-center w-9 h-9 p-2 rounded-full transition-colors ${
                isGenerating || !prompt.trim()
                  ? "bg-gray-700 text-gray-500"
                  : "bg-white text-black"
              }`}
            >
              {isGenerating ? (
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white" />
              ) : (
                <ArrowUp className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

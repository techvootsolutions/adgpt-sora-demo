import React from "react";
import PromptBox from "../PromptBox/PromptBox";
import { X } from "lucide-react";

export default function PromptEditModal({
  showPromptEdit,
  setShowPromptEdit,
  ...rest
}) {
  if (!showPromptEdit) return null;

  return (
    <div className="fixed inset-0 z-60 flex items-center justify-center bg-black bg-opacity-50">
      <button
        onClick={() => setShowPromptEdit(false)}
        className="absolute top-4 right-4 text-white"
      >
        <X className="h-6 w-6" />
      </button>
      <PromptBox {...rest} isModal />
    </div>
  );
}

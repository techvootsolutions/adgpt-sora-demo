import React from "react";
import MediaItem from "./MediaItem";

const MediaGrid = ({ mediaItems, handleMediaClick, getAspectRatioClass }) => {
  return (
    <div className="flex-1 overflow-y-auto p-6">
      <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
        {mediaItems?.map((item) => (
          <MediaItem
            key={item.id}
            item={item}
            onClick={() => handleMediaClick(item)}
            getAspectRatioClass={getAspectRatioClass}
          />
        ))}
      </div>
    </div>
  );
};

export default MediaGrid;

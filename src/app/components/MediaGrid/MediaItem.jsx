import React from "react";
import { Heart } from "lucide-react";

const MediaItem = ({ item, onClick, getAspectRatioClass }) => {
  return (
    <div
      className="break-inside-avoid relative cursor-pointer group"
      onClick={onClick}
    >
      <div
        className={`${getAspectRatioClass(
          item.aspectRatio
        )} relative overflow-hidden bg-gray-800 rounded-lg`}
      >
        {item.type === "video" ? (
          <video
            src={item.src}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover rounded-lg"
          />
        ) : (
          <img
            src={item.src}
            alt={item.title}
            className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
          />
        )}

        <div className="absolute bottom-0 opacity-100 transition-opacity w-full py-2 px-3">
          <div className="flex justify-between items-center w-full">
            <div className="flex items-center space-x-2">
              <span className="text-sm text-white font-bold">{item.title}</span>
            </div>
            <div className="flex space-x-1">
              <button className="w-auto h-8 gap-1 px-2 rounded-full cursor-pointer flex items-center justify-center hover:backdrop-blur-3xl">
                <Heart className="h-4 w-4 text-white font-bold" />
                <span className="text-sm text-white font-bold">
                  {item.likes}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaItem;

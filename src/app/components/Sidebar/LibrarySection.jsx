import React from "react";

const LibrarySection = ({ items }) => {
  return (
    <div className="mt-8">
      <h3 className="text-sm font-medium text-gray-400 mb-3">Library</h3>
      <ul>
        {items?.map((item, index) => (
          <li key={index}>
            <button className="w-full font-semibold flex items-center space-x-3 px-3 py-1 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-white transition-colors">
              <item.icon className="h-4 w-4" />
              <span>{item.label}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LibrarySection;

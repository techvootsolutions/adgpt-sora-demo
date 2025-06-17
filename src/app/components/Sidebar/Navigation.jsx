import React from "react";

const Navigation = ({ items, activeTab, setActiveTab }) => {
  return (
    <ul>
      {items?.map((item, index) => (
        <li key={index}>
          <button
            onClick={() => setActiveTab(item.label.toLowerCase())}
            className={`w-full font-semibold flex items-center space-x-3 px-3 py-1 rounded-lg transition-colors ${
              item.active ? "bg-gray-800 text-white" : "text-white"
            }`}
          >
            <item.icon className="h-4 w-4" />
            <span>{item.label}</span>
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Navigation;

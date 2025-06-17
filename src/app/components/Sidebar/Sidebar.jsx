import React from "react";
import {
  Search,
  Heart,
  Upload,
  Trash2,
  Folder,
  Star,
  Camera,
  Video,
  Grid,
  FileText,
} from "lucide-react";
import SearchBar from "./SearchBar";
import Navigation from "./Navigation";
import LibrarySection from "./LibrarySection";

const Sidebar = ({ activeTab, setActiveTab }) => {
  const sidebarItems = [
    { icon: Grid, label: "Explore", active: activeTab === "explore" },
    { icon: Camera, label: "Images", active: false },
    { icon: Video, label: "Videos", active: false },
    { icon: Star, label: "Top", active: false },
    { icon: Heart, label: "Likes", active: false },
  ];

  const libraryItems = [
    { icon: FileText, label: "My media", active: false },
    { icon: Star, label: "Favorites", active: false },
    { icon: Upload, label: "Uploads", active: false },
    { icon: Trash2, label: "Trash", active: false },
  ];

  return (
    <div className="w-64 p-4 flex flex-col mt-10">
      <SearchBar />
      <nav className="flex-1">
        <Navigation
          items={sidebarItems}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <LibrarySection items={libraryItems} />
        <button className="w-full flex items-center space-x-3 px-3 py-2 mt-4 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-white transition-colors">
          <Folder className="h-4 w-4" />
          <span>New folder</span>
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;

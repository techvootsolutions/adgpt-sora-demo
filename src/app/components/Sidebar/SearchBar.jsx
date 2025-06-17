import React from "react";
import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="relative mb-6">
      <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
      <input
        type="text"
        placeholder="Search"
        className="w-full bg-gray-800 text-white pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <span className="absolute right-3 top-3 text-xs text-gray-400">
        Ctrl K
      </span>
    </div>
  );
};

export default SearchBar;

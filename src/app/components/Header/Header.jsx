import React from "react";
import { Filter, Bell, User, Menu } from "lucide-react";

const Header = ({
  toggleActivityBox,
  wrapperRef,
  toggleSidebar,
  activeTab,
}) => {
  return (
    <div className="h-14 bg-black flex items-center justify-between px-6">
      <div className="flex items-center space-x-3">
        {/* Hamburger only on mobile */}
        <button
          className="md:hidden p-1 text-white z-50"
          onClick={toggleSidebar}
        >
          <Menu className="h-6 w-6" />
        </button>
        <h1 className="text-xl font-semibold capitalize">{activeTab}</h1>
      </div>
      <div className="flex items-center space-x-4">
        <Filter className="h-5 w-5 text-gray-400 cursor-pointer hover:text-white" />
        <Bell
          className="h-5 w-5 text-gray-400 cursor-pointer hover:text-white"
          onClick={toggleActivityBox}
          ref={wrapperRef}
        />
        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
          <User className="h-4 w-4" />
        </div>
      </div>
    </div>
  );
};

export default Header;

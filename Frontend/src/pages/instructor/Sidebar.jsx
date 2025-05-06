import {
  ChartNoAxesColumn,
  Menu,
  SquareLibrary,
  X,
} from "lucide-react";
import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMobileMenu = () => setIsOpen(!isOpen);
  const closeMobileMenu = () => setIsOpen(false);

  return (
    <div className="flex">
      {/* Hamburger for mobile */}
      <div className="lg:hidden absolute top-18 left-4 z-50">
        <button onClick={toggleMobileMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Sidebar */}
      {isOpen && (
        <div className="lg:hidden fixed top-0 left-0 h-full w-64 bg-white z-40 shadow-md border-r p-5 my-20 space-y-6">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2" onClick={closeMobileMenu}>
              <ChartNoAxesColumn size={22} />
              <h1>LearnSphere Dashboard</h1>
            </Link>
            <Link to="course" className="flex items-center gap-2" onClick={closeMobileMenu}>
              <SquareLibrary size={22} />
              <h1>Your Analytics</h1>
            </Link>
            <Link to="add-course" className="flex items-center gap-2" onClick={closeMobileMenu}>
              <SquareLibrary size={22} />
              <h1>Add Course</h1>
            </Link>
          </div>
        </div>
      )}

      {/* Desktop Sidebar */}
      <div className="hidden lg:block w-[250px] space-y-8 border-r border-gray-300 dark:border-gray-700 p-5 my-13 sticky top-0 h-screen">
        <div className="space-y-4">
          <Link to="/" className="flex items-center gap-2">
            <ChartNoAxesColumn size={22} />
            <h1>LearnSphere Dashboard</h1>
          </Link>
          <Link to="stats" className="flex items-center gap-2">
            <SquareLibrary size={22} />
            <h1>Your Analytics</h1>
          </Link>
          <Link to="add-course" className="flex items-center gap-2">
            <SquareLibrary size={22} />
            <h1>Add Course</h1>
          </Link>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 p-5 lg:p-10">
        <Outlet />
      </div>
    </div>
  );
};

export default Sidebar;

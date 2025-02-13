import React from "react";

import { FaArrowRight } from "react-icons/fa";
function Header() {
  return (
    <header className="bg-[#02191D] shadow-md mb-5 backdrop-blur-sm w-full sm:w-[1200px] h-[76px] 
                      flex justify-between items-center 
                      px-4 sm:px-[16px] py-[12px] 
                      rounded-[24px] border border-[#197686]">
      {/* Logo */}
      <div className="logo">
        <img src="/logo.svg" alt="Logo" className="h-10" />
      </div>

      {/* Navigation Menu - Hidden on small screens */}
      <nav className="hidden sm:flex">
        <ul className="flex space-x-6">
          <li>
            <a href="#event" className="text-gray-300 hover:text-gray-100">
              Events
            </a>
          </li>
          <li>
            <a href="#my-tickets" className="text-gray-500 hover:text-gray-100">
              My Tickets
            </a>
          </li>
          <li>
            <a href="#about" className="text-gray-500 hover:text-gray-200">
              About Project
            </a>
          </li>
        </ul>
      </nav>

      {/* My Ticket Button - Always Visible */}
      <button className="flex items-center bg-white text-[#0A0C11] py-2 px-4 rounded hover:bg-#0A0C11">
        MY TICKETS <FaArrowRight className="m-2" />
      </button>
    </header>
  );
}

export default Header;

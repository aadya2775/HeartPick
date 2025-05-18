import React, { useState } from "react";
import WomenSection from "../pages/WomenSection";
import MenSection from "../pages/MenSection";
import HoliDaySection from "../pages/HoliDaySection";
import KidSection from "../pages/KidSection";
import BestSellerSection from "../pages/BestSellerSection";

const navLinks = [
  "OCASSION & HOLIDAYS",
  "MEN",
  "WOMEN",
  "KIDS",
  "NEW & BESTSELLERS",
];

export default function NavBar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  let timeout;

  const handleEnter = (link) => {
    clearTimeout(timeout);
    setActiveDropdown(link);
  };
  const handleLeave = () => {
    timeout = setTimeout(() => setActiveDropdown(null), 150);
  };

  return (
    <nav
      className="flex justify-between items-center px-9 w-full h-16 font-sans bg-black/95 backdrop-blur-sm shadow-[0_4px_20px_rgba(0,0,0,0.15)] sticky top-0 z-50 border-b border-gray-800 relative"
      onMouseLeave={handleLeave}
    >
      {/* Logo */}
      <div className="flex items-center mr-12">
        <span className="text-2xl font-bold tracking-wider transition-all duration-300 hover:scale-105">
          <span className="text-[#FF3F6C] drop-shadow-[0_2px_2px_rgba(255,63,108,0.3)] hover:drop-shadow-[0_4px_4px_rgba(255,63,108,0.5)]">HEART</span>
          <span className="text-[#FFDB1F] drop-shadow-[0_2px_2px_rgba(255,219,31,0.3)] hover:drop-shadow-[0_4px_4px_rgba(255,219,31,0.5)]">PICK</span>
        </span>
      </div>

      {/* Nav Links */}
      <div className="flex gap-8">
        {navLinks.map((link) => (
          <span
            key={link}
            className="relative text-base font-semibold tracking-wider text-white cursor-pointer"
            onMouseEnter={() => handleEnter(link)}
          >
            {link}
          </span>
        ))}
      </div>

      {/* Search Bar */}
      <div className="flex justify-center flex-1 mx-8">
        <div className="flex items-center bg-gray-100 rounded w-[400px] h-10 px-3">
          {/* Search Icon */}
          <svg width="20" height="20" fill="none" stroke="#696e79" strokeWidth="2" viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="8"/>
            <line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
          <input
            type="text"
            placeholder="Search for products, brands and more"
            className="w-full ml-2 text-base text-gray-800 placeholder-gray-500 bg-transparent border-none outline-none"
          />
        </div>
      </div>

      {/* Icons and Text */}
      <div className="flex items-center gap-8">
        {/* Profile */}
        <div className="flex flex-col items-center text-sm font-semibold text-white">
          <svg width="24" height="24" fill="none" stroke="#fff" strokeWidth="2" viewBox="0 0 24 24">
            <circle cx="12" cy="8" r="4"/>
            <path d="M4 20c0-4 8-4 8-4s8 0 8 4"/>
          </svg>
          <span>Profile</span>
        </div>
        {/* Wishlist */}
        <div className="flex flex-col items-center text-sm font-semibold text-white">
          <svg width="24" height="24" fill="none" stroke="#fff" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M12 21s-6-4.35-9-8.5C-1.5 7.5 4.5 2.5 12 8.5c7.5-6 13.5-1 9 4C18 16.65 12 21 12 21z"/>
          </svg>
          <span>Wishlist</span>
        </div>
        {/* Bag */}
        <div className="flex flex-col items-center text-sm font-semibold text-white">
          <svg width="24" height="24" fill="none" stroke="#fff" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M6 7V6a6 6 0 1 1 12 0v1"/>
            <rect x="3" y="7" width="18" height="13" rx="2"/>
          </svg>
          <span>Bag</span>
        </div>
      </div>

      {/* Dropdown Container */}
      {activeDropdown && (activeDropdown === "MEN" || activeDropdown === "WOMEN" || activeDropdown === "OCASSION & HOLIDAYS" || 
      activeDropdown==="KIDS" || activeDropdown==="NEW & BESTSELLERS") && (
        <div
          className="fixed left-0 right-0 z-40 top-16"
          onMouseEnter={() => handleEnter(activeDropdown)}
        >
          {activeDropdown === "MEN" && <MenSection />}
          {activeDropdown === "WOMEN" && <WomenSection />}
          {activeDropdown === "OCASSION & HOLIDAYS" && <HoliDaySection />}
          {activeDropdown === "KIDS" && <KidSection />}
          {activeDropdown === "NEW & BESTSELLERS" && <BestSellerSection />}
          {/* Add other sections here based on activeDropdown */}
        </div>
      )}
    </nav>
  );
}

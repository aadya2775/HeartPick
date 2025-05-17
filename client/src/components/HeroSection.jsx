import React from "react";

export default function HeroSection() {
  return (
    <div className="w-full bg-white border-b border-gray-200 py-4 px-8 flex items-center justify-between">
      {/* Left */}
      <div className="flex-1 flex justify-center">
        <span className="font-extrabold text-2xl text-gray-600 tracking-wide">
          SAVINGS EVENT!
        </span>
      </div>
      {/* Center */}
      <div className="flex-1 flex justify-center">
        <span className="font-extrabold text-3xl text-[#b71c1c] tracking-wide">
          SAVE 30% ON EVERYTHING.
        </span>
      </div>
      {/* Right */}
      <div className="flex-1 flex flex-col items-end text-right text-gray-600 text-base font-medium leading-tight">
        <span>
          Use Promo Code: <span className="font-bold">GM4U25</span>
        </span>
        <span>Hurry, Limited Time Offer!</span>
        <span className="text-sm">
          Savings based on Comp. Value. Some exclusions apply.*
        </span>
      </div>
    </div>
  );
}

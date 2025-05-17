import React from "react";

export default function HoliDaySection() {
  return (
    <div className="w-full bg-black shadow-lg">
      {/* Content Wrapper */}
      <div className="max-w-screen-xl mx-auto p-4 pt-2 flex gap-4">
        {/* HOLIDAYS */}
        <div className="flex flex-col flex-shrink-0 min-w-[110px]">
          <span className="font-bold text-gray-300 mb-2">HOLIDAYS</span>
          <span className="text-gray-400">Easter</span>
          <span className="text-gray-400">Memorial Day</span>
          <span className="text-gray-400">Mother's Day</span>
          <span className="text-gray-400">Father's Day</span>
          <span className="text-gray-400">Fourth of July</span>
          <span className="text-gray-400">Grandparents' Day</span>
          <span className="text-gray-400">Halloween</span>
          <span className="text-gray-400">Thanksgiving</span>
          <span className="text-gray-400">Christmas</span>
          <span className="text-gray-400">Valentine's Day</span>
        </div>
        {/* image */}
        <div className="border-l border-gray-700 mx-2"></div>
        <div className="flex flex-col items-center flex-shrink-0 min-w-[110px]">
          <img
            src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=200&q=80"
            alt="Just for Her Glass Keepsake Box"
            className="w-28 h-20 object-cover rounded mb-2"
          />
          <span className="text-gray-400 text-center text-sm">
            Custom Photo Wood Heart Wall Sign
          </span>
        </div>
        <div className="border-l border-gray-700 mx-2"></div>
        {/* OCCASIONS */}
        <div className="flex flex-col flex-shrink-0 min-w-[110px]">
          <span className="font-bold text-gray-300 mb-2">OCCASIONS</span>
          <span className="text-gray-400">Anniversary</span>
          <span className="text-gray-400">Birthday</span>
          <span className="text-gray-400">Birthday Gifts for Kids</span>
          <span className="text-gray-400">New Baby</span>
          <span className="text-gray-400">Boss's Day</span>
          <span className="text-gray-400">Friendship Gifts</span>
          <span className="text-gray-400">Graduation</span>
          <span className="text-gray-400">Religious</span>
          <span className="text-gray-400">Retirement</span>
          <span className="text-gray-400">Memorial</span>
          <span className="text-gray-400">Wedding</span>
        </div>
        <div className="border-l border-gray-700 mx-2"></div>
        {/* IMAGE */}
        <div className="flex flex-col items-center flex-shrink-0 min-w-[110px]">
          <img
            src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=200&q=80"
            alt="Just for Her Glass Keepsake Box"
            className="w-28 h-20 object-cover rounded mb-2"
          />
          <span className="text-gray-400 text-center text-sm">
          Better Together Maple Wood Cutting Board
          </span>
        </div>
      </div>
    </div>
  );
}

import React from "react";

export default function MenSection() {
  return (
    <div className="w-full bg-black shadow-lg">
      {/* Content Wrapper with Horizontal Scrolling */}
      <div className="max-w-screen-xl mx-auto p-4 pt-2 flex gap-4 overflow-x-auto">
        {/* BESTSELLERS */}
        <div className="flex flex-col flex-shrink-0 min-w-[150px]">
          <span className="font-bold text-gray-300 mb-2">BESTSELLERS</span>
          <span className="text-gray-400">Apparel</span>
          <span className="text-gray-400">Wallets</span>
          <span className="text-gray-400">BBQ & Grilling</span>
          <span className="text-gray-400">Socks</span>
          <span className="text-gray-400">Watch Boxes & Valets</span>
          <span className="text-gray-400">Fishing & Golf</span>
          <span className="text-gray-400">Beer</span>
          <span className="text-gray-400">Barware</span>
        </div>
        <div className="border-l border-gray-700 mx-2"></div>
        {/* OCCASIONS */}
        <div className="flex flex-col flex-shrink-0 min-w-[150px]">
          <span className="font-bold text-gray-300 mb-2">OCCASIONS</span>
          <span className="text-gray-400">Birthday Gifts for Her</span>
          <span className="text-gray-400">Anniversary Gifts for Her</span>
          <span className="text-gray-400">Bridal Shower</span>
          <span className="text-gray-400">Baby Shower</span>
          <span className="text-gray-400">Wedding</span>
        </div>
        <div className="border-l border-gray-700 mx-2"></div>
        {/* RECIPIENT */}
        <div className="flex flex-col flex-shrink-0 min-w-[150px]">
          <span className="font-bold text-gray-300 mb-2">RECIPIENT</span>
          <span className="text-gray-400">Mom</span>
          <span className="text-gray-400">Grandma</span>
          <span className="text-gray-400">Wife</span>
          <span className="text-gray-400">Sister</span>
          <span className="text-gray-400">Daughter</span>
          <span className="text-gray-400">Bridesmaids</span>
          <span className="text-gray-400">Brides Gifts</span>
          <span className="text-gray-400">Girlfriend</span>
          <span className="text-gray-400">Teen</span>
          <span className="text-gray-400">Teachers</span>
        </div>
        <div className="border-l border-gray-700 mx-2"></div>
        {/* IMAGE */}
        <div className="flex flex-col items-center flex-shrink-0 min-w-[150px]">
          <img
            src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=200&q=80"
            alt="Just for Her Glass Keepsake Box"
            className="w-28 h-20 object-cover rounded mb-2"
          />
          <span className="text-gray-400 text-center text-sm">
            Just for Her Glass Keepsake Box
          </span>
        </div>
      </div>
    </div>
  );
}

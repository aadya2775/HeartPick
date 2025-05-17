import React from "react";

export default function BestSellerSection() {
  return (
    <div className="w-full bg-black shadow-lg">
      {/* Content Wrapper with Horizontal Scrolling */}
      <div className="max-w-screen-xl mx-auto p-4 pt-2 flex gap-4">
        {/* BESTSELLERS */}
        <div className="flex flex-col flex-shrink-0 min-w-[180px]">
          <span className="font-bold text-gray-300 mb-2">BESTSELLERS</span>
          <span className="text-gray-400">Mugs & Drinkware</span>
          <span className="text-gray-400">Home Décor</span>
          <span className="text-gray-400">Keepsakes & Accessories</span>
          <span className="text-gray-400">Outdoor & Garden</span>
          <span className="text-gray-400">Photo Gifts</span>
          <span className="text-gray-400">Wall Art & Canvas</span>
          <span className="text-gray-400">Kitchen</span>
          <span className="text-gray-400">Keychains</span>
          <div className="border-t border-gray-700 my-2"></div> {/* Divider */}
          {/* NEW */}
          <span className="font-bold text-gray-300 mb-2">NEW</span>
          <span className="text-gray-400">New Gifts</span>
          <span className="text-gray-400">Baby Swaddles</span>
        </div>
        <div className="border-l border-gray-700 mx-2"></div>
        {/* Image 1 */}
        <div className="flex flex-col items-center flex-shrink-0 min-w-[200px]">
          <img
            src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=200&q=80"
            alt="Colorful Cascading Name Mug"
            className="w-40 h-32 object-cover rounded mb-2"
          />
          <span className="text-gray-400 text-center text-sm">
            Colorful Cascading Name Mug
          </span>
        </div>
        <div className="border-l border-gray-700 mx-2"></div>
        {/* TRENDING NOW */}
        <div className="flex flex-col flex-shrink-0 min-w-[180px]">
          <span className="font-bold text-gray-300 mb-2">TRENDING NOW</span>
          <span className="text-gray-400">Beer & Wine</span>
          <span className="text-gray-400">Custom Jewelry</span>
          <span className="text-red-500">RedEnvelope Collection</span>
          <span className="text-gray-400">Pets</span>
          <span className="text-gray-400">Blankets</span>
          <span className="text-gray-400">Beach Towels</span>
        </div>
        <div className="border-l border-gray-700 mx-2"></div>
        {/* Image 2 */}
        <div className="flex flex-col items-center flex-shrink-0 min-w-[200px]">
          <img
            src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=200&q=80"
            alt="Elegant Embroidered Personalized Lightweight Throw"
            className="w-40 h-32 object-cover rounded mb-2"
          />
          <span className="text-gray-400 text-center text-sm">
            Elegant Embroidered Personalized Lightweight Throw
          </span>
        </div>
         <div className="border-l border-gray-700 mx-2"></div>
        {/* OFFICIALLY LICENSED */}
        <div className="flex flex-col flex-shrink-0 min-w-[180px]">
          <span className="font-bold text-gray-300 mb-2">OFFICIALLY LICENSED</span>
          <span className="text-gray-400">Crayola™</span>
          <span className="text-gray-400">PEANUTS®</span>
          <span className="text-gray-400">Peppa Pig</span>
          <span className="text-gray-400">SCRABBLE®</span>
          <span className="text-gray-400">TRANSFORMERS</span>
          <span className="text-gray-400">Rudolph®</span>
        </div>
      </div>
    </div>
  );
}

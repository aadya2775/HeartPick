import React from "react";

export default function KidSection() {
  return (
    <div className="w-full bg-black shadow-lg">
      {/* Content Wrapper with Horizontal Scrolling */}
      <div className="max-w-screen-xl mx-auto p-4 pt-2 flex gap-4 overflow-x-auto">
        {/* BESTSELLERS */}
        <div className="flex flex-col flex-shrink-0 min-w-[150px]">
          <span className="font-bold text-gray-300 mb-2">BESTSELLERS</span>
          <span className="text-gray-400">Kids Decor</span>
          <span className="text-gray-400">Backpacks & Lunchboxes</span>
          <span className="text-gray-400">Stuffed Animals & Dolls</span>
          <span className="text-gray-400">Step Stools</span>
          <span className="text-gray-400">Beach Towels</span>
          <span className="text-gray-400">Tableware</span>
          <span className="text-gray-400">Keepsakes</span>
          <span className="text-gray-400">Toys</span>
          <span className="text-gray-400">Kids Apparel</span>
          <span className="text-gray-400">Water Bottles</span>
          <span className="text-gray-400">Blankets & Swaddles</span>
        </div>
        <div className="border-l border-gray-700 mx-2"></div>
        {/* AGE */}
        <div className="flex flex-col flex-shrink-0 min-w-[150px]">
          <span className="font-bold text-gray-300 mb-2">AGE</span>
          <span className="text-gray-400">Baby (0-12months)</span>
          <span className="text-gray-400">Toddler (1-3 years)</span>
          <span className="text-gray-400">Preschool (3-5 years)</span>
          <span className="text-gray-400">School age (6-9 years)</span>
          <span className="text-gray-400">Tween (10-12 years)</span>
          <div className="border-t border-gray-700 my-2"></div> {/* Divider */}
          {/* BABY ESSENTIALS */}
          <span className="font-bold text-gray-300 mb-2">BABY ESSENTIALS</span>
          <span className="text-gray-400">Bathtime</span>
          <span className="text-gray-400">Bedtime</span>
          <span className="text-gray-400">Playtime</span>
          <span className="text-gray-400">Mealtime</span>
        </div>
        <div className="border-l border-gray-700 mx-2"></div>
        {/* INTERESTS */}
        <div className="flex flex-col flex-shrink-0 min-w-[150px]">
          <span className="font-bold text-gray-300 mb-2">INTERESTS</span>
          <span className="text-gray-400">Arts & Crafts</span>
          <span className="text-gray-400">Animals & Dinosaurs</span>
          <span className="text-gray-400">Books</span>
          <span className="text-gray-400">Sports</span>
          <span className="text-gray-400">Games & Puzzles</span>
          <span className="text-gray-400">Imaginative Play</span>
        </div>
        <div className="border-l border-gray-700 mx-2"></div>
        {/* RECIPIENT */}
        <div className="flex flex-col flex-shrink-0 min-w-[150px]">
          <span className="font-bold text-gray-300 mb-2">RECIPIENT</span>
          <span className="text-gray-400">Gifts for Boys</span>
          <span className="text-gray-400">Gifts for Girls</span>
          <span className="text-gray-400">First Birthday Gifts</span>
          <div className="border-t border-gray-700 my-2"></div> {/* Divider */}
          {/* OCCASIONS */}
          <span className="font-bold text-gray-300 mb-2">OCCASIONS</span>
          <span className="text-gray-400">Back to School</span>
          <span className="text-gray-400">Boy Confirmation Gifts</span>
          <span className="text-gray-400">Girl Confirmation Gifts</span>
          <span className="text-gray-400">Baptism Gifts</span>
          <span className="text-gray-400">First Birthday Gifts</span>
          <span className="text-gray-400">Birthday Gifts</span>
        </div>
        <div className="border-l border-gray-700 mx-2"></div>
        {/* OFFICIALLY LICENSED */}
        <div className="flex flex-col flex-shrink-0 min-w-[180px]">
          <span className="font-bold text-gray-300 mb-2">OFFICIALLY LICENSED</span>
          <span className="text-gray-400">Blankie Tails®</span>
          <span className="text-gray-400">Crayola™</span>
          <span className="text-gray-400">GUND®</span>
          <span className="text-gray-400">i See Me!®</span>
          <span className="text-gray-400">Melissa and Doug®</span>
          <span className="text-gray-400">My Little Pony</span>
          <span className="text-gray-400">PEANUTS®</span>
          <span className="text-gray-400">Peppa Pig</span>
          <span className="text-gray-400">PJ Masks</span>
          <span className="text-gray-400">Rudolph®</span>
          <span className="text-gray-400">Stephen Joseph®</span>
          <span className="text-gray-400">Stuffies®</span>
          <span className="text-gray-400">Tonka</span>
          <span className="text-gray-400">TRANSFORMERS</span>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import ImageSlider from "./ImageSlider";
import CuratedGiftsSection from "./CuratedGiftsSection";
import BestSellersSection from "./BestSellersSection";
import GiftCollectionsSection from "./GiftCollectionsSection";
import Occasion from "./Occasion";

export default function HeroSection() {
  return (
    <div className="relative">
      {/* Promo Banner */}
      <div className="flex items-center justify-between w-full px-8 py-4 bg-white border-b border-gray-200">
        {/* Left */}
        <div className="flex justify-center flex-1">
          <span className="text-2xl font-extrabold tracking-wide text-gray-600">
            SAVINGS EVENT!
          </span>
        </div>
        {/* Center */}
        <div className="flex justify-center flex-1">
          <span className="font-extrabold text-3xl text-[#b71c1c] tracking-wide">
            SAVE 30% ON EVERYTHING.
          </span>
        </div>
        {/* Right */}
        <div className="flex flex-col items-end flex-1 text-base font-medium leading-tight text-right text-gray-600">
          <span>
            Use Promo Code: <span className="font-bold">GM4U25</span>
          </span>
          <span>Hurry, Limited Time Offer!</span>
          <span className="text-sm">
            Savings based on Comp. Value. Some exclusions apply.*
          </span>
        </div>
      </div>
      
      {/* Image Slider */}
      <div className="w-full">
        <ImageSlider />
      </div>
      
      {/* Curated Gifts Section */}
      <CuratedGiftsSection />
      
      {/* Best Sellers Section */}
      <BestSellersSection />
      
      {/* Gift Collections Section */}
      <GiftCollectionsSection />
      
      {/* Occasion Section */}
      <Occasion />
    </div>
  );
}

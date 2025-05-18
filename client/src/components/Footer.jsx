import React from "react";

// Placeholder SVGs for icons
const FreePersonalizationIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#FF3F6C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 20l-7 -7a4 4 0 1 1 6.5 -6a.9 .9 0 0 0 1.5 0a4 4 0 1 1 6.5 6l-7 7" />
  </svg>
);

const QualityIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#FF3F6C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 21l8 0" />
    <path d="M12 17l0 4" />
    <path d="M17 16.5c-1.05 -0.86 -2.5 -1.65 -4 -1.5c-1.5 0.15 -2.95 0.94 -4 1.85" />
    <path d="M12 15m-8 0a8 8 0 1 0 16 0a8 8 0 1 0 -16 0" />
    <path d="M12 9l0 2" />
    <path d="M12 6l0 .01" />
  </svg>
);

const GiftIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#FF3F6C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 11v-.5a4.5 4.5 0 0 0 -4.5 -4.5h-3.586a1 1 0 0 0 -.707 .293l-2.646 2.646a1 1 0 0 1 -.707 .293h-3.586a4.5 4.5 0 0 0 -4.5 4.5v3.5a4.5 4.5 0 0 0 4.5 4.5h9.5a4.5 4.5 0 0 0 4.5 -4.5v-3.5a4.5 4.5 0 0 0 -4.5 -4.5h-.5" />
    <path d="M12 7l0 -4" />
    <path d="M9 4h6" />
  </svg>
);

const FacebookIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="#FF3F6C" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.475 2 2 6.475 2 12c0 5.025 3.675 9.15 8.5 9.875V14.5H7.5V12H10.5V9.25c0-3 1.8-4.75 4.65-4.75.935 0 1.85.085 2.75.25V7.5h-1.5c-1.45 0-1.85.825-1.85 1.75V12h3L16.5 14.5h-2.5V21.875C20.325 21.15 24 17.025 24 12 24 6.475 19.525 2 12 2z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="#FF3F6C" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2.247c3.24 0 3.632.012 4.908.071 1.17.055 1.805.249 2.224.415.562.217.96.477 1.386.904.428.427.824.904 1.387.165.428.36 1.058.413 2.227.06 1.276.071 1.66.071 4.902s-.012 3.632-.071 4.908c-.055 1.17-.249 1.805-.415 2.224-.217.562-.477.96-.904 1.386-.427.428-.824.69-1.387.904-.428.165-1.058.36-2.227.413-1.276.06-1.66.071-4.902.071s-3.632-.012-4.908-.071c-1.17-.055-1.805-.249-2.224-.415-.562-.217-.96-.477-1.386-.904-.428-.427-.69-.824-.904-1.387-.165-.428-.36-1.058-.413-2.227-.06-1.276-.071-1.66-.071-4.902s.012-3.632.071-4.908c.055-1.17.249-1.805.415-2.224.217-.562.477-.96.904-1.386.427-.428.824-.69 1.387-.904.428-.165 1.058-.36 2.227-.413C8.332 2.358 8.726 2.247 12 2.247zM12 4.073c-2.43 0-2.708.01-3.675.054-.965.045-1.347.206-1.534.28-.494.19-.853.418-1.236.802-.385.383-.616.742-.806 1.232-.073.18-.235.568-.278 1.53-.046.968-.055 1.24-.055 3.67s.01 2.708.055 3.675c.043.965.205 1.347.28 1.534.19.494.418.853.802 1.236.383.385.742.616 1.232.806.18.073.568.235 1.53.278.968.046 1.24.055 3.67.055s2.708-.01 3.675-.055c.965-.043 1.347-.205 1.534-.28.494-.19.853-.418 1.236-.802.385-.383.616-.742.806-1.232.073-.18.235-.568.278-1.53.046-.968.055-1.24.055-3.67s-.01-2.708-.055-3.675c-.043-.965-.205-1.347-.28-1.534-.19-.494-.418-.853-.802-1.236-.383-.385-.742-.616-1.232-.806-.18-.073-.568-.235-.278-1.53-.046-.968-.055-1.24-.055-3.67zm-1.522 5.373a4.47 4.47 0 1 1 5.966 5.965 4.47 4.47 0 0 1 -5.965 -5.966zm1.522 2.453a2.947 2.947 0 1 0 0 5.895 2.947 2.947 0 0 0 0 -5.895zm4.806-3.572c0 .646-.525 1.172-1.172 1.172-.647 0-1.172-.526-1.172-1.172 0-.647.526-1.172 1.172-1.172.647 0 1.172.525 1.172 1.172z"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 mt-12">
      {/* Top Section: Promises */}
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row justify-around items-center text-center border-b border-gray-700">
        <div className="flex flex-col items-center p-4">
          <FreePersonalizationIcon />
          <span className="font-bold text-lg mt-2 text-white">Free Personalization</span>
          <p className="text-sm mt-1 max-w-xs text-gray-400">We perfectly personalize each and every gift and home decor item - for FREE.</p>
        </div>
        <div className="flex flex-col items-center p-4 md:border-l border-gray-700">
          <QualityIcon />
          <span className="font-bold text-lg mt-2 text-white">Commitment to Quality</span>
          <p className="text-sm mt-1 max-w-xs text-gray-400">We're committed to the highest standard of quality products and service to our customers.</p>
        </div>
        <div className="flex flex-col items-center p-4 md:border-l border-gray-700">
          <GiftIcon />
          <span className="font-bold text-lg mt-2 text-white">Perfect Gift Guarantee</span>
          <p className="text-sm mt-1 max-w-xs text-gray-400">We guarantee you'll be 100% satisfied or we'll give you your money back.</p>
        </div>
      </div>

      {/* Bottom Section: Links, Signup, Social */}
      <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Our Company */}
        <div className="flex flex-col">
        <div className="flex items-center mr-12">
        <span className="text-2xl font-bold tracking-wider transition-all duration-300 hover:scale-105">
          <span className="text-[#FF3F6C] drop-shadow-[0_2px_2px_rgba(255,63,108,0.3)] hover:drop-shadow-[0_4px_4px_rgba(255,63,108,0.5)]">HEART</span>
          <span className="text-[#FFDB1F] drop-shadow-[0_2px_2px_rgba(255,219,31,0.3)] hover:drop-shadow-[0_4px_4px_rgba(255,219,31,0.5)]">PICK</span>
        </span>
      </div>
          <a href="#" className="text-sm hover:underline mb-1 text-gray-400">About Us</a>
          <a href="#" className="text-sm hover:underline mb-1 text-gray-400">Blog</a>
          <a href="#" className="text-sm hover:underline mb-1 text-gray-400">Terms of Use</a>
          <a href="#" className="text-sm hover:underline mb-1 text-gray-400">Privacy Policy</a>
          <a href="#" className="text-sm hover:underline mb-1 text-gray-400">California Supply Chain Act</a>
          <a href="#" className="text-sm hover:underline mb-1 text-gray-400">Supplier Code of Conduct</a>
          <a href="#" className="text-sm hover:underline text-gray-400">Patents</a>
        </div>

        {/* Help */}
        <div className="flex flex-col">
          <span className="font-bold text-white mb-3">Help</span>
          <a href="#" className="text-sm hover:underline mb-1 text-gray-400">Apparel Size Charts</a>
          <a href="#" className="text-sm hover:underline mb-1 text-gray-400">Contact Us</a>
          <a href="#" className="text-sm hover:underline mb-1 text-gray-400">Frequently Asked Questions</a>
          <a href="#" className="text-sm hover:underline mb-1 text-gray-400">How to Order</a>
          <a href="#" className="text-sm hover:underline mb-1 text-gray-400">Manage Personal Information</a>
          <a href="#" className="text-sm hover:underline text-gray-400">Site Map</a>
        </div>

        {/* Info */}
        <div className="flex flex-col">
          <span className="font-bold text-white mb-3">Info</span>
          <a href="#" className="text-sm hover:underline mb-1 text-gray-400">My Account</a>
          <a href="#" className="text-sm hover:underline mb-1 text-gray-400">Order Tracking</a>
          <a href="#" className="text-sm hover:underline mb-1 text-gray-400">Shipping, Returns & Fees</a>
          <a href="#" className="text-sm hover:underline text-gray-400">Get Gifts.com App</a>
        </div>

        {/* Sign Up & Social */}
        <div className="flex flex-col">
          <span className="font-bold text-white mb-3">Sign Up For Email Savings</span>
          <div className="flex mb-4">
            <input
              type="email"
              placeholder="Email"
              className="p-2 text-sm border border-gray-700 rounded-l w-full bg-gray-800 text-white placeholder-gray-400"
            />
            <button className="bg-[#FF3F6C] text-white text-sm font-semibold px-4 py-2 rounded-r hover:bg-pink-600">SUBMIT</button>
          </div>
          <span className="font-bold text-white mb-3">Stay Connected</span>
          <div className="flex gap-4">
            <a href="#" aria-label="Facebook"><FacebookIcon /></a>
            <a href="#" aria-label="Instagram"><InstagramIcon /></a>
            {/* Add other social media icons here */}
          </div>
        </div>
      </div>

      {/* Copyright and Disclaimer */}
      <div className="container mx-auto px-4 py-4 text-center text-xs text-gray-400 border-t border-gray-700">
        <p>&copy; Copyright HeartPick. All Rights Reserved.</p>
        <p className="mt-2">*Our Comparable Value (or Comp. Value) prices are based on the prices at which similar items have been previously offered for sale by Gifts.com and/or other retailers. Some exclusions apply. Without promo code, customer can currently save 25%.</p>
        <p className="mt-1">We are committed to creating an inclusive experience for people with disabilities. If you need assistance, please contact customer service.</p>
      </div>
    </footer>
  );
}

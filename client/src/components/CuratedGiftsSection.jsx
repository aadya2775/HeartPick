import React from 'react';
import { motion } from 'framer-motion';

const giftCollections = [
  {
    id: 1,
    title: 'For Her',
    image: 'forHer.webp',
    buttonText: 'SHOP NOW',
    category: 'women'
  },
  {
    id: 2,
    title: 'For Him',
    image: 'forHim.webp',
    buttonText: 'SHOP NOW',
    category: 'men'
  },
  {
    id: 3,
    title: 'For Kids',
    image: 'kids.jpg',
    buttonText: 'SHOP NOW',
    category: 'kids'
  },
  {
    id: 4,
    title: 'For Home',
    image: 'homedecore.jpg',
    buttonText: 'SHOP NOW',
    category: 'home'
  }
  
];

const CuratedGiftsSection = () => {
  return (
    <div className="px-4 py-12 bg-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            <span className="block">CURATED GIFT COLLECTIONS</span>
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Discover perfect gifts for every occasion
          </p>
        </div>

        {/* Gift Collections Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {giftCollections.map((collection) => (
            <motion.div 
              key={collection.id}
              className="relative overflow-hidden transition-shadow duration-300 rounded-lg shadow-md group hover:shadow-xl"
              whileHover={{ y: -5 }}
            >
              <div className="w-full aspect-w-3 aspect-h-4">
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="object-cover object-center w-full transition-transform duration-500 h-80 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-end p-6 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-black/60 to-transparent group-hover:opacity-100">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full px-4 py-3 font-semibold text-gray-900 transition-colors duration-300 bg-white rounded-md hover:bg-gray-100"
                  >
                    {collection.buttonText}
                  </motion.button>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold text-center text-gray-900">
                  {collection.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: '#1a1a1a' }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-3 text-lg font-semibold text-white transition-all duration-300 bg-black rounded-full"
          >
            VIEW ALL COLLECTIONS
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default CuratedGiftsSection;

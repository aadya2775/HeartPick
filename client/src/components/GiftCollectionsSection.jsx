import React from 'react';
import { motion } from 'framer-motion';

const GiftCollectionsSection = () => {
  const collections = [
    {
      id: 1,
      title: 'FOR HER',
      subtitle: 'GIFTS SHE\'LL LOVE',
      image: 'https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      buttonText: 'SHOP NOW',
      bgColor: 'bg-gray-50'
    },
    {
      id: 2,
      title: 'FOR HIM',
      subtitle: 'PERFECT PICKS FOR HIM',
      image: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?ixlib=rb-4.0.3&auto=format&fit=crop&w=1374&q=80',
      buttonText: 'SHOP NOW',
      bgColor: 'bg-gray-50'
    }
  ];

  return (
    <div className="px-4 py-16 bg-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            SHOP BY CATEGORY
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Discover our curated collections for every occasion
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {collections.map((collection) => (
            <div 
              key={collection.id}
              className={`relative overflow-hidden rounded-lg ${collection.bgColor}`}
            >
              <div className="relative h-[500px]">
                <div className="absolute inset-0">
                  <img
                    src={collection.image}
                    alt={collection.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-12">
                  <h3 className="text-4xl font-bold text-white uppercase">
                    {collection.title}
                  </h3>
                  <p className="mt-2 text-xl text-gray-200">
                    {collection.subtitle}
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center justify-center px-8 py-3 mt-6 text-sm font-semibold text-black bg-white rounded-full w-fit hover:bg-gray-100"
                  >
                    {collection.buttonText}
                  </motion.button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GiftCollectionsSection;

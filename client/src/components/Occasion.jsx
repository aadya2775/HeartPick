import React from 'react';
import { motion } from 'framer-motion';

const Occasion = () => {
  const occasions = [
    {
      id: 1,
      title: 'BIRTHDAY',
      subtitle: 'CELEBRATE THEIR SPECIAL DAY',
      image: 'https://images.unsplash.com/photo-1530103862676-de81c4ff430?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      buttonText: 'SHOP NOW'
    },
    {
      id: 2,
      title: 'ANNIVERSARY',
      subtitle: 'CELEBRATE YEARS TOGETHER',
      image: 'https://images.unsplash.com/photo-1523438885200-eeb9a12f9e71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1374&q=80',
      buttonText: 'SHOP NOW'
    },
    {
      id: 3,
      title: 'THANK YOU',
      subtitle: 'SHOW YOUR APPRECIATION',
      image: 'https://images.unsplash.com/photo-1527481138389-2a1f3fcc9d6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      buttonText: 'SHOP NOW'
    },
    {
      id: 4,
      title: 'JUST BECAUSE',
      subtitle: 'BECAUSE YOU CARE',
      image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
      buttonText: 'SHOP NOW'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            SHOP BY OCCASION
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Find the perfect gift for every special moment
          </p>
        </div>

        {/* Occasions Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {occasions.map((occasion) => (
            <motion.div
              key={occasion.id}
              className="relative overflow-hidden rounded-lg group"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative h-64">
                <img
                  src={occasion.image}
                  alt={occasion.title}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-bold text-white uppercase">
                    {occasion.title}
                  </h3>
                  <p className="text-gray-200">{occasion.subtitle}</p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center justify-center px-6 py-2 mt-4 text-sm font-medium text-black bg-white rounded-full w-fit"
                  >
                    {occasion.buttonText}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Occasion;

import React from 'react';
import { motion } from 'framer-motion';

const Occasion = () => {
  const occasions = [
    {
      id: 1,
      title: 'BIRTHDAY',
      subtitle: 'CELEBRATE THEIR SPECIAL DAY',
      image: 'https://i5.walmartimages.com/seo/SFBOSF-pink-birthday-Party-Decoration-Kits_dcdf7ca5-4f5d-4916-b7a3-583408674426.29f43545c92dde2c8b8994574b81e3bb.jpeg',
      buttonText: 'SHOP NOW'
    },
    {
      id: 2,
      title: 'ANNIVERSARY',
      subtitle: 'CELEBRATE YEARS TOGETHER',
      image: 'https://rukminim3.flixcart.com/image/850/1000/xif0q/wall-decoration/w/j/w/couples-wedding-or-anniversary-gift-for-every-special-occasion-1-original-imagzy8ggh6ykvk7.jpeg?q=90&crop=false',
      buttonText: 'SHOP NOW'
    },
    {
      id: 3,
      title: 'THANK YOU',
      subtitle: 'SHOW YOUR APPRECIATION',
      image: 'https://goodwishes.com/wp-content/uploads/2024/02/A-Vibrant-Display-of-Trending-Thank-You-Message-1024x614-1.jpg',
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

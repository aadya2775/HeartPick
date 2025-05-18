import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    id: 1,
    title: 'Gifts for Every Occasion',
    subtitle: 'Find the perfect gift for your loved ones',
    image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80',
    buttonText: 'Shop Now',
    buttonLink: '#shop'
  },
  {
    id: 2,
    title: 'Exclusive Deals',
    subtitle: 'Up to 50% off on selected items',
    image: 'https://images.unsplash.com/photo-1483181957632-8bda974cbc91?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80',
    buttonText: 'View Offers',
    buttonLink: '#offers'
  },
  {
    id: 3,
    title: 'New Arrivals',
    subtitle: 'Discover our latest collection',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80',
    buttonText: 'Explore',
    buttonLink: '#new-arrivals'
  }
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => 
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 }
      }
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 }
      }
    })
  };

  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      <AnimatePresence mode="wait" custom={direction} initial={false}>
        <motion.div
          key={slides[currentIndex].id}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0 flex items-center justify-center"
        >
          <div 
            className="absolute inset-0 bg-center bg-cover"
            style={{ 
              backgroundImage: `url(${slides[currentIndex].image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'brightness(0.7)'
            }}
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="relative z-10 max-w-4xl px-4 mx-auto text-center text-white">
            <motion.h1 
              className="mb-4 text-4xl font-bold md:text-6xl"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              {slides[currentIndex].title}
            </motion.h1>
            <motion.p 
              className="mb-8 text-xl md:text-2xl"
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              {slides[currentIndex].subtitle}
            </motion.p>
            <motion.a
              href={slides[currentIndex].buttonLink}
              className="inline-block bg-[#FF3F6C] hover:bg-[#FF1A4D] text-white font-bold py-3 px-8 rounded-full text-lg transition-colors duration-300"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {slides[currentIndex].buttonText}
            </motion.a>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute z-20 p-3 text-white transition-colors duration-300 -translate-y-1/2 rounded-full left-4 top-1/2 bg-black/30 hover:bg-black/50"
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button 
        onClick={nextSlide}
        className="absolute z-20 p-3 text-white transition-colors duration-300 -translate-y-1/2 rounded-full right-4 top-1/2 bg-black/30 hover:bg-black/50"
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Pagination Dots */}
      <div className="absolute z-20 flex space-x-2 -translate-x-1/2 bottom-6 left-1/2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              index === currentIndex ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;

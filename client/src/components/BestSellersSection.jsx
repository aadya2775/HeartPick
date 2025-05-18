import { motion } from 'framer-motion';

// Format price to Indian Rupees
const formatPrice = (price) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(price);
};

const products = [
  {
    id: 1,
    name: 'Wireless Earbuds',
    price: 8299,
    originalPrice: 10799,
    discount: 23,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    isNew: true,
    isBestSeller: true
  },
  {
    id: 2,
    name: 'Smart Watch Pro',
    price: 19999,
    originalPrice: 24999,
    discount: 20,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    isNew: true,
    isBestSeller: true
  },
  {
    id: 3,
    name: 'Bluetooth Speaker',
    price: 7999,
    originalPrice: 9999,
    discount: 20,
    rating: 4.3,
    image: 'https://5.imimg.com/data5/SELLER/Default/2023/1/LS/XW/DD/8268091/untitled-design-30--500x500.png',
    isNew: false,
    isBestSeller: true
  },
  {
    id: 4,
    name: 'Wireless Charger',
    price: 2999,
    originalPrice: 3999,
    discount: 25,
    rating: 4.1,
    image: 'https://honeywellconnection.com/in/wp-content/uploads/2024/08/main-image-4.jpg',
    isNew: false,
    isBestSeller: true
  },
  {
    id: 5,
    name: 'Smartphone Stand',
    price: 1999,
    originalPrice: 2499,
    discount: 20,
    rating: 4.0,
    image: 'https://images.unsplash.com/photo-1580913428735-bd3c269d6a82?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    isNew: true,
    isBestSeller: false
  },
  {
    id: 6,
    name: 'Portable SSD 1TB',
    price: 12999,
    originalPrice: 14999,
    discount: 13,
    rating: 4.8,
    image: 'https://poojaelectronics.in/storage/2023/07/Samsung-1TB-T7-Portable-SSD-1050-MBs-Blue-Online-Buy-India_02.jpg',
    isNew: false,
    isBestSeller: true
  },
  {
    id: 7,
    name: 'Wireless Keyboard',
    price: 5999,
    originalPrice: 7999,
    discount: 25,
    rating: 4.4,
    image: 'https://images.unsplash.com/photo-1593642702821-8a615648e970?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    isNew: false,
    isBestSeller: false
  },
  {
    id: 8,
    name: 'Noise Cancelling Headphones',
    price: 17999,
    originalPrice: 22999,
    discount: 22,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    isNew: true,
    isBestSeller: true
  }
];

const BestSellersSection = () => {
  // Filter best sellers only
  const bestSellers = products.filter(product => product.isBestSeller);

  // Star rating component
  const StarRating = ({ rating }) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(
          <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        );
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(
          <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
            <defs>
              <linearGradient id="half" x1="0" x2="100%" y1="0" y2="0">
                <stop offset="50%" stopColor="currentColor" />
                <stop offset="50%" stopColor="#D1D5DB" />
              </linearGradient>
            </defs>
            <path fill="url(#half)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        );
      } else {
        stars.push(
          <svg key={i} className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        );
      }
    }
    
    return <div className="flex">{stars}</div>;
  };

  return (
    <div className="px-4 py-16 bg-gray-50 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            <span className="block">BEST SELLERS</span>
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Our most loved products by customers
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button
              type="button"
              className="px-6 py-3 text-sm font-medium text-white transition-colors bg-black rounded-l-lg hover:bg-gray-800 focus:z-10 focus:ring-2 focus:ring-black focus:text-white"
            >
              ALL
            </button>
            <button
              type="button"
              className="px-6 py-3 text-sm font-medium text-gray-700 transition-colors bg-white hover:bg-gray-50 focus:z-10 focus:ring-2 focus:ring-black focus:text-black"
            >
              NEW ARRIVALS
            </button>
            <button
              type="button"
              className="px-6 py-3 text-sm font-medium text-gray-700 transition-colors bg-white rounded-r-lg hover:bg-gray-50 focus:z-10 focus:ring-2 focus:ring-black focus:text-black"
            >
              BEST SELLERS
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {bestSellers.map((product) => (
            <motion.div
              key={product.id}
              className="overflow-hidden transition-shadow duration-300 bg-white rounded-lg shadow-md hover:shadow-xl"
              whileHover={{ y: -5 }}
            >
              <div className="relative">
                {/* Product Image */}
                <div className="w-full overflow-hidden aspect-w-1 aspect-h-1">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-cover object-center w-full h-64 group-hover:opacity-75"
                  />
                </div>
                
                {/* Badges */}
                <div className="absolute flex gap-2 top-2 left-2">
                  {product.isNew && (
                    <span className="bg-green-500 text-white text-xs font-semibold px-2.5 py-0.5 rounded">
                      NEW
                    </span>
                  )}
                  {product.discount > 0 && (
                    <span className="bg-red-500 text-white text-xs font-semibold px-2.5 py-0.5 rounded">
                      -{product.discount}%
                    </span>
                  )}
                </div>
                
                {/* Quick View Button */}
                <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 bg-black bg-opacity-0 opacity-0 group-hover:bg-opacity-10 group-hover:opacity-100">
                  <button className="px-4 py-2 font-medium text-black transition-colors bg-white rounded-md hover:bg-gray-100">
                    QUICK VIEW
                  </button>
                </div>
              </div>
              
              {/* Product Info */}
              <div className="p-4">
                <h3 className="mb-1 text-lg font-medium text-gray-900">
                  {product.name}
                </h3>
                <div className="flex items-center mb-2">
                  <StarRating rating={product.rating} />
                  <span className="ml-2 text-xs text-gray-500">
                    ({Math.floor(Math.random() * 100) + 1} reviews)
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="text-lg font-bold text-gray-900">
                    {formatPrice(product.price)}
                  </span>
                  {product.originalPrice > product.price && (
                    <span className="ml-2 text-sm text-gray-500 line-through">
                      {formatPrice(product.originalPrice)}
                    </span>
                  )}
                </div>
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
            VIEW ALL PRODUCTS
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default BestSellersSection;

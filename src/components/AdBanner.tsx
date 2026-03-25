import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { useProducts } from '../context/ProductContext';
import { Product } from '../types';
import { Tag } from 'lucide-react';

export const AdBanner = () => {
  const { products } = useProducts();
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (products.length > 0) {
      // Select 3 random products to feature in the ad banner
      const shuffled = [...products].sort(() => 0.5 - Math.random());
      setFeaturedProducts(shuffled.slice(0, 3));
    }
  }, [products]);

  useEffect(() => {
    if (featuredProducts.length === 0) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredProducts.length);
    }, 5000); // Rotate every 5 seconds
    
    return () => clearInterval(interval);
  }, [featuredProducts]);

  if (featuredProducts.length === 0) return null;

  return (
    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden sticky top-24">
      <div className="bg-indigo-600 px-4 py-3 flex items-center gap-2">
        <Tag className="w-4 h-4 text-indigo-100" />
        <h3 className="text-sm font-bold text-white uppercase tracking-wider">Featured Deals</h3>
      </div>
      
      <div className="relative h-[400px] w-full bg-gray-50">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex flex-col"
          >
            <Link to={`/product/${featuredProducts[currentIndex].id}`} className="flex-grow flex flex-col group">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={featuredProducts[currentIndex].image} 
                  alt={featuredProducts[currentIndex].name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {featuredProducts[currentIndex].isSale && (
                  <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    SALE
                  </div>
                )}
              </div>
              <div className="p-5 flex flex-col flex-grow justify-between bg-white">
                <div>
                  <p className="text-xs text-indigo-600 font-semibold mb-1">{featuredProducts[currentIndex].category}</p>
                  <h4 className="text-lg font-bold text-gray-900 line-clamp-2 mb-2 group-hover:text-indigo-600 transition-colors">
                    {featuredProducts[currentIndex].name}
                  </h4>
                  <p className="text-sm text-gray-500 line-clamp-2">
                    {featuredProducts[currentIndex].description}
                  </p>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex flex-col">
                    {featuredProducts[currentIndex].isSale && featuredProducts[currentIndex].salePrice ? (
                      <>
                        <span className="text-xs text-gray-400 line-through">Rs. {featuredProducts[currentIndex].price}</span>
                        <span className="text-lg font-extrabold text-red-600">Rs. {featuredProducts[currentIndex].salePrice}</span>
                      </>
                    ) : (
                      <span className="text-lg font-extrabold text-gray-900">Rs. {featuredProducts[currentIndex].price}</span>
                    )}
                  </div>
                  <span className="bg-gray-900 text-white text-xs font-bold px-3 py-2 rounded-lg group-hover:bg-indigo-600 transition-colors">
                    Shop Now
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        </AnimatePresence>
        
        {/* Pagination dots */}
        <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2 z-10">
          {featuredProducts.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex ? 'bg-indigo-600 w-4' : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

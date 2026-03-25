import React from 'react';
import { useProducts } from '../context/ProductContext';
import { ProductCard } from '../components/ProductCard';
import { motion } from 'motion/react';
import { AdBanner } from '../components/AdBanner';

export const Sale = () => {
  const { products, loading } = useProducts();
  const saleProducts = products.filter(p => p.isSale);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-red-600 mb-6 tracking-tight">Special Offers</h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">Grab your favorite pairs at unbeatable prices. Limited time only.</p>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-1/4 shrink-0 order-2 lg:order-1">
            <AdBanner />
          </div>
          
          <div className="flex-grow order-1 lg:order-2">
            {loading ? (
              <div className="flex justify-center py-24">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600"></div>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {saleProducts.map((product, index) => (
                  <ProductCard key={product.id} product={product} index={index} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

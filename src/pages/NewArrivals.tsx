import React from 'react';
import { products } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { motion } from 'motion/react';

export const NewArrivals = () => {
  const newProducts = products.filter(p => p.isNewArrival);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">New Arrivals</h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">Fresh drops and latest styles. Be the first to step out in these.</p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {newProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

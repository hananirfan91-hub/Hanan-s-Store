import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useProducts } from '../context/ProductContext';
import { useCart } from '../context/CartContext';
import { motion } from 'motion/react';
import { ShoppingCart, ArrowLeft, ShieldCheck, Truck, RotateCcw } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { ProductReviews } from '../components/ProductReviews';
import { AdBanner } from '../components/AdBanner';

export const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { products, loading } = useProducts();
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [showSizeError, setShowSizeError] = useState(false);
  
  const product = products.find(p => p.id === id);

  // Scroll to top when product changes
  useEffect(() => {
    window.scrollTo(0, 0);
    setSelectedSize(null);
    setShowSizeError(false);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 bg-gray-50">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Product not found</h2>
        <button onClick={() => navigate('/categories')} className="text-indigo-600 hover:text-indigo-800 font-semibold flex items-center gap-2">
          <ArrowLeft className="w-5 h-5" /> Back to Shop
        </button>
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const displayPrice = product.isSale && product.salePrice ? product.salePrice : product.price;

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button onClick={() => navigate(-1)} className="mb-8 text-gray-500 hover:text-indigo-600 font-medium flex items-center gap-2 transition-colors">
          <ArrowLeft className="w-5 h-5" /> Back
        </button>

        <div className="flex flex-col lg:flex-row gap-12 mb-24">
          <div className="flex-grow">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              {/* Product Image */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="relative aspect-square rounded-3xl overflow-hidden bg-gray-100"
              >
                <img 
                  src={product.image || 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop'} 
                  alt={product.name} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop';
                  }}
                />
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  <span className="px-4 py-1.5 text-sm font-bold tracking-wider text-indigo-700 uppercase bg-indigo-50/90 backdrop-blur-sm rounded-full w-fit">
                    {product.category}
                  </span>
                  {product.isSale && (
                    <span className="px-4 py-1.5 text-sm font-bold tracking-wider text-red-700 uppercase bg-red-50/90 backdrop-blur-sm rounded-full w-fit">
                      Sale
                    </span>
                  )}
                  {product.isNewArrival && (
                    <span className="px-4 py-1.5 text-sm font-bold tracking-wider text-green-700 uppercase bg-green-50/90 backdrop-blur-sm rounded-full w-fit">
                      New Arrival
                    </span>
                  )}
                </div>
              </motion.div>

              {/* Product Info */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex flex-col justify-center"
              >
                <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
                  {product.name}
                </h1>
            
            <div className="flex items-end gap-4 mb-6">
              <span className="text-4xl font-extrabold text-indigo-600">Rs. {displayPrice}</span>
              {product.isSale && product.salePrice && (
                <span className="text-xl text-gray-400 line-through mb-1">Rs. {product.price}</span>
              )}
            </div>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {product.description}
            </p>

            {product.sizes && product.sizes.length > 0 && (
              <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider">Select Size/Option</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => {
                        setSelectedSize(size);
                        setShowSizeError(false);
                      }}
                      className={`w-14 h-14 rounded-xl font-bold text-lg flex items-center justify-center transition-all duration-200 border-2 ${
                        selectedSize === size
                          ? 'border-indigo-600 bg-indigo-600 text-white shadow-md shadow-indigo-200'
                          : 'border-gray-200 bg-white text-gray-900 hover:border-indigo-600 hover:text-indigo-600'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
                {showSizeError && (
                  <p className="text-red-500 text-sm font-medium mt-3 flex items-center gap-1">
                    Please select an option before adding to cart.
                  </p>
                )}
              </div>
            )}

            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-3 text-gray-600">
                <Truck className="w-5 h-5 text-indigo-500" />
                <span>Delivery across Pakistan within 3-5 business days</span>
              </div>
              <div className="flex items-center gap-3 text-gray-600">
                <ShieldCheck className="w-5 h-5 text-indigo-500" />
                <span>100% authentic products guaranteed</span>
              </div>
            </div>

            <button
              onClick={() => {
                if (product.sizes && product.sizes.length > 0 && !selectedSize) {
                  setShowSizeError(true);
                  return;
                }
                addToCart(product, selectedSize || undefined);
              }}
              className="w-full py-4 px-8 bg-indigo-600 text-white rounded-2xl font-bold text-lg hover:bg-indigo-700 transition-colors shadow-xl shadow-indigo-200 flex items-center justify-center gap-3"
            >
              <ShoppingCart className="w-6 h-6" />
              Add to Cart
            </button>
          </motion.div>
            </div>

            {/* Product Reviews */}
            <ProductReviews productId={product.id} />

            {/* Related Products */}
            {relatedProducts.length > 0 && (
              <div className="border-t border-gray-100 pt-16 mt-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">You Might Also Like</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                  {relatedProducts.map((relatedProduct, index) => (
                    <ProductCard key={relatedProduct.id} product={relatedProduct} index={index} />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar Ads */}
          <div className="w-full lg:w-1/4 shrink-0">
            <AdBanner />
            <div className="mt-8">
              <AdBanner />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

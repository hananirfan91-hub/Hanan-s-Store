import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Heart } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { motion } from 'motion/react';

interface ProductCardProps {
  product: Product;
  index?: number;
  key?: React.Key;
}

export const ProductCard = ({ product, index = 0 }: ProductCardProps) => {
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const navigate = useNavigate();
  const isWishlisted = isInWishlist(product.id);

  const toggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (isWishlisted) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-gray-100 relative"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
          loading="lazy"
        />
        <button
          onClick={toggleWishlist}
          className="absolute top-3 right-3 p-2.5 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white shadow-sm transition-all z-10"
          aria-label="Toggle Wishlist"
        >
          <Heart
            className={`w-5 h-5 transition-colors ${
              isWishlisted ? 'fill-red-500 text-red-500' : 'text-gray-600 hover:text-red-500'
            }`}
          />
        </button>
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          <span className="px-3 py-1 text-xs font-semibold tracking-wider text-indigo-700 uppercase bg-indigo-50/90 backdrop-blur-sm rounded-full w-fit">
            {product.category}
          </span>
          {product.isSale && (
            <span className="px-3 py-1 text-xs font-semibold tracking-wider text-red-700 uppercase bg-red-50/90 backdrop-blur-sm rounded-full w-fit">
              Sale
            </span>
          )}
          {product.isNewArrival && (
            <span className="px-3 py-1 text-xs font-semibold tracking-wider text-green-700 uppercase bg-green-50/90 backdrop-blur-sm rounded-full w-fit">
              New
            </span>
          )}
        </div>
      </div>
      
      <div className="flex flex-col flex-grow p-5">
        <div className="flex justify-between items-start gap-4 mb-2">
          <h3 className="text-lg font-bold text-gray-900 leading-tight">
            {product.name}
          </h3>
          <div className="flex flex-col items-end">
            {product.isSale && product.salePrice ? (
              <>
                <span className="text-lg font-bold text-red-600">Rs. {product.salePrice}</span>
                <span className="text-sm text-gray-400 line-through">Rs. {product.price}</span>
              </>
            ) : (
              <span className="text-lg font-bold text-indigo-600">Rs. {product.price}</span>
            )}
          </div>
        </div>
        
        <p className="text-sm text-gray-500 line-clamp-2 mb-4 flex-grow">
          {product.description}
        </p>
        
        {product.sizes && product.sizes.length > 0 && (
          <div className="mb-4">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Sizes (UK)</p>
            <div className="flex flex-wrap gap-1.5">
              {product.sizes.slice(0, 5).map(size => (
                <span key={size} className="text-xs font-medium text-gray-600 bg-gray-100 px-2 py-1 rounded-md">
                  {size}
                </span>
              ))}
              {product.sizes.length > 5 && (
                <span className="text-xs font-medium text-gray-600 bg-gray-100 px-2 py-1 rounded-md">
                  +{product.sizes.length - 5}
                </span>
              )}
            </div>
          </div>
        )}
        
        <div className="flex gap-2 mt-auto">
          <Link
            to={`/product/${product.id}`}
            className="flex-1 flex items-center justify-center py-3 px-4 bg-gray-100 text-gray-900 rounded-xl font-medium hover:bg-gray-200 active:scale-[0.98] transition-all duration-200"
          >
            View Detail
          </Link>
          <button
            onClick={() => {
              if (product.sizes && product.sizes.length > 0) {
                navigate(`/product/${product.id}`);
              } else {
                addToCart(product);
              }
            }}
            className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-gray-900 text-white rounded-xl font-medium hover:bg-indigo-600 active:scale-[0.98] transition-all duration-200"
          >
            <ShoppingCart className="w-5 h-5" />
            <span>{product.sizes && product.sizes.length > 0 ? 'Select Size' : 'Add'}</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

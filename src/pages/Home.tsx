import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, ShieldCheck, Truck, ChevronUp, ChevronDown } from 'lucide-react';
import { useProducts } from '../context/ProductContext';
import { ProductCard } from '../components/ProductCard';
import { ProductsByCategory } from '../components/ProductsByCategory';
import { AdBanner } from '../components/AdBanner';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

export const Home = () => {
  const { t } = useLanguage();
  const { products, loading } = useProducts();
  const featuredProducts = products.slice(0, 4);
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?w=1600&q=80",
      title: t('hero1Title'),
      highlight: t('hero1Highlight'),
      subtitle: t('hero1Sub'),
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1600&q=80",
      title: t('hero2Title'),
      highlight: t('hero2Highlight'),
      subtitle: t('hero2Sub'),
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=1600&q=80",
      title: t('hero3Title'),
      highlight: t('hero3Highlight'),
      subtitle: t('hero3Sub'),
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white overflow-hidden h-[600px] lg:h-[700px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
            className="absolute inset-0 z-0"
          >
            <img
              src={heroSlides[currentSlide].image}
              alt="Hero Background"
              className="w-full h-full object-cover opacity-40 mix-blend-overlay"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent" />
          </motion.div>
        </AnimatePresence>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-2xl"
            >
              <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
                {heroSlides[currentSlide].title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">{heroSlides[currentSlide].highlight}</span>
              </h1>
              <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-xl">
                {heroSlides[currentSlide].subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/categories"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold text-white bg-indigo-600 rounded-full hover:bg-indigo-500 hover:scale-105 transition-all duration-300 hover:shadow-[0_0_20px_rgba(79,70,229,0.4)]"
                >
                  {t('shopNow')}
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/categories"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border border-white/20 rounded-full hover:bg-white/10 hover:scale-105 transition-all duration-300 backdrop-blur-sm"
                >
                  {t('viewCollections')}
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Slider Controls */}
        <div className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 flex flex-col justify-center items-center gap-4">
          <button onClick={prevSlide} className="p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-colors text-white">
            <ChevronUp className="w-6 h-6" />
          </button>
          <div className="flex flex-col gap-2">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2.5 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-indigo-500 h-8' : 'bg-white/50 hover:bg-white/80 h-2.5'}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          <button onClick={nextSlide} className="p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-colors text-white">
            <ChevronDown className="w-6 h-6" />
          </button>
        </div>
      </section>

      {/* Marquee Banner */}
      <div className="bg-indigo-600 text-white py-3 overflow-hidden flex whitespace-nowrap relative group">
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 40s linear infinite;
          }
          .group:hover .animate-marquee {
            animation-play-state: paused;
          }
        `}</style>
        <div className="animate-marquee flex gap-10 items-center w-max">
          {[...Array(20)].map((_, i) => (
            <span key={i} className="text-sm font-bold tracking-widest uppercase">
              {t('megaSale')}
            </span>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 p-6 rounded-2xl bg-gray-50 border border-gray-100"
            >
              <div className="p-3 bg-indigo-100 text-indigo-600 rounded-xl">
                <Truck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">{t('featuresFreeShipping')}</h3>
                <p className="text-sm text-gray-500">{t('featuresFreeShippingDesc')}</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex items-center gap-4 p-6 rounded-2xl bg-gray-50 border border-gray-100"
            >
              <div className="p-3 bg-indigo-100 text-indigo-600 rounded-xl">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">{t('featuresSecurePayment')}</h3>
                <p className="text-sm text-gray-500">{t('featuresSecurePaymentDesc')}</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-4 p-6 rounded-2xl bg-gray-50 border border-gray-100"
            >
              <div className="p-3 bg-indigo-100 text-indigo-600 rounded-xl">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">{t('featuresFastDelivery')}</h3>
                <p className="text-sm text-gray-500">{t('featuresFastDeliveryDesc')}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Shop by Categories</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Explore our wide range of collections</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            {[
              { name: 'Clothes', image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&q=80', link: '/categories?search=clothes' },
              { name: 'Shirts', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&q=80', link: '/categories?search=shirts' },
              { name: 'Pants', image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80', link: '/categories?search=pants' },
              { name: 'Watches', image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&q=80', link: '/categories?search=watches' },
              { name: 'Airpods', image: 'https://images.unsplash.com/photo-1584865288642-42078afe6942?w=400&q=80', link: '/categories?search=airpods' },
            ].map((cat, index) => (
              <Link to={cat.link} key={index} className="group relative rounded-2xl overflow-hidden aspect-[4/5] block">
                <img src={cat.image} alt={cat.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                  <h3 className="text-white font-bold text-lg sm:text-xl tracking-wide">{cat.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Top Products Slider */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="flex justify-between items-end">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t('topProducts')}</h2>
              <p className="text-gray-500 max-w-2xl">{t('topProductsDesc')}</p>
            </div>
            <Link
              to="/categories"
              className="hidden sm:flex items-center gap-2 text-indigo-600 font-semibold hover:text-indigo-700 transition-colors"
            >
              {t('viewAll')}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div className="relative group">
          <style>{`
            @keyframes slide {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-slide {
              animation: slide 40s linear infinite;
            }
            .group:hover .animate-slide {
              animation-play-state: paused;
            }
          `}</style>
          {loading ? (
            <div className="flex justify-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
            </div>
          ) : (
            <div className="flex gap-8 w-max animate-slide px-4 sm:px-6 lg:px-8">
              {/* Duplicate products to create a seamless loop */}
              {[...products.slice(0, 8), ...products.slice(0, 8)].map((product, index) => (
                <div key={`${product.id}-${index}`} className="w-[280px] sm:w-[320px] shrink-0">
                  <ProductCard product={product} index={index} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Products by Category */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t('shopByCategory')}</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">{t('shopByCategoryDesc')}</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            <div className="w-full lg:w-1/4 shrink-0 order-2 lg:order-1">
              <AdBanner />
            </div>
            <div className="flex-grow order-1 lg:order-2">
              <ProductsByCategory />
            </div>
          </div>
        </div>
      </section>
      
      {/* Promotional Banners */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative h-[400px] rounded-3xl overflow-hidden group">
              <img src="https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=800&q=80" alt="Casual Collection" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6 text-center">
                <h3 className="text-3xl font-bold mb-4">{t('urbanCasuals')}</h3>
                <p className="mb-6">{t('urbanSubtitle')}</p>
                <Link to="/categories" className="px-6 py-3 bg-white text-gray-900 font-bold rounded-full hover:bg-indigo-50 transition-colors">{t('shopCollection')}</Link>
              </div>
            </div>
            <div className="relative h-[400px] rounded-3xl overflow-hidden group">
              <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80" alt="Athletic Collection" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6 text-center">
                <h3 className="text-3xl font-bold mb-4">{t('proAthletics')}</h3>
                <p className="mb-6">{t('proSubtitle')}</p>
                <Link to="/categories" className="px-6 py-3 bg-white text-gray-900 font-bold rounded-full hover:bg-indigo-50 transition-colors">{t('shopAthletics')}</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-12 bg-gradient-to-br from-indigo-900 to-gray-900 rounded-3xl text-white shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-indigo-500 rounded-full blur-3xl opacity-30"></div>
            <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-purple-500 rounded-full blur-3xl opacity-30"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Join the Club</h2>
              <p className="text-indigo-100 mb-8 max-w-xl mx-auto">
                Subscribe to our newsletter to get updates on our latest offers, new arrivals, and exclusive promotions.
              </p>
              <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-indigo-400 backdrop-blur-sm"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-white text-indigo-900 font-bold rounded-xl hover:bg-indigo-50 transition-colors whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, CreditCard, Lock, ShieldCheck } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useProducts } from '../context/ProductContext';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'motion/react';
import { AdBanner } from '../components/AdBanner';

export const Checkout = () => {
  const { items, clearCart, totalPrice } = useCart();
  const { products } = useProducts();
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    const orderDetails = items.map(item => `${item.name} (Qty: ${item.quantity}${item.selectedSize ? `, Size: ${item.selectedSize}` : ''})`).join(' | ');
    
    // Calculate total safely using backend/verified product prices
    let verifiedTotal = 0;
    for (const item of items) {
      const dbProduct = products.find(p => p.id === item.id);
      if (dbProduct) {
        const itemPrice = dbProduct.isSale && dbProduct.salePrice ? dbProduct.salePrice : dbProduct.price;
        verifiedTotal += itemPrice * item.quantity;
      }
    }
    
    const payload = {
      firstName: formData.get('firstName') as string || '',
      lastName: formData.get('lastName') as string || '',
      email: formData.get('email') as string || '',
      streetAddress: formData.get('address') as string || '',
      city: formData.get('city') as string || '',
      zipCode: formData.get('postalCode') as string || '',
      productName: orderDetails,
      totalAmount: verifiedTotal.toString()
    };

    console.log("Sending payload to Google Sheets:", payload);

    const formBody = new URLSearchParams();
    Object.entries(payload).forEach(([key, value]) => {
      formBody.append(key, value);
    });

    try {
      await fetch('https://script.google.com/macros/s/AKfycbwKLtbl4Dw8XtnkWoYSpKfInwJ5HnuWLTB15DZbg_JuEIwhsn89X8BjIE2wftSAcV28KQ/exec', {
        method: 'POST',
        body: formBody,
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        }
      });
      
      setIsSubmitting(false);
      setIsSuccess(true);
      clearCart();
      setTimeout(() => {
        navigate('/');
      }, 3000);
    } catch (error) {
      console.error('Error submitting order:', error);
      setIsSubmitting(false);
      alert('There was an issue submitting your order. Please try again.');
    }
  };

  if (items.length === 0 && !isSuccess) {
    navigate('/cart');
    return null;
  }

  if (isSuccess) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-4 bg-gray-50">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center p-12 bg-white rounded-3xl shadow-sm border border-gray-100 max-w-md w-full"
        >
          <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-green-500" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">{t('orderSuccess')}</h2>
          <p className="text-gray-500 mb-8 leading-relaxed">
            {t('orderSuccessDesc')}
          </p>
          <p className="text-sm text-gray-400">Redirecting to home...</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">Secure Checkout</h1>
          <p className="text-gray-500 mt-2 flex items-center justify-center gap-2">
            <Lock className="w-4 h-4" />
            Your connection is secure and encrypted
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Checkout Form */}
          <div className="flex-grow">
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              onSubmit={handleSubmit}
              className="space-y-8"
            >
              {/* Contact Information */}
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-sm">1</span>
                  {t('contactInfo')}
                </h2>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">{t('email')}</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-shadow bg-gray-50 focus:bg-white"
                  />
                </div>
              </div>

              {/* Delivery */}
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-sm">2</span>
                  {t('shippingAddress')}
                </h2>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
                    <input
                      type="text"
                      id="country"
                      value="Pakistan"
                      disabled
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-100 text-gray-500 cursor-not-allowed"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">{t('firstName')}</label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-shadow bg-gray-50 focus:bg-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">{t('lastName')}</label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-shadow bg-gray-50 focus:bg-white"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700">{t('address')}</label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-shadow bg-gray-50 focus:bg-white"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-2 md:col-span-1">
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700">{t('city')}</label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-shadow bg-gray-50 focus:bg-white"
                      />
                    </div>
                    <div className="space-y-2 md:col-span-1">
                      <label htmlFor="province" className="block text-sm font-medium text-gray-700">{t('province')}</label>
                      <input
                        type="text"
                        id="province"
                        name="province"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-shadow bg-gray-50 focus:bg-white"
                      />
                    </div>
                    <div className="space-y-2 md:col-span-1">
                      <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700">{t('postalCode')}</label>
                      <input
                        type="text"
                        id="postalCode"
                        name="postalCode"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-shadow bg-gray-50 focus:bg-white"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">{t('phone')}</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-shadow bg-gray-50 focus:bg-white"
                    />
                  </div>
                </div>
              </div>

              {/* Shipping Method */}
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-sm">3</span>
                  Shipping Method
                </h2>
                <div className="p-4 border-2 border-indigo-500 rounded-2xl bg-indigo-50/50 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded-full bg-indigo-600 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-white"></div>
                    </div>
                    <span className="font-semibold text-indigo-900">Standard</span>
                  </div>
                  <span className="font-bold text-indigo-900">Free</span>
                </div>
              </div>

              {/* Payment Method */}
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-sm">4</span>
                  Payment Method
                </h2>
                <p className="text-sm text-gray-500 mb-4">All transactions are secure and encrypted.</p>
                
                <div className="p-4 border-2 border-indigo-500 rounded-2xl bg-indigo-50/50 flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 rounded-full bg-indigo-600 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-white"></div>
                      </div>
                      <span className="font-semibold text-indigo-900">Cash on Delivery (COD)</span>
                    </div>
                  </div>
                  <div className="pl-7 text-sm text-indigo-800">
                    Pay with cash upon delivery.
                  </div>
                </div>
              </div>

              {/* Billing Address */}
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-sm">5</span>
                  Billing Address
                </h2>
                <div className="p-4 border border-gray-200 rounded-2xl bg-gray-50 flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full bg-indigo-600 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                  </div>
                  <span className="font-medium text-gray-900">Same as delivery address</span>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 py-4 px-6 bg-gray-900 text-white rounded-xl font-bold text-lg hover:bg-indigo-600 transition-colors shadow-lg shadow-gray-200 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    {t('processing')}
                  </span>
                ) : (
                  <>
                    <ShieldCheck className="w-5 h-5" />
                    {t('completeOrder')} (Rs. {totalPrice.toFixed(2)})
                  </>
                )}
              </button>
            </motion.form>
          </div>

          {/* Order Summary Sidebar */}
          <div className="w-full lg:w-96 shrink-0">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 sticky top-24">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('orderSummary')}</h2>
              
              <div className="space-y-4 mb-6 max-h-64 overflow-y-auto pr-2 custom-scrollbar">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-100 shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-grow">
                      <h4 className="text-sm font-bold text-gray-900 line-clamp-1">{item.name}</h4>
                      <p className="text-xs text-gray-500">
                        Qty: {item.quantity} {item.selectedSize && `| Size: ${item.selectedSize}`}
                      </p>
                      <p className="text-sm font-bold text-indigo-600">Rs. {((item.isSale && item.salePrice ? item.salePrice : item.price) * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-4 pt-6 border-t border-gray-100">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span className="font-semibold text-gray-900">Rs. {totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span className="font-semibold text-green-600">Free</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Taxes</span>
                  <span className="font-semibold text-gray-900">Rs. 0.00</span>
                </div>
                <div className="pt-4 border-t border-gray-100">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-gray-900">{t('total')}</span>
                    <span className="text-3xl font-extrabold text-indigo-600">Rs. {totalPrice.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <AdBanner />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

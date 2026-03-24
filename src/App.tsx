/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';
import { LanguageProvider } from './context/LanguageContext';
import { AuthProvider } from './context/AuthContext';
import { ProductProvider } from './context/ProductContext';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Categories } from './pages/Categories';
import { Cart } from './pages/Cart';
import { Wishlist } from './pages/Wishlist';
import { Checkout } from './pages/Checkout';
import { Sale } from './pages/Sale';
import { NewArrivals } from './pages/NewArrivals';
import { About, FAQ, Shipping, Tracking, Privacy, Terms, Cookies } from './pages/InfoPages';
import { Login } from './pages/Login';
import { AdminDashboard } from './pages/AdminDashboard';
import { ProtectedRoute } from './components/ProtectedRoute';

import { ProductDetail } from './pages/ProductDetail';

export default function App() {
  return (
    <AuthProvider>
      <ProductProvider>
        <LanguageProvider>
          <WishlistProvider>
            <CartProvider>
              <Router>
                <Routes>
                <Route path="/" element={<Layout />}>
                  <Route index element={<Home />} />
                  <Route path="categories" element={<Categories />} />
                  <Route path="sale" element={<Sale />} />
                  <Route path="new-arrivals" element={<NewArrivals />} />
                  <Route path="product/:id" element={<ProductDetail />} />
                  <Route path="cart" element={<Cart />} />
                  <Route path="wishlist" element={<Wishlist />} />
                  <Route path="checkout" element={<Checkout />} />
                  <Route path="about" element={<About />} />
                  <Route path="faq" element={<FAQ />} />
                  <Route path="shipping" element={<Shipping />} />
                  <Route path="tracking" element={<Tracking />} />
                  <Route path="privacy" element={<Privacy />} />
                  <Route path="terms" element={<Terms />} />
                  <Route path="cookies" element={<Cookies />} />
                  <Route path="login" element={<Login />} />
                  
                  {/* Protected Admin Route */}
                  <Route element={<ProtectedRoute requireAdmin={true} />}>
                    <Route path="admin" element={<AdminDashboard />} />
                  </Route>
                </Route>
              </Routes>
              </Router>
            </CartProvider>
          </WishlistProvider>
        </LanguageProvider>
      </ProductProvider>
    </AuthProvider>
  );
}

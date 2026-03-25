import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="flex items-center justify-center">
                <svg width="36" height="36" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform group-hover:scale-105 transition-transform duration-300">
                  <path d="M8 8L14 5V16L8 19V8Z" fill="url(#gold-light-footer)" />
                  <path d="M24 8L18 11V22L24 19V8Z" fill="url(#gold-dark-footer)" />
                  <path d="M8 19L14 22V27L8 24V19Z" fill="url(#gold-dark-footer)" />
                  <path d="M24 19L18 16V11L24 14V19Z" fill="url(#gold-light-footer)" />
                  <path d="M14 16L18 14L18 22L14 24V16Z" fill="url(#gold-mid-footer)" />
                  <defs>
                    <linearGradient id="gold-light-footer" x1="8" y1="5" x2="24" y2="27" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#FDE047" />
                      <stop offset="1" stopColor="#D97706" />
                    </linearGradient>
                    <linearGradient id="gold-mid-footer" x1="8" y1="5" x2="24" y2="27" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#F59E0B" />
                      <stop offset="1" stopColor="#B45309" />
                    </linearGradient>
                    <linearGradient id="gold-dark-footer" x1="8" y1="5" x2="24" y2="27" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#D97706" />
                      <stop offset="1" stopColor="#78350F" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <span className="font-bold text-2xl tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-600 uppercase">
                HANZOR STORE
              </span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              Your ultimate destination for online shopping in Pakistan. We bring you the latest watches, shirts, jackets, shoes, electronics, and home essentials with exceptional quality and service.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="https://facebook.com/HananIrfan001" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://x.com/hananirfan91" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://instagram.com/tearswithhanan/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://tiktok.com/@pathan_x_babarian565" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-sm hover:text-indigo-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/categories" className="text-sm hover:text-indigo-400 transition-colors">Shop Categories</Link>
              </li>
              <li>
                <Link to="/cart" className="text-sm hover:text-indigo-400 transition-colors">Your Cart</Link>
              </li>
              <li>
                <Link to="/about" className="text-sm hover:text-indigo-400 transition-colors">About Us</Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Social Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="https://facebook.com/HananIrfan001" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-indigo-400 transition-colors flex items-center gap-2">
                  <Facebook className="w-4 h-4" /> Facebook
                </a>
              </li>
              <li>
                <a href="https://x.com/hananirfan91" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-indigo-400 transition-colors flex items-center gap-2">
                  <Twitter className="w-4 h-4" /> Twitter / X
                </a>
              </li>
              <li>
                <a href="https://instagram.com/tearswithhanan/" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-indigo-400 transition-colors flex items-center gap-2">
                  <Instagram className="w-4 h-4" /> Instagram
                </a>
              </li>
              <li>
                <a href="https://tiktok.com/@pathan_x_babarian565" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-indigo-400 transition-colors flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                  TikTok
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-indigo-400 shrink-0" />
                <span className="text-sm">+92 310 6359 235</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-indigo-400 shrink-0" />
                <span className="text-sm">hananirfan91@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} HANZOR STORE. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-gray-500">
            <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link to="/cookies" className="hover:text-white transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

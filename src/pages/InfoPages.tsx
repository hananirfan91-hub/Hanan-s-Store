import React from 'react';
import { motion } from 'motion/react';

const InfoLayout = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <div className="min-h-[60vh] bg-gray-50 py-16">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{title}</h1>
        <div className="prose prose-indigo max-w-none text-gray-600 space-y-4">
          {children}
        </div>
      </motion.div>
    </div>
  </div>
);

export const About = () => (
  <InfoLayout title="About Us">
    <p>Welcome to HANZOR STORE. We are passionate about providing the best products for every need. Our journey started with a simple idea: to make online shopping in Pakistan accessible, reliable, and enjoyable for everyone.</p>
    <p>We partner with top brands to ensure quality, value, and exceptional service.</p>
  </InfoLayout>
);

export const FAQ = () => (
  <InfoLayout title="Frequently Asked Questions">
    <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2">How long does shipping take?</h3>
    <p>Standard shipping within Pakistan takes 3-5 business days.</p>
    <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-2">Do you offer international shipping?</h3>
    <p>Currently, we only offer delivery within Pakistan.</p>
  </InfoLayout>
);

export const Shipping = () => (
  <InfoLayout title="Shipping Information">
    <p>We currently exclusively deliver within Pakistan. We offer free standard shipping on all orders over Rs. 5000. For orders under Rs. 5000, a flat rate of Rs. 200 applies.</p>
  </InfoLayout>
);

export const Tracking = () => (
  <InfoLayout title="Order Tracking">
    <p>Once your order has shipped, you will receive an email with a tracking number. You can use this number on our carrier's website to track your package.</p>
  </InfoLayout>
);

export const Privacy = () => (
  <InfoLayout title="Privacy Policy">
    <p>Your privacy is important to us. It is HANZOR STORE's policy to respect your privacy regarding any information we may collect from you across our website.</p>
    <p>We only ask for personal information when we truly need it to provide a service to you.</p>
  </InfoLayout>
);

export const Terms = () => (
  <InfoLayout title="Terms of Service">
    <p>By accessing our website, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.</p>
  </InfoLayout>
);

export const Cookies = () => (
  <InfoLayout title="Cookie Policy">
    <p>We use cookies to help improve your experience of our website. This cookie policy is part of HANZOR STORE's privacy policy, and covers the use of cookies between your device and our site.</p>
  </InfoLayout>
);

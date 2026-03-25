import { Product } from '../types';

const images = [
  'https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&w=800&q=80', // iPhone
  'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80', // T-shirt
  'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80', // Leather Jacket
  'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80', // Shoes
  'https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=800&q=80', // Watch
  'https://images.unsplash.com/photo-1596755094514-f87e32f85e2c?auto=format&fit=crop&w=800&q=80', // Casual Shirt
  'https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?auto=format&fit=crop&w=800&q=80', // Denim Jacket
  'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=800&q=80', // Formal Shoes
  'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=800&q=80', // Smartwatch
  'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80', // Headphones
  'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=800&q=80', // Pants 1
  'https://images.unsplash.com/photo-1584865288642-42078afe6942?auto=format&fit=crop&w=800&q=80', // Airpods
  'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=800&q=80', // Shirts 2
  'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80', // Pants 2
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Smartphone Pro Max',
    price: 250000,
    image: images[0],
    category: 'Electronics',
    description: 'Experience the next generation of smartphones with the Pro Max.',
    isSale: true,
    salePrice: 240000,
  },
  {
    id: '2',
    name: 'Classic Cotton T-Shirt',
    price: 2800,
    image: images[1],
    category: 'Shirts',
    description: 'Our lightest cotton t-shirt ever, designed for ultimate comfort.',
    isNewArrival: true,
    sizes: [38, 40, 42, 44]
  },
  {
    id: '3',
    name: 'Premium Leather Jacket',
    price: 15000,
    image: images[2],
    category: 'Clothes',
    description: 'Timeless style meets everyday utility in this classic leather jacket.',
    isSale: true,
    salePrice: 12000,
    sizes: [38, 40, 42]
  },
  {
    id: '4',
    name: 'Sport Running Shoes',
    price: 8000,
    image: images[3],
    category: 'Shoes',
    description: 'Rejuvenate your run with our premium lightweight running shoes.',
    isNewArrival: true,
    sizes: [7, 8, 9, 10, 11]
  },
  {
    id: '5',
    name: 'Luxury Chronograph Watch',
    price: 18000,
    image: images[4],
    category: 'Watches',
    description: 'The iconic watch returns with classic details and throwback flair.',
    isSale: true,
    salePrice: 15000,
  },
  {
    id: '6',
    name: 'Casual Oxford Shirt',
    price: 4500,
    image: images[5],
    category: 'Shirts',
    description: 'Advanced support and unmatched comfort for your daily wear.',
    sizes: [38, 40, 42, 44]
  },
  {
    id: '7',
    name: 'Vintage Denim Jacket',
    price: 12000,
    image: images[6],
    category: 'Clothes',
    description: 'The undisputed classic denim jacket, ready to be styled your way.',
    sizes: [38, 40, 42]
  },
  {
    id: '8',
    name: 'Formal Leather Shoes',
    price: 14000,
    image: images[7],
    category: 'Shoes',
    description: 'The legend lives on in these formal shoes, a modern take on iconic style.',
    isNewArrival: true,
    sizes: [7, 8, 9, 10, 11]
  },
  {
    id: '9',
    name: 'Advanced Smartwatch',
    price: 22000,
    image: images[8],
    category: 'Watches',
    description: 'A perfect blend of heritage style and modern smart features.',
  },
  {
    id: '10',
    name: 'Wireless Noise-Cancelling Headphones',
    price: 35000,
    image: images[9],
    category: 'Electronics',
    description: 'Take your music anywhere with these premium headphones.',
    isSale: true,
    salePrice: 30000,
  },
  {
    id: '11',
    name: 'Slim Fit Chino Pants',
    price: 5500,
    image: images[10],
    category: 'Pants',
    description: 'Versatile and comfortable chino pants for any occasion.',
    sizes: [30, 32, 34, 36]
  },
  {
    id: '12',
    name: 'Pro Wireless Airpods',
    price: 45000,
    image: images[11],
    category: 'Airpods',
    description: 'Immersive sound and seamless connectivity with our pro airpods.',
    isNewArrival: true,
  },
  {
    id: '13',
    name: 'Printed Summer Shirt',
    price: 3200,
    image: images[12],
    category: 'Shirts',
    description: 'Stay cool and stylish with this breathable summer shirt.',
    sizes: [38, 40, 42, 44]
  },
  {
    id: '14',
    name: 'Classic Denim Pants',
    price: 6000,
    image: images[13],
    category: 'Pants',
    description: 'Durable and timeless denim pants that never go out of style.',
    isSale: true,
    salePrice: 5000,
    sizes: [30, 32, 34, 36, 38]
  }
];

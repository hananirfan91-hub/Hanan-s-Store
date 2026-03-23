import { Product } from '../types';

const defaultSizes = [6, 7, 8, 9, 10, 11, 12];
const images = [
  'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=800&q=80'
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Air Max Pulse',
    price: 15000,
    image: images[0],
    category: 'Running',
    description: 'Experience the next generation of Air technology with the Air Max Pulse.',
    isSale: true,
    salePrice: 12000,
    sizes: defaultSizes
  },
  {
    id: '2',
    name: 'Ultraboost Light',
    price: 19000,
    image: images[1],
    category: 'Running',
    description: 'Our lightest Ultraboost ever, designed for ultimate energy return.',
    isNewArrival: true,
    sizes: defaultSizes
  },
  {
    id: '3',
    name: 'Classic Leather',
    price: 8500,
    image: images[2],
    category: 'Casual',
    description: 'Timeless style meets everyday comfort in these classic leather sneakers.',
    isSale: true,
    salePrice: 6500,
    sizes: defaultSizes
  },
  {
    id: '4',
    name: 'ZoomX Vaporfly',
    price: 25000,
    image: images[3],
    category: 'Running',
    description: 'Break your personal best with our fastest racing shoe yet.',
    isNewArrival: true,
    sizes: defaultSizes
  },
  {
    id: '5',
    name: 'Dunk Low Retro',
    price: 11000,
    image: images[4],
    category: 'Lifestyle',
    description: 'The iconic hoops shoe returns with classic details and throwback hoops flair.',
    isSale: true,
    salePrice: 9000,
    sizes: defaultSizes
  },
  {
    id: '6',
    name: 'Gel-Kayano 30',
    price: 16000,
    image: images[5],
    category: 'Running',
    description: 'Advanced support and unmatched comfort for your longest runs.',
    sizes: defaultSizes
  },
  {
    id: '7',
    name: 'Chuck Taylor All Star',
    price: 6500,
    image: images[0],
    category: 'Casual',
    description: 'The undisputed classic, ready to be styled your way.',
    sizes: defaultSizes
  },
  {
    id: '8',
    name: 'Air Force 1',
    price: 11500,
    image: images[1],
    category: 'Lifestyle',
    description: 'The legend lives on in the Air Force 1, a modern take on the iconic AF1.',
    isNewArrival: true,
    sizes: defaultSizes
  },
  {
    id: '9',
    name: 'NMD_R1',
    price: 15000,
    image: images[2],
    category: 'Lifestyle',
    description: 'Pack light, move fast. These NMD shoes are built for the urban nomad.',
    sizes: defaultSizes
  },
  {
    id: '10',
    name: 'Pegasus 40',
    price: 13000,
    image: images[3],
    category: 'Running',
    description: 'A springy ride for every run, the Peg\'s familiar, just-for-you feel returns.',
    isSale: true,
    salePrice: 11000,
    sizes: defaultSizes
  },
  {
    id: '11',
    name: 'Stan Smith',
    price: 10000,
    image: images[4],
    category: 'Casual',
    description: 'Clean and minimalist, the Stan Smith has been a style staple for decades.',
    sizes: defaultSizes
  },
  {
    id: '12',
    name: 'Blazer Mid 77',
    price: 10500,
    image: images[5],
    category: 'Lifestyle',
    description: 'Vintage style meets modern comfort in this classic hoops silhouette.',
    sizes: defaultSizes
  },
  {
    id: '13',
    name: 'Fresh Foam X',
    price: 14000,
    image: images[0],
    category: 'Running',
    description: 'Plush comfort and smooth transitions for miles of effortless running.',
    sizes: defaultSizes
  },
  {
    id: '14',
    name: 'Old Skool',
    price: 7000,
    image: images[1],
    category: 'Skate',
    description: 'The classic skate shoe that brought the iconic side stripe to the world.',
    sizes: defaultSizes
  },
  {
    id: '15',
    name: 'Air Jordan 1 High',
    price: 18000,
    image: images[2],
    category: 'Basketball',
    description: 'The shoe that started it all. Premium materials and classic styling.',
    isNewArrival: true,
    sizes: defaultSizes
  },
  {
    id: '16',
    name: 'Yeezy Boost 350',
    price: 22000,
    image: images[3],
    category: 'Lifestyle',
    description: 'Iconic design meets unparalleled comfort in this modern classic.',
    isNewArrival: true,
    sizes: defaultSizes
  },
  {
    id: '17',
    name: 'Zoom Fly 5',
    price: 16000,
    image: images[4],
    category: 'Running',
    description: 'Bridge the gap between your weekend training run and race day.',
    isSale: true,
    salePrice: 13500,
    sizes: defaultSizes
  },
  {
    id: '18',
    name: 'Air Max 90',
    price: 12000,
    image: images[5],
    category: 'Casual',
    description: 'Lace up and feel the legacy. Produced at the intersection of art, music and culture.',
    sizes: defaultSizes
  },
  {
    id: '19',
    name: 'Superstar',
    price: 9000,
    image: images[0],
    category: 'Casual',
    description: 'The adidas Superstar shoe is a lifestyle staple for streetwear enthusiasts.',
    isSale: true,
    salePrice: 7500,
    sizes: defaultSizes
  },
  {
    id: '20',
    name: 'Air Jordan 4 Retro',
    price: 21000,
    image: images[1],
    category: 'Basketball',
    description: 'A legendary silhouette returns with premium materials and classic color blocking.',
    isNewArrival: true,
    sizes: defaultSizes
  },
  {
    id: '21',
    name: 'Gel-Nimbus 25',
    price: 16000,
    image: images[2],
    category: 'Running',
    description: 'Experience the softest cushioning properties yet in this premium running shoe.',
    sizes: defaultSizes
  },
  {
    id: '22',
    name: 'Classic Slip-On',
    price: 6000,
    image: images[3],
    category: 'Skate',
    description: 'The iconic slip-on that needs no introduction. Easy to wear, easy to style.',
    isSale: true,
    salePrice: 4500,
    sizes: defaultSizes
  },
  {
    id: '23',
    name: 'Air Max 97',
    price: 17000,
    image: images[4],
    category: 'Lifestyle',
    description: 'Keep your style going full speed ahead with the iconic ripple design.',
    isNewArrival: true,
    sizes: defaultSizes
  },
  {
    id: '24',
    name: 'Club C 85',
    price: 8000,
    image: images[5],
    category: 'Casual',
    description: 'A clean, minimalist tennis-inspired shoe that never goes out of style.',
    sizes: defaultSizes
  }
];

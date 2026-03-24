export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  isSale?: boolean;
  salePrice?: number;
  isNewArrival?: boolean;
  sizes?: number[];
}

export interface CartItem extends Product {
  quantity: number;
  selectedSize?: number;
}

export interface Review {
  id: string;
  productId: string;
  userId: string;
  userEmail: string;
  rating: number;
  comment: string;
  createdAt: string;
}

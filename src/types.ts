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

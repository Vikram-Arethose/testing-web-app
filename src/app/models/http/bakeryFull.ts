import { OpeningHours } from './homeBranch';

export interface BakeryFull {
  branchDetails: BakeryDetails;
  categories: Category[];
  last_used_payment?: string;
}

export interface BakeryDetails {
  active: number;
  bakery_id: number;
  bakery_logo?: string;
  city: string;
  created_at: string;
  created_by: number;
  description: null;
  features: string[];
  id: number;
  lat: string;
  lng: string;
  min_order_value: string;
  name: string;
  number: string;
  opening_hours: OpeningHours;
  photo: string;
  street: string;
  updated_at: string;
  updated_by: number;
  zipcode: string;
}

export interface Category {
  id: number;
  name: string;
  products: Product[];
}
export interface Product {
  active: number;
  all_branches: number;
  allergens: string[];
  availability: string[];
  bakery_id: number;
  bio_certification: number;
  created_at: string;
  created_by: number;
  count?: number;
  description: string;
  details: string;
  id: number;
  ingredients: string;
  is_new: number;
  isAvailable?: boolean;
  name: string;
  period_available_from: string;
  period_available_to: string;
  photo: string;
  pre_order_period: number;
  price: string;
  product_category_id: number;
  product_group_id: number;
  product_number: string;
  quantity: string;
  quantity_items: number;
  special_price: string;
  special_price_from: string;
  special_price_to: string;
  isSpecialPrice?: boolean;
  updated_at: string;
  updated_by: number;
  vat: number;
  availability_new: AvailableDay[];
}

export interface AvailableDay {
  day: string;
  label: string;
}

export interface OrderDetails {
  bakery_id: number;
  bakery_name: string;
  branch_name: string;
  pickup_time: string;
  collection_code: number;
  products: ProductInOrder[];
  grand_total: number;
}

export interface ProductInOrder {
  id: number;
  order_id: number;
  product_id: number;
  product_name: string;
  product_number: string;
  quantity: number;
  price: string;
  grand_total: string;
}

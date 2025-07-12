import { ProductForTransaction } from './productForTransaction';

export interface DataForPayment {
  branch_id: number;
  basket_sum: number;
  products: ProductForTransaction[];
  pickup_date: string;
  delivery: boolean;
}

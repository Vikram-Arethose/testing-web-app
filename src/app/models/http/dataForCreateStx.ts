import { ProductForTransaction } from './productForTransaction';

export interface DataForCreateStx {
  branchId: number;
  basketSum: number;
  products: ProductForTransaction[];
  pickupDate: string;
  // paymentMethod: number;
}

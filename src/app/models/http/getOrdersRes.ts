import { OrderDetails } from './orderDetails';

export interface GetOrdersRes {
  current: OrderDetails[];
  completed: OrderDetails[];
}

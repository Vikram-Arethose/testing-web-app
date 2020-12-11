import { DataForPayment } from '../dataForPayment';

export interface DebitArgs extends DataForPayment {
  first_name?: string;
  last_name?: string;
  street?: string;
  st_number?: string;
  city?: string;
  postal_code?: string;
  account_owner?: string;
  iban?: string;
}

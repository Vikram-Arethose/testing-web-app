import { DataForCreateStx } from '../dataForCreateStx';

export interface DebitArgs extends DataForCreateStx {
  first_name?: string;
  last_name?: string;
  street?: string;
  st_number?: string;
  city?: string;
  postal_code?: string;
  account_owner?: string;
  iban?: string;
}

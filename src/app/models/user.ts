import { Language } from './language';

export interface User {
  country: string;
  email: string;
  first_name: string;
  id: number;
  language: Language;
  last_name: string;
  phone: string;
}

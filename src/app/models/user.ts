import { Language } from './language';

export interface User {
  first_name: string;
  email: string;
  phone: string;
  country: string;
  languages: Language[];
  notifications?: boolean;
}

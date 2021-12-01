import type { CategoryProps } from './Category';

export interface ProductProps {
  id: string;
  name: string;
  amount: string;
  price?: string;
  unidade?: string;
  image_url?: string;
  isAdded: boolean;
  category: CategoryProps;
}

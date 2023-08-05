import { IProduct } from './product';

export interface ICategory {
  id: number;
  createAt: Date;
  updateAt: Date;
  title: string;
  query: string;
  image: string;
  slug: string;
  filters: unknown;
  products: IProduct[];
}

export interface ICategories {
  categories: ICategory[];
}

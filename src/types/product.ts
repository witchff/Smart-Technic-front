export interface IProduct {
  InStock: number;
  cartItemId: number;
  categoryId: number;
  createAt: Date;
  description: string;
  favoriteId: null | number;
  id: number;
  images: string[];
  name: string;
  price: number;
  sale: number;
  updateAt: Date;
  viewedId: null | number;
}

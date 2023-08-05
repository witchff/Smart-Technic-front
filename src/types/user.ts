export interface IUser {
  id: number;
  createAt: Date;
  updateAt: Date;
  email: string;
  password: string;
  phone: string;
  city: string;
  address: string;
  index: string;
  firstname: string;
  surname: string;
  avatar: string;
  payment: string;
  roles: string[];
  viewed: unknown;
  cart: unknown;
  favorite: unknown;
}

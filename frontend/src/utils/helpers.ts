import { ICartItem } from "../redux/reducers/cartReducer";

export const totalAmount = (cart: ICartItem[]): number =>
  cart.reduce<number>((a, c) => a + c.amount, 0);

export const totalPrice = (cart: ICartItem[]): number =>
  cart.reduce<number>((a, c) => a + c.amount * c.price, 0);

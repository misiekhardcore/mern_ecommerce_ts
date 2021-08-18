import { PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../types";
import * as actionTypes from "../constants/cartConstants";

export interface ICartItem extends IProduct {
  amount: number;
}

export interface ICartState {
  cartItems: ICartItem[];
}

const cartInitialState: ICartState = { cartItems: [] };

export const cartReducer = (
  state: ICartState = cartInitialState,
  action: PayloadAction<ICartItem | string>
): ICartState => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const product = action.payload;

      const existingProduct = state.cartItems.find(
        (p) => p._id === (product as ICartItem)._id
      );

      if (existingProduct)
        return {
          ...state,
          cartItems: state.cartItems.map((p: ICartItem) =>
            p._id === existingProduct._id
              ? {
                  ...(product as ICartItem),
                  amount: p.amount + (product as ICartItem).amount,
                }
              : p
          ),
        };
      else
        return {
          ...state,
          cartItems: [...state.cartItems, product as ICartItem],
        };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (p: ICartItem) => p._id !== action.payload
        ),
      };
    case actionTypes.UPDATE_CART:
      const product1 = action.payload as ICartItem;
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item._id === product1._id
            ? { ...item, amount: product1.amount }
            : item
        ),
      };
    case actionTypes.RESET_CART:
      return { cartItems: [] };
    default:
      return state;
  }
};

import { PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../types";
import * as actionTypes from "../constants/cartConstants";

export interface ICartItem {
  product: IProduct;
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
        (p) => p.product._id === (product as ICartItem).product._id
      );

      if (existingProduct)
        return {
          ...state,
          cartItems: state.cartItems.map((p: ICartItem) =>
            p.product._id === existingProduct.product._id
              ? {
                  ...(product as ICartItem),
                  amount: p.amount + existingProduct.amount,
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
          (p: ICartItem) => p.product._id !== action.payload
        ),
      };
    case actionTypes.RESET_CART:
      return { cartItems: [] };
    default:
      return state;
  }
};

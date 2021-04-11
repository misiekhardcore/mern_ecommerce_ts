import axios from "axios";
import { IProduct } from "../../types";
import * as actionTypes from "../constants/cartConstants";
import { AppDispatch, GetState } from "../store";

export const addToCart = (id: string, amount: number) => async (
  dispatch: AppDispatch,
  getState: GetState
) => {
  const { data } = await axios.get<IProduct>(
    `http://172.22.89.171:4000/api/products/${id}`
  );

  dispatch({
    type: actionTypes.ADD_TO_CART,
    payload: { product: data, amount },
  });

  localStorage.setItem(
    "cart",
    JSON.stringify(getState().cartReducer.cartItems)
  );
};

export const removeFromCart = (id: string) => (
  dispatch: AppDispatch,
  getState: GetState
) => {
  dispatch({
    type: actionTypes.REMOVE_FROM_CART,
    payload: id,
  });

  localStorage.setItem(
    "cart",
    JSON.stringify(getState().cartReducer.cartItems)
  );
};

import axios from "axios";
import { IProduct } from "../../types";
import * as actionTypes from "../constants/cartConstants";
import { AppDispatch, GetState } from "../store";

export const addToCart = (id: string, amount: number) => async (
  dispatch: AppDispatch,
  getState: GetState
) => {
  const { data } = await axios.get<IProduct>(
    `http://${process.env.REACT_APP_HOST}:4000/api/products/${id}`
  );

  dispatch({
    type: actionTypes.ADD_TO_CART,
    payload: { ...data, amount },
  });

  localStorage.setItem(
    "cart",
    JSON.stringify(getState().cartReducer.cartItems)
  );
};

export const updateCart = (id: string, amount: number) => (
  dispatch: AppDispatch,
  getState: GetState
) => {
  const product = getState().cartReducer.cartItems.find(
    (x) => x._id === id
  );
  if (product)
    dispatch({
      type: actionTypes.UPDATE_CART,
      payload: { ...product, amount },
    });
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

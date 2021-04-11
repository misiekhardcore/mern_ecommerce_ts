import axios from "axios";
import { IProduct } from "../../types";
import * as actionTypes from "../constants/productConstants";
import { AppDispatch } from "../store";

export const getProducts = () => async (dispatch: AppDispatch) => {
  try {
    dispatch({ type: actionTypes.GET_PRODUCTS_REQUEST });

    const { data } = await axios.get<IProduct[]>(
      "http://172.22.89.171:4000/api/products"
    );

    dispatch({ type: actionTypes.GET_PRODUCTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_PRODUCTS_FAIL,
      payload: error?.response?.data?.message,
    });
  }
};

export const getProductDetails = (id: string) => async (
  dispatch: AppDispatch
) => {
  try {
    dispatch({ type: actionTypes.GET_PRODUCT_REQUEST });

    const { data } = await axios.get<IProduct[]>(
      `http://172.22.89.171:4000/api/products/${id}`
    );

    dispatch({ type: actionTypes.GET_PRODUCT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_PRODUCT_FAIL,
      payload: error?.response?.data?.message,
    });
  }
};

export const removeProductDetails = () => (dispatch: AppDispatch) => {
  dispatch({
    type: actionTypes.GET_PRODUCT_RESET,
  });
};

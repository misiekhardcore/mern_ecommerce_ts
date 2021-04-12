import { PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../types";
import * as actionTypes from "../constants/productConstants";

export interface IProductsState {
  products: IProduct[];
  loading: boolean;
  error: Error | null;
}

interface Action {
  type: string;
  payload?: IProduct[] | Error;
}

export const getProductsReducer = (
  state: IProductsState = { products: [], loading: false, error: null },
  action: Action
): IProductsState => {
  switch (action.type) {
    case actionTypes.GET_PRODUCTS_REQUEST:
      return {
        error: null,
        loading: true,
        products: [],
      };
    case actionTypes.GET_PRODUCTS_SUCCESS:
      return {
        error: null,
        loading: false,
        products: action.payload as IProduct[],
      };
    case actionTypes.GET_PRODUCTS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload as Error,
      };
    default:
      return state;
  }
};

export interface IProductState {
  product: IProduct | null;
  loading: boolean;
  error: Error | null;
}

export const getProductReducer = (
  state: IProductState = { product: null, error: null, loading: false },
  action: PayloadAction<IProduct | Error>
): IProductState => {
  switch (action.type) {
    case actionTypes.GET_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.GET_PRODUCT_SUCCESS:
      return {
        loading: false,
        error: null,
        product: action.payload as IProduct,
      };
    case actionTypes.GET_PRODUCT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload as Error,
      };
    case actionTypes.GET_PRODUCT_RESET:
      return {
        ...state,
        product: null,
      };
    default:
      return state;
  }
};

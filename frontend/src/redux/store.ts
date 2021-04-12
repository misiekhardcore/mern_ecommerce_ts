import {
  applyMiddleware,
  combineReducers,
  createStore,
  Middleware,
} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { cartReducer, ICartItem } from "./reducers/cartReducer";
import {
  getProductReducer,
  getProductsReducer,
} from "./reducers/productsReducer";
// import { configureStore } from "@reduxjs/toolkit";

const reducer = combineReducers({
  cartReducer,
  getProducts: getProductsReducer,
  getDetails: getProductReducer,
});

const middlewares: Middleware[] = [thunk];

const cartFromLocalStorage: ICartItem[] = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart") || "")
  : [];

const INITIAL_STATE = {
  cartReducer: { cartItems: cartFromLocalStorage },
};
export const store = createStore(
  reducer,
  INITIAL_STATE,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export type RootState = ReturnType<typeof store.getState>;
export type GetState = typeof store.getState;
export type AppDispatch = typeof store.dispatch;

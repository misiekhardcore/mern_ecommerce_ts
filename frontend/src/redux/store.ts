import {
  createStore,
  combineReducers,
  applyMiddleware,
  Middleware,
} from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { cartReducer } from "./reducers/cartReducer";
import {
  getProductsReducer,
  getProductReducer,
} from "./reducers/productsReducer";
// import { configureStore } from "@reduxjs/toolkit";

const reducer = combineReducers({
  cartReducer,
  getProducts: getProductsReducer,
  getDetails: getProductReducer,
});

const middlewares: Middleware[] = [thunk];

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export type RootState = ReturnType<typeof store.getState>;
export type GetState = typeof store.getState;
export type AppDispatch = typeof store.dispatch;

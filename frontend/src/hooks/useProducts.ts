import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductDetails,
  getProducts,
} from "../redux/actions/productsActions";
import {
  IProductsState,
  IProductState,
} from "../redux/reducers/productsReducer";
import { RootState } from "../redux/store";

export const useProducts = (): IProductsState => {
  const dispatch = useDispatch();

  const products = useSelector<RootState, IProductsState>(
    (state) => state.getProducts
  );

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return products;
};

export const useProduct = (id: string): IProductState => {
  const dispatch = useDispatch();

  const product = useSelector<RootState, IProductState>(
    (state) => state.getDetails
  );

  useEffect(() => {
    if (product?.product?._id !== id) dispatch(getProductDetails(id));
  }, [dispatch, id, product]);

  return product;
};

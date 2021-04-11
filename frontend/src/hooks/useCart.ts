import { useSelector } from "react-redux";
import { ICartState } from "../redux/reducers/cartReducer";
import { RootState } from "../redux/store";

export const useCart = (): ICartState => {
  return useSelector<RootState, ICartState>(
    (state) => state.cartReducer
  );
};

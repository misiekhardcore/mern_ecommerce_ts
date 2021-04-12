import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ICartItem } from "../redux/reducers/cartReducer";
import { RootState } from "../redux/store";
import { totalAmount } from "../utils/helpers";
import "./SideDrawer.scss";

interface SideDrawerProps {
  toggle: boolean;
  setToggle: (value: React.SetStateAction<boolean>) => void;
}

export const SideDrawer: React.FC<SideDrawerProps> = ({
  toggle,
  setToggle,
}) => {
  const cartItems = useSelector<RootState, ICartItem[]>(
    (state) => state.cartReducer.cartItems
  );
  const itemsCount = totalAmount(cartItems);
  return (
    <div className={`sidedrawer ${toggle && "active"}`}>
      <ul className="sidedrawer__links">
        <li className="sidedrawer__link">
          <Link to="/cart" onClick={() => setToggle(false)}>
            <FiShoppingCart /> Cart
            <span className="cartlogo__badge">{itemsCount}</span>
          </Link>
        </li>
        <li className="sidedrawer__link" onClick={() => setToggle(false)}>
          <Link to="/">Profile</Link>
        </li>
        <li className="sidedrawer__link" onClick={() => setToggle(false)}>
          <Link to="/">Login</Link>
        </li>
      </ul>
    </div>
  );
};

import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ICartItem } from "../redux/reducers/cartReducer";
import { RootState } from "../redux/store";
import { totalAmount } from "../utils/helpers";
import "./Navbar.scss";

interface NavbarProps {
  toggle: boolean;
  setToggle: (value: React.SetStateAction<boolean>) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ toggle, setToggle }) => {
  const cart = useSelector<RootState, ICartItem[]>(
    (state) => state.cartReducer.cartItems
  );

  const itemsCount = totalAmount(cart);

  return (
    <nav className="navbar">
      {/* logo */}
      <div className="navbar__logo">
        <Link to="/">
          <h2>MERN Shop</h2>
        </Link>
      </div>
      {/* links */}
      <ul className="navbar__links">
        <li className="navbar__link">
          <Link to="/cart">
            <FiShoppingCart /> Cart
            <span className="cartlogo__badge">{itemsCount}</span>
          </Link>
        </li>
        <li className="navbar__link">
          <Link to="">Profile</Link>
        </li>
        <li className="navbar__link">
          <Link to="">Login</Link>
        </li>
      </ul>
      {/* hamburger */}
      <div
        onClick={() => setToggle((prev) => !prev)}
        className={`hamburger ${toggle && "active"}`}
      >
        <span className="hamburger__icon"></span>
      </div>
    </nav>
  );
};

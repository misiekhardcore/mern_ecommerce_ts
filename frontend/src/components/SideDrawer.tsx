import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./SideDrawer.scss";

interface SideDrawerProps {
  toggle: boolean;
  setToggle: (value: React.SetStateAction<boolean>) => void;
}

export const SideDrawer: React.FC<SideDrawerProps> = ({
  toggle,
  setToggle,
}) => {
  return (
    <div className={`sidedrawer ${toggle && "active"}`}>
      <ul className="sidedrawer__links">
        <li className="sidedrawer__link">
          <Link to="/cart" onClick={() => setToggle(false)}>
            <FiShoppingCart /> Cart
            <span className="cartlogo__badge">9</span>
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

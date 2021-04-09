import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";

interface NavbarProps {
  toggle: boolean;
  setToggle: (toggle: any) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ toggle, setToggle }) => {
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
            <span className="cartlogo__badge">9</span>
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
        onClick={() => setToggle(!toggle)}
        className={`hamburger ${toggle && "active"}`}
      >
        <span className="hamburger__icon"></span>
      </div>
    </nav>
  );
};

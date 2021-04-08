import React from "react";

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = ({}) => {
  return (
    <nav className="navbar">
      {/* logo */}
      <div className="navbar__logo">
        <h2>MERN Shop</h2>
      </div>
      {/* links */}
      <ul className="navbar__links">
        <li className="navbar__link">
          <Link></Link>
        </li>
        <li className="navbar__link">
          <Link></Link>
        </li>
        <li className="navbar__link">
          <Link></Link>
        </li>
      </ul>
      {/* hamburger */}
    </nav>
  );
};

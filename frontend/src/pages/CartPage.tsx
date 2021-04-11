import React from "react";
import { CartItem } from "../components/CartItem";
import { useCart } from "../hooks/useCart";
import "./CartPage.scss";

interface CartPageProps {}

export const CartPage: React.FC<CartPageProps> = () => {
  const { cartItems } = useCart();

  return (
    <div className="cartpage">
      <h2>Shopping Cart</h2>
      <div className="container">
        <div className="cartpage__left">
          {cartItems.map((item) => (
            <CartItem item={item} />
          ))}
        </div>
        <div className="cartpage__right">
          <div className="cartpage__info">
            <p>Subtotal (0) items</p>
            <p>$499.99</p>
          </div>
          <div className="">
            <button className="button" type="button">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

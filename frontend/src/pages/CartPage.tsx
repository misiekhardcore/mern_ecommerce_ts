import React from "react";
import { CartItem } from "../components/CartItem";

interface CartPageProps {}

export const CartPage: React.FC<CartPageProps> = () => {
  return (
    <div className="cart">
      <div className="cardpage__left">
        <h2>Shopping Cart</h2>
        <CartItem />
      </div>
      <div className="cardpage__right">
        <div className="cartpage__info">
          <p>Subtotal (0) items</p>
          <p>$499.99</p>
        </div>
        <div className="button">
          <button type="button">Checkout</button>
        </div>
      </div>
    </div>
  );
};

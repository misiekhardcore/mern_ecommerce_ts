import React from "react";
import { Link } from "react-router-dom";
import { CartItem } from "../components/CartItem";
import { useCart } from "../hooks/useCart";
import { totalAmount, totalPrice } from "../utils/helpers";
import "./CartPage.scss";

interface CartPageProps {}

export const CartPage: React.FC<CartPageProps> = () => {
  const { cartItems } = useCart();

  const itemsPrice = totalPrice(cartItems);

  const itemsCount = totalAmount(cartItems);

  return (
    <div className="cartpage">
      <h2>Shopping Cart</h2>
      {!cartItems.length ? (
        <p>
          Your cart is empty. <Link to="/">Go shopping!</Link>
        </p>
      ) : (
        <div className="container">
          <div className="cartpage__left">
            {cartItems.map((item) => (
              <CartItem key={item.product._id} item={item} />
            ))}
          </div>
          <div className="cartpage__right">
            <div className="cartpage__info">
              <p>Subtotal ({itemsCount}) items</p>
              <p>${itemsPrice.toFixed(2)}</p>
            </div>
            <div className="">
              <button className="button" type="button">
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

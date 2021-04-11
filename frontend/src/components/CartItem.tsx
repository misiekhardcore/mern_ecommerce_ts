import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./CartItem.scss";
import { ItemCountSelect } from "./ItemCountSelect";
import { BsXCircle } from "react-icons/bs";
import { ICartItem } from "../redux/reducers/cartReducer";

interface CartItemProps {
  item: ICartItem;
}

export const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { product, amount } = item;
  const { name, imageUrl, _id, countInStock, price } = product;
  const [qty, setQty] = useState<number>(0);
  return (
    <div className="cartitem">
      <div className="cartitem__image">
        <img src={imageUrl} alt={name} />
      </div>
      <Link to={`/product/${_id}`} className="cartitem__name">
        {name}
      </Link>
      <p className="cartitem__price">${price}</p>
      <ItemCountSelect
        value={qty}
        setValue={setQty}
        className="cartitem__select"
        count={countInStock}
        current={amount}
      />
      <button type="button" className="cartitem__button">
        <BsXCircle />
      </button>
    </div>
  );
};

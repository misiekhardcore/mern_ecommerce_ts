import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./CartItem.scss";
import { ItemCountSelect } from "./ItemCountSelect";
import { BsXCircle } from "react-icons/bs";
import { ICartItem } from "../redux/reducers/cartReducer";
import { useDispatch } from "react-redux";
import { removeFromCart, updateCart } from "../redux/actions/cartActions";

interface CartItemProps {
  item: ICartItem;
}

export const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { product, amount } = item;
  const { name, imageUrl, _id, countInStock, price } = product;
  const [qty, setQty] = useState<number>(item.amount);
  const dispatch = useDispatch();

  const removeFromCartHandler = () => {
    dispatch(removeFromCart(item.product._id));
  };

  const updateItemhandler = (x: number) => {
    setQty(x);
    dispatch(updateCart(_id, x));
  };

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
        setValue={updateItemhandler}
        className="cartitem__select"
        count={countInStock}
        current={amount}
      />
      <button
        onClick={removeFromCartHandler}
        type="button"
        className="cartitem__button"
      >
        <BsXCircle />
      </button>
    </div>
  );
};

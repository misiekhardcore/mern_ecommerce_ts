import React from "react";
import { Link } from "react-router-dom";
import { IProduct } from "../types";
import "./Product.scss";

interface ProductProps {
  product: IProduct;
}

export const Product: React.FC<ProductProps> = ({ product }) => {
  const { _id, name, description, price, imageUrl } = product;
  return (
    <div className="product">
      <img src={imageUrl} alt={name} />
      <div className="product__info">
        <p className="product__title">{name}</p>
        <p className="product__description">
          {description.slice(0, 50) + "..."}
        </p>
        <p className="product__price">${price}</p>
        <Link className="info__button" to={`/product/${_id}`}>
          Get details
        </Link>
      </div>
    </div>
  );
};

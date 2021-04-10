import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { IProduct } from "../types";
import "./ProductPage.scss";

interface ProductPageProps {}

const initialState: IProduct = {
  _id: "0",
  price: 0,
  description: "",
  countInStock: 0,
  name: "",
  imageUrl: "",
};

export const ProductPage: React.FC<ProductPageProps> = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<IProduct>(initialState);

  useEffect(() => {
    axios
      .get<IProduct>("http://172.22.89.171:4000/api/products/" + id, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((r) => setProduct(r.data))
      .catch((e) => console.error(e.message));
  }, [id]);

  const { name, countInStock, description, imageUrl, price } = product;
  const options = (count: number) => {
    let ans: any = [];
    for (let i = 0; i < count; i++) {
      ans.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }
    return ans;
  };

  return (
    <div className="productpage">
      <div className="productpage__left">
        <div className="left__image">
          <img src={imageUrl} alt={name} />
        </div>
        <div className="left__info">
          <p className="left__name">{name}</p>
          <p>{price}</p>
          <p>{description}</p>
        </div>
      </div>
      <div className="productpage__right">
        <div className="right__info">
          <p>
            Price: <span>${price}</span>
          </p>
          <p>
            Staus:{" "}
            <span>{countInStock ? "In Stock" : "Not Available"}</span>
          </p>
          <p>
            Qty:
            <select name="count" id="count">
              {options(countInStock)}
            </select>
          </p>
          <p>
            <button type="button">Add to Cart</button>
          </p>
        </div>
      </div>
    </div>
  );
};

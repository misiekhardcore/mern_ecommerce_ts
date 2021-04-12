import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { RouteComponentProps, useParams } from "react-router";
import { ItemCountSelect } from "../components/ItemCountSelect";
import { useProduct } from "../hooks/useProducts";
import { addToCart } from "../redux/actions/cartActions";
import { IProduct } from "../types";
import "./ProductPage.scss";

interface ProductPageProps extends RouteComponentProps {}

const initialProduct: IProduct = {
  _id: "0",
  price: 0,
  description: "",
  countInStock: 0,
  name: "",
  imageUrl: "",
};

export const ProductPage: React.FC<ProductPageProps> = ({ history }) => {
  const [qty, setQty] = useState<number>(1);
  const { id } = useParams<{ id: string }>();
  const { product = initialProduct, loading, error } = useProduct(id);
  const dispatch = useDispatch();

  const {
    _id = "",
    name = "",
    countInStock = 0,
    description = "",
    imageUrl = "",
    price = 0,
  } = { ...product };

  const addToCartHandler = () => {
    dispatch(addToCart(_id, qty));
    history.push("/cart");
  };

  return (
    <div className="productpage">
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : product ? (
        <>
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
                Price: <span>${price * qty}</span>
              </p>
              <p>
                Staus:
                <span style={{ color: countInStock ? "green" : "red" }}>
                  {countInStock ? "In Stock" : "Not Available"}
                </span>
              </p>
              <p>
                Qty:
                <ItemCountSelect
                  value={qty}
                  setValue={setQty}
                  count={countInStock}
                />
              </p>
              <p>
                <button
                  disabled={!countInStock}
                  type="button"
                  onClick={addToCartHandler}
                >
                  Add to Cart
                </button>
              </p>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};

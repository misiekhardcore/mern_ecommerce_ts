import React, { useState } from "react";
import { useParams } from "react-router";
import { ItemCountSelect } from "../components/ItemCountSelect";
import { useProduct } from "../hooks/useProducts";
import { addToCart } from "../redux/actions/cartActions";
import { IProduct } from "../types";
import "./ProductPage.scss";

interface ProductPageProps {}

const initialProduct: IProduct = {
  _id: "0",
  price: 0,
  description: "",
  countInStock: 0,
  name: "",
  imageUrl: "",
};

export const ProductPage: React.FC<ProductPageProps> = () => {
  const [qty, setQty] = useState<number>(0);
  const { id } = useParams<{ id: string }>();
  const { product = initialProduct, loading, error } = useProduct(id);

  const {
    _id,
    name,
    countInStock,
    description,
    imageUrl,
    price,
  } = product as IProduct;

  return (
    <div className="productpage">
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
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
                Price: <span>${price}</span>
              </p>
              <p>
                Staus:
                <span>
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
                  type="button"
                  onClick={async () => await addToCart(_id, qty)}
                >
                  Add to Cart
                </button>
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

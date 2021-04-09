import axios from "axios";
import React, { useEffect, useState } from "react";
import { Product } from "../components/Product";
import { IProduct } from "../types";
import "./HomePage.scss";

interface HomePageProps {}

const initialProducts: IProduct[] = [];

export const HomePage: React.FC<HomePageProps> = () => {
  const [products, setProducts] = useState<IProduct[]>(initialProducts);

  useEffect(() => {
    axios
      .get<IProduct[]>("http://localhost:4000/api/products", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((r) => setProducts(r.data))
      .catch((e) => console.error(e.message));
  }, []);

  return (
    <div className="homepage">
      <h2 className="homepage__title">Latest Products</h2>
      <div className="homepage__products">
        {products.map((product, idx) => (
          <Product product={product} key={idx} />
        ))}
      </div>
    </div>
  );
};

import axios from "axios";
import React, { useEffect, useState } from "react";

export interface IProduct {
  name: string;
  description: string;
  price: number;
  countInStock: number;
  imageUrl: string;
}

interface HomePageProps {}

const initialProducts: IProduct[] = [];

export const HomePage: React.FC<HomePageProps> = () => {
  const [products, setProducts]: [
    IProduct[],
    (products: IProduct[]) => void
  ] = useState(initialProducts);

  useEffect(() => {
    axios
      .get<IProduct[]>("http://172.22.89.171:4000/api/products", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((r) => setProducts(r.data))
      .catch((e) => console.error(e.message));
  }, []);

  return (
    <div className="home">
      Home
      <ul>
        {products.map((product, idx) => (
          <li key={idx}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

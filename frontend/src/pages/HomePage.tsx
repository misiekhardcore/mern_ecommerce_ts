import React from "react";
import { Product } from "../components/Product";
import { useProducts } from "../hooks/useProducts";
import "./HomePage.scss";

interface HomePageProps {}

export const HomePage: React.FC<HomePageProps> = () => {
  const { error, loading, products } = useProducts();

  return (
    <div className="homepage">
      <h2 className="homepage__title">Latest Products</h2>
      <div className="homepage__products">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          products.map((product, idx) => (
            <Product product={product} key={idx} />
          ))
        )}
      </div>
    </div>
  );
};

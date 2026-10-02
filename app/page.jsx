"use client";

import { useState, useEffect } from "react";
import ProductItem from "../components/ProductItem";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Something went wrong");
        }

        return response.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h1>იტვირთება</h1>;
  }

  if (error) {
    return <h1>მოხდა შეცდომა</h1>;
  }

  return (
    <main>
      <h1>Products</h1>

      <div className="products">
        {products.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </main>
  );
  // My update comment
}
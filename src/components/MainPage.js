import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

const MainPage = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const url = "https://41299568-5ca1-4334-9625-de91e428a2c9.mock.pstmn.io/products/";
    axios
      .get(url)
      .then((result) => {
        const products = result.data.products;
        setProducts(products);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <div id="body">
        <div id="banner">
          <img src="images/banners/banner1.png" alt="" />
        </div>
        <h1>Products</h1>
        <div id="product-list">
          {products.map((product, idx) => {
            console.log("product");
            return (
              <div className="product-card" key={idx}>
                <Link className="product-link" to={`/productPage/${product.id}`}>
                  <div>
                    <img className="product-img" src={product.imageUrl} alt={product.name} />
                  </div>
                  <div className="product-content">
                    <span className="product-name">{product.name}</span>
                    <span className="product-price">{product.price}</span>
                    <span className="product-seller">
                      <img src="images/icons/avatar.png" className="product-avatar" alt="{product.seller}" />
                      <span>{product.seller}</span>
                    </span>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default MainPage;

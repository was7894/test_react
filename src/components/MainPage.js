import React, { useState, useEffect } from "react"; /* 콜백지옥안하려면 useEffect써야됨 */
import "./MainPage.css";
import axios from "axios";

const MainPage = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const url = "https://41299568-5ca1-4334-9625-de91e428a2c9.mock.pstmn.io/products";
    /* 한번만실행될것을 안으로 넣어 */
    axios
      .get(url)
      .then((result) => {
        const products = result.data.products;
        // 이렇게 쓰면 콜백지옥..
        setProducts(products); /* 통신결과 값은 then문장안에 갖혀있다. */
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log([products]); /* 빈배열 나온다. */
  return (
    <div>
      <div id="header">
        <div id="header-area">
          <img src="images/icons/logo.png" alt="" />
        </div>
      </div>
      <div id="body">
        <div id="banner">
          <img src="images/banners/banner1.png" alt="" />
        </div>
        <h1>Products</h1>
        <div id="product-list">
          {products.map((product, idx) => {
            return (
              <div className="product-card" key={idx}>
                <div>
                  <img className="product-img" src={product.imageUrl} alt="" />
                </div>
                <div className="product-content">
                  <span className="product-name">{product.name}</span>
                  <span className="product-price">{product.price}</span>
                  <span className="product-seller">
                    <img className="product-avatar" alt="" />
                    {product.seller}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div id="footer">
        <a href="#none">회사소개</a>
        <a href="#none">이용약관</a>
        <a href="#none">통신판매업신고번호:123-1234</a>
        <a href="#none">사업자등록번호:456-56-78951</a>
        <a href="#none">고객센터:456-78951</a>
      </div>
    </div>
  );
};
export default MainPage;

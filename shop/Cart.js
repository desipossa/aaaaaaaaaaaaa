import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PTF = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
  { id: 7 },
  { id: 8 },
  { id: 9 },
  { id: 10 },
  { id: 11 },
  { id: 12 },
  { id: 13 },
  { id: 14 },
  { id: 15 },
  { id: 16 },
  { id: 17 },
  { id: 18 },
  { id: 19 },
  { id: 20 },
  { id: 21 },
  { id: 22 },
  { id: 23 },
  { id: 24 },
  { id: 25 },
  { id: 26 },
  { id: 27 },
  { id: 28 },
  { id: 29 },
  { id: 30 },
  { id: 31 },
  { id: 32 },
  { id: 33 },
  { id: 34 },
  { id: 35 },
  { id: 36 },
  { id: 37 },
  { id: 38 },
  { id: 39 },
  { id: 40 },
  { id: 41 },
  { id: 42 },
  { id: 43 },
  { id: 44 },
  { id: 45 },
  { id: 46 },
  { id: 47 },
  { id: 48 },
  { id: 49 },
  { id: 50 },
  { id: 51 },
  { id: 52 },
  { id: 53 },
  { id: 54 },
  { id: 55 },
];

const Cart = ({ cart, setCart }) => {
  useEffect(() => {
    setCart(
      cart.filter(
        (itm, idx, arry) => idx === arry.findIndex((it) => it.id === itm.id)
      )
    );
  }, []);

  // cart = cart.filter((itm, idx, arry) => idx === arry.findIndex(it => it.id === itm.id));
  return (
    <section className="searchList pn">
      <div className="category">홈 : CART</div>
      <h2>Cart</h2>
      <ul className="list">
        <li>total book : {cart.length}</li>
        <li className="line">line</li>
        <li>
          <Link to="/">
            <i className="xi-home-o"></i>
          </Link>
        </li>
      </ul>
      <table className="inner">
        <tbody>
          {cart.map((ca, idx) => {
            return (
              <tr key={idx}>
                <td className="box" style={{ width: "100px" }}>
                  <Link to={"/Item/" + (ca.id)}>
                    <img
                      key={idx}
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/main_best0" +
                        (ca.id + 1) +
                        ".jpg"
                      }
                      alt=""
                    />

                    {/* <img src={ca.src} alt="" /> */}
                  </Link>
                </td>
                <td className="name" style={{ width: "300px" }}>
                  {ca.title}
                </td>
                <td className="des">

                  {ca.des.substring(0, 200)} ...
                </td>
                {/* <td className="price" style={{ width: "150px" }}>
                  <span>{ca.price.toLocaleString()}</span> 원
                </td> */}
              </tr>
            );
          })}
          <tr>
            <td colSpan={3}>total : </td>
            <td className="price">
              {cart.length}
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default Cart;

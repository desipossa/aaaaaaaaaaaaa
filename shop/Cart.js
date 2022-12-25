import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PTF = [
  { id: 1, title: "럭키 드로우" },
  { id: 2, title: "백광" },
  { id: 3, title: "바깥은 여름" },
  { id: 4, title: "너무 한낮의 연애" },
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
                  <Link to={"/shopItem/" + ca.id}>
                    <img
                      key={idx}
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/main_best0" +
                        ((idx % PTF.length) + 1) +
                        ".jpg"
                      }
                      alt=""
                    />

                    {/* <img src={ca.src} alt="" /> */}
                  </Link>
                </td>
                <td className="name" style={{ width: "300px" }}>
                  <Link to={"/shopItem/" + ca.id}>{ca.name} </Link>
                </td>
                <td className="des">
                  <Link to={"/shopItem/" + ca.id}>
                    {ca.des.substring(0, 200)} ...
                  </Link>
                </td>
                <td className="price" style={{ width: "150px" }}>
                  <span>{ca.price.toLocaleString()}</span> 원
                </td>
              </tr>
            );
          })}
          <tr>
            <td colSpan={3}>total : </td>
            <td className="price">
              <span>
                {cart.reduce((pr, cur) => {
                  return pr + cur.price;
                }, 0)}
              </span>{" "}
              원
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default Cart;

import React from "react";
import company from "../data/profile";
import "../css/Customer.scss";
const Customer = () => {
  return (
    <>
      <div className="Customer">
        <h3>CUSTOMER CENTER</h3>
        <div className="tel">{company.tel}</div>
        <ul className="open">
          {company.open.map((it, idx) => (
            <li key={idx}>{it}</li>
          ))}
        </ul>
      </div>
      <div className="Customer">
        <h3>DELIVERY SERVICE</h3>
        <p>도서 배송 조회하기</p>
      </div>
      <div className="Customer">
        <h3>COMPANY</h3>
        <strong>{company.address}</strong>
        <ul className="sns">
          <li>
            <a href="https://www.sinsiway.com/" target="_blank">
              <i className="xi-kakaotalk"></i>
            </a>
          </li>
          <li>
            <a href="https://blog.sinsiway.com/" target="_blank">
              <i className="xi-naver"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/channel/UCFhgdYENdydFjBCWVA3nG6Q"
              target="_blank"
            >
              <i className="xi-youtube-play"></i>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Customer;

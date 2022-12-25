import React, { useState } from "react";
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

const List = ({ shopList }) => {
  const [sortList, onSortList] = useState(shopList);
  const rowPrice = [...sortList].sort((a, b) => a.price - b.price);
  const hiPrice = [...sortList].sort((a, b) => b.price - a.price);
  const newProduct = [...sortList].sort((a, b) => b.id - a.id);
  const inkki = [...sortList].sort((a, b) => b.name.length - a.name.length);

  const newSort = (it) => {
    onSortList(it);
  };

  return (
    <section className="shopList pn">
      <div className="category">홈 : all</div>
      <h2>모든 제품</h2>
      <ul className="list">
        <li>total book : {shopList.length}</li>
        <li className="line">line</li>
        <li>
          <ul className="option">
            <li onClick={() => newSort(rowPrice)}>도서 명</li>
            <li onClick={() => newSort(hiPrice)}>저자 명</li>
            <li onClick={() => newSort(newProduct)}>출판사 명</li>
            <li onClick={() => newSort(inkki)}>대출 가능 도서</li>
          </ul>
        </li>
      </ul>

      <div className="inner">
        {sortList.map((it, idx) => {
          return (
            <>
              <Link to={"/shopItem/" + it.id}>
                <figure>
                  <div className="box">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/main_best0" +
                        ((idx % PTF.length) + 1) +
                        ".jpg"
                      }
                      alt=""
                    />
                  </div>

                  <div className="name">{it.name}</div>
                  <div className="des">{it.des.substring(0, 100)} ...</div>
                  <div className="price">
                    <span>{it.price.toLocaleString()}</span> 원
                  </div>
                </figure>
              </Link>
            </>
          );
        })}
      </div>
    </section>
  );
};

export default List;

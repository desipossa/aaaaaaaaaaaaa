import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

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

const Itm = ({ shopList, cart, setCart, bookList }) => {
  const { itm } = useParams();
  const navigate = useNavigate();

  // const matchItm = bookList.find((it) => itm === String(it.no));
  const [matchItm, setMatchItm] = useState({})
  useEffect(() => {
    setMatchItm(bookList.find((it) => itm === String(it.no)))
  }, [itm])

  console.log(itm, matchItm)
  return (
    <section className="shopItm">
      <div className="inner">
        <div className="box">
          <img
            src={
              process.env.PUBLIC_URL +
              "/assets/images/main_best0" +
              PTF[itm].id +
              ".jpg"
            }
            alt=""
          />
          {/* <img src={matchItm.src} alt="" /> */}
        </div>
        <div className="right">
          <div className="name">{matchItm.ebk_nm}</div>
          <div className="name">{matchItm.cn_intro}</div>

          <button
            className="btn"
            onClick={() => {
              setCart([
                ...cart,
                {
                  id: matchItm.no,
                  title: matchItm.ebk_nm,
                  des: matchItm.cn_intro,
                  e: 1,
                },
              ]);
              navigate("/cart");
            }}
          >
            ???????????? ??????
          </button>
          <button className="bts">
            <Link to="/list">back</Link>
          </button>
          <button className="btp">
            ?????? ?????? ?????? ???: {
              matchItm.rsvt_noppl > 10 ? 0 : 10 - matchItm.rsvt_noppl
            } ???
          </button>
        </div>
      </div>
    </section>
  );
};

export default Itm;

import axios from "axios";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Totop from "./component/Totop";
import Wrapper from "./component/Wrapper";
import Sub01 from "./pages/Sub01";
import Sub02 from "./pages/Sub02";
import { Route, Routes, useSearchParams } from "react-router-dom";
import Main from "./component/Main";
import { useEffect, useState } from "react";
import Cart from "./shop/Cart";
import Itm from "./shop/Itm";
import List from "./shop/List";
import Glist from "./shop/Glist";
import Category from "./shop/Category";
import "./css/ShopDetail.scss";

const App = () => {
  const INFORMATION = [
    {
      id: 0,
      tit: "회사 소개",
      con: "신시웨이 브랜드 소개",
      des: "신시웨이 브랜드를 소개합니다.",
      link: "/sub01",
    },

    {
      id: 1,
      tit: "이용 방법",
      con: "신시북 도서 대여 방법",
      des: "신시북 도서 대여하는 방법을 소개합니다.",
      link: "/sub02",
    },
    {
      id: 2,
      tit: "도서 리스트",
      con: "보고싶은 도서를 예약하세요.",
      des: "도서를 예약하는 방법을 소개합니다.",
      link: "/list",
    },
    {
      id: 3,
      tit: "도서 보관함",
      con: "관심있는 도서를 보관하세요.",
      des: "도서를 보관하는 방법을 소개합니다.",
      link: "/cart",
    },
  ];

  const [on, setOn] = useState(false);

  const [itm, setItm] = useState();
  const [cart, setCart] = useState([]);

  // 책정보만 가져오기
  const [book, getBook] = useState([]);
  // list 전부 가져오기
  const [alist, getAlist] = useState([]);

  const [pageNo, setPageNo] = useState(1);

  const getApi = async () => {
    const r = await axios.get(
      `https://apis.data.go.kr/4050000/libebook/getLibebook?serviceKey=nmPIjJ%2Bj0FufPiP6k4BLPlq3n%2B46QZN%2B6hgSINrrxqk3nNwnoHX2ynqX6Dlgr3xFeivGPus2vgmh6Ifx1vdu1g%3D%3D&pageNo=${pageNo}&numOfRows=55`
    );
    getAlist(r.data);
    getBook(r.data.items);
  };

  // const shopdata = book.map((it) => {
  //   return {
  //     no: it.no,
  //     ebk_nm: it.ebk_nm,
  //     pblshr: it.pblshr,
  //     gnr: it.gnr,
  //     cn_intro: it.cn_intro,
  //     srvc_form: it.srvc_form,
  //     numOfRows: it.numOfRows,
  //     pageNo: it.pageNo,
  //     resultCode: it.resultCode,
  //     resulitMsg: it.resulitMsg,
  //     totalCount: it.totalCount,
  //aut_nm:it.aut_nm,
  //loan_avlbl_yn:it.loan_avlbl_yn
  //   };
  // });
  // setItm(shopdata);

  useEffect(() => {
    getApi();
  }, []);
  return (
    <Wrapper>
      <Header
        on={on}
        setOn={setOn}
        cart={cart}
        shopList={itm}
        bookList={book}
        bookAlist={alist}

      // os={os}
      // setOs={setOs}
      />
      <Routes>
        <Route path="/" element={<Main content={INFORMATION} />} />
        <Route path="/sub01" element={<Sub01 content={INFORMATION} />} />
        <Route path="/sub02" element={<Sub02 content={INFORMATION} />} />
        <Route
          path="/list"
          element={
            <List
              shopList={itm}
              cart={cart}
              setCart={setCart}
              bookAlist={alist}
              bookList={book}
            />
          }
        />
        <Route
          path="/glist"
          element={
            <Glist
              shopList={itm}
              cart={cart}
              setCart={setCart}
              bookAlist={alist}
              bookList={book}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              setCart={setCart}
              bookList={book}
              bookAlist={alist}
            />
          }
        />

        <Route path="/BList/:cate" element={<Category bookList={book} bookAlist={alist} />} />
        <Route
          path="/Item/:itm"
          element={
            <Itm
              shopList={itm}
              cart={cart}
              setCart={setCart}
              bookList={book}
              bookAlist={alist}
            />
          }
        />
      </Routes>
      {console.log(alist)}

      {/* 책 정보 뿌리기... */}
      {/* <>
        total : {alist.totalCount}
        {book.map((it) => {
          return (
            <li>
              {it.no} {it.gnr}
            </li>
          );
        })}
      </> */}

      <Footer />
      <Totop />
    </Wrapper>
  );
};

export default App;

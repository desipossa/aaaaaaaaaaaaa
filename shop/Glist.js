import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Load = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  color: #fff;
  font-size: 50px;

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 9999;
`;

const ListUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(20, 1fr);
  gap: 5px;
  list-style: none;
`;

function Glist() {
  const [book, getBook] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [load, setLoad] = useState(true);
  const getApi = async () => {
    setLoad(true);
    const r = await axios.get(
      `https://apis.data.go.kr/4050000/libebook/getLibebook?serviceKey=nmPIjJ%2Bj0FufPiP6k4BLPlq3n%2B46QZN%2B6hgSINrrxqk3nNwnoHX2ynqX6Dlgr3xFeivGPus2vgmh6Ifx1vdu1g%3D%3D&pageNo=${pageNo}&numOfRows=100`
    );
    getBook(r.data);
    setLoad(false);
  };

  useEffect(() => {
    getApi();
  }, [pageNo]);

  return (
    <>
      {load ? <Load>로딩중 입니다. 잠시만 기다려주세요.</Load> : null}
      {console.log(book)}
      <strong>총 {book.totalCount}개의 책을 팔고 있습니다.</strong>
      <ul className="lang_box">
        <li>
          <a href="#!">경제경영</a>
        </li>
        <li>
          <a href="#!">자기계발</a>
        </li>
        <li>
          <a href="#!">시.에세이</a>
        </li>
        <li>
          <a href="#!">종교</a>
        </li>
        <li>
          <a href="#!">소설</a>
        </li>
        <li>
          <a href="#!">국어/외국어</a>
        </li>
        <li>
          <a href="#!">정치/사회</a>
        </li>
        <li>
          <a href="#!">역사/문화</a>
        </li>
        <li>
          <a href="#!">과학/공학</a>
        </li>
        <li>
          <a href="#!">IT/프로그래밍</a>
        </li>
        <li>
          <a href="#!">건강/의학</a>
        </li>
        <li>
          <a href="#!">가정/생활/요리</a>
        </li>
        <li>
          <a href="#!">여행/취미</a>
        </li>
        <li>
          <a href="#!">예술/대중문화</a>
        </li>
        <li>
          <a href="#!">유아</a>
        </li>
        <li>
          <a href="#!">아동</a>
        </li>
        <li>
          <a href="#!">청소년</a>
        </li>
        <li>
          <a href="#!">교재/수험서</a>
        </li>
        <li>
          <a href="#!">매거진</a>
        </li>
        <li>
          <a href="#!">로맨스</a>
        </li>
        <li>
          <a href="#!">로맨스판타지</a>
        </li>
        <li>
          <a href="#!">판타지</a>
        </li>
        <li>
          <a href="#!">단행본만화</a>
        </li>
        <li>
          <a href="#!">미분류</a>
        </li>
      </ul>
      <div>
        <figure>
          {book.items?.map((it, idx) => {
            return (
              <div className="book" key={it.no}>
                <h3>
                  {idx + 1} : {it.ebk_nm}
                </h3>
                <em>
                  {it.gnr} 저자 : {it.aut_nm}
                </em>
                <p>{it.cn_intro}</p>
                <b>{it.pblsh_ymd}</b>
              </div>
            );
          })}

          <ListUl>
            {Array.from({ length: book.totalCount / 100 }).map((it, idx) => {
              return (
                <li key={idx} onClick={() => setPageNo(idx + 1)}>
                  <button>{idx + 1}</button>
                </li>
              );
            })}
          </ListUl>
        </figure>
      </div>
    </>
  );
}

export default Glist;

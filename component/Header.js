import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../css/Header.scss";

const NAVLINK = [
  { id: 1, menu: "회사 소개", link: "/sub01" },
  { id: 2, menu: "이용 방법", link: "/sub02" },
  { id: 3, menu: "도서 리스트", link: "/list" },
  { id: 4, menu: "도서 보관함", link: "/cart" },
];



const Header = ({ cart, on, setOn, bookList }) => {
  const [TG, setTG] = useState([false, false]);
  const HL = useRef();

  const gnrList = new Set(bookList.map(it => it.gnr));
  console.log(gnrList)

  const scrollEvent = () => {
    let sct = window.scrollY;
    sct > 0
      ? HL.current.classList.add("on")
      : HL.current.classList.remove("on");
  };

  const wheelEvent2 = (e) => {
    e.preventDefault();
    console.log(0);
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollEvent);
    HL.current.addEventListener("wheel", wheelEvent2);
  }, []);

  return (
    <header className={`Header ${on ? "os" : ""}`} ref={HL}>
      <div className="hd_wrap">
        <h1>
          <Link to={`/`}>신시북</Link>
        </h1>
        <nav className="Gnb">
          <ul>
            {NAVLINK.map((it, idx) => {
              return (
                <li key={it.id} onClick={() => setOn(false)}>
                  <Link to={it.link}>{it.menu}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="top_service">
          <div className="top_box">
            <div className={"lang " + (TG[0] ? "on" : "")}>
              <strong onClick={() => setTG([!TG[0], false])}>
                <i className="xi-book"></i> 장르 검색{" "}
                <i className="xi-angle-down arrow"></i>
              </strong>
              <ul className="lang_box">
                {
                  [...gnrList].map((it, idx) => {
                    return (
                      <li>
                        <Link to={`/Blist/${it.replaceAll('/', '')}`}>{it}</Link></li>
                    )
                  })
                }
              </ul>
            </div>
            <div className={"top_search " + (TG[1] ? "on" : "")}>
              <strong onClick={() => setTG([false, !TG[1]])}>
                <i className="xi-search"></i>
              </strong>

              <div className="search_box">
                <form action="#!">
                  <input
                    type="text"
                    placeholder="검색어를 입력하세요"
                    required
                  />
                  <button>
                    <i className="xi-search"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>

          <ul className="project">
            <li>
              <a href="#!">로그인</a>
            </li>
            <li>
              <a href="#!">회원가입</a>
            </li>
            <li>
              <a href="#!">상담센터</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;

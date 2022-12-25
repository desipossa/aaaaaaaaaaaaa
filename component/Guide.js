import "../css/Guide.scss";
import { Link } from "react-router-dom";

const CONTENT = [
  {
    id: 1,
    title: "회사 소개",
    dec: "신시웨이 브랜드 소개",
    link: "/sub01",
  },
  {
    id: 2,
    title: "이용 방법",
    dec: "신시북 도서 대여 방법",
    link: "/sub02",
  },
  {
    id: 3,
    title: "도서 리스트",
    dec: "신시북 도서 리스트 입니다.",
    link: "/list",
  },
  {
    id: 4,
    title: "도서 보관함",
    dec: "희망 도서를 장바구니에 담으세요.",
    link: "/cart",
  },
];

const Guide = () => {
  return (
    <section className="Guide csc">
      <h2>이용 안내</h2>
      <p>신시북 이용 가이드</p>
      <div className="inner">
        {CONTENT.map((content) => {
          return (
            <Link to={content.link}>
              <figure key={content.id}>
                <div className="box">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/assets/images/main_solution_icon_0" +
                      content.id +
                      ".png"
                    }
                    alt=""
                  />
                </div>
                <div className="tit">{content.title}</div>
                <div className="dec">{content.dec}</div>
                <a href={content.link} className="cbtn">
                  자세히 보기
                </a>
              </figure>
            </Link>
          );
        })}
      </div>
    </section>
  );
};
export default Guide;

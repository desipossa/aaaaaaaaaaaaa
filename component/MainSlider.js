import { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "../css/MainSlider.scss";

const MS = [
  {
    id: 1,
    content: "사업 소개",
    description:
      "SINSIBOOK 은 도서를 간편하게 대여할 수 있는 신개념 도서 대여 시스템입니다.",
    link: "/",
  },
  {
    id: 2,
    content: "스마트 독서",
    description:
      "전자도서관과 함께하는 스마트한 독서 생활. 멀리 있는 서점 찾아 헤매지 말고, 가까운 곳에서 독서를 즐기세요.",
    link: "/",
  },
  {
    id: 3,
    content: "이달의 베스트 도서",
    description:
      " “모든 거짓이 사라지면 당신만 여기 남습니다. ” <뉴욕타임스> 10년 결산 베스트셀러, 아마존 25년 이상 장기 베스트셀러, 베르나르 베르베르, 오프라 윈프리에게 영감을 준 책  ",
    link: "/",
  },
  {
    id: 4,
    content: "이달의 신간 도서",
    description:
      " “ 내 감정과 친해질 궁리를 시작했다. ” 오늘이 불안하고 내일이 두려운 당신을 행복한 삶으로 인도할 독보적인 심리서 ! ",
    link: "/",
  },
];
const MainSlider = () => {
  const [slideNum, setSlideNum] = useState(0);
  const SLIDE = useRef(null);
  return (
    <section className="MainSlider">
      <div className="container">
        <Slider
          centerMode={true}
          centerPadding={"300px"}
          afterChange={(index) => setSlideNum(index)}
          arrows={false}
          ref={SLIDE}
          className={"MainSlider_slide"}
        >
          {MS.map((img, idx) => {
            return (
              <figure key={img.id} className={slideNum === idx ? "on" : ""}>
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/assets/images/main_ss0" +
                    img.id +
                    ".jpg"
                  }
                  alt=""
                />
              </figure>
            );
          })}
        </Slider>

        <div className="box">
          <div className="content">
            <div className="tit">{MS[slideNum].content}</div>
            <p>{MS[slideNum].description}</p>
            <a href={MS[slideNum].link} className="cbtn">
              자세히보기
            </a>
          </div>
          <div className="num">
            0{slideNum + 1} <span>/ 0{MS.length}</span>
          </div>
        </div>
        <div className="arrows">
          <i
            className="xi-angle-left-thin"
            onClick={() => SLIDE.current.slickPrev()}
          ></i>
          <i
            className="xi-angle-right-thin"
            onClick={() => SLIDE.current.slickNext()}
          ></i>
        </div>
        <ul className="dots">
          {MS.map((dot, idx) => (
            <li
              key={dot.id}
              onClick={() => SLIDE.current.slickGoTo(idx)}
              className={slideNum === idx ? "on" : ""}
            >
              {dot.id}
            </li>
          ))}
        </ul>
      </div>

      <div class="boxx">
        <div class="wave -one"></div>
        <div class="wave -two"></div>
        <div class="wave -three"></div>
      </div>
    </section>
  );
};

export default MainSlider;

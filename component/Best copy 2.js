import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { Link } from "react-router-dom";
import "../css/Best.scss";
import axios from "axios";

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

const Best = ({ bookList }) => {
  const [book, getBook] = useState([]);

  const getApi = async () => {
    const r = await axios.get(
      `https://apis.data.go.kr/4050000/libebook/getLibebook?serviceKey=nmPIjJ%2Bj0FufPiP6k4BLPlq3n%2B46QZN%2B6hgSINrrxqk3nNwnoHX2ynqX6Dlgr3xFeivGPus2vgmh6Ifx1vdu1g%3D%3D&pageNo=${1}&numOfRows=1`
    );
    getBook(r.data.items);
  };

  useEffect(() => {
    getApi();
  }, []);

  const NPTF = [...PTF, PTF[0]].splice(1, PTF.length);

  const LS = useRef();
  const RS = useRef();
  const TS = useRef();

  const [LSS, setLSS] = useState();
  const [RSS, setRSS] = useState();
  const [TSS, setTSS] = useState();

  useEffect(() => {
    setLSS(LS.current);
    setRSS(RS.current);
    setTSS(TS.current);
  }, []);

  useEffect(() => {
    console.log(bookList, " ——-------------------");
  }, [bookList]);

  return (
    <section className="Best csc">
      <h2>베스트 도서</h2>
      <p>이달의 베스트 도서를 만나보세요.</p>
      <div className="container">
        <div className="left">
          <div className="slide">
            <Slider
              fade={true}
              ref={LS}
              arrows={false}
              asNavFor={TSS}
              speed={500}
              autoplaySpeed={3000}
              responsive={[
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 1,
                    autoplay: true,
                    infinite: true,
                  },
                },
              ]}
            >
              {PTF.map((building) => {
                return (
                  <figure key={building.id}>
                    <div className="box">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/assets/images/main_best0" +
                          building.id +
                          ".jpg"
                        }
                        alt=""
                      />
                    </div>
                  </figure>
                );
              })}
            </Slider>
          </div>
        </div>

        {book.map((it) => {
          return (
            <div className="right">
              <div className="arrows">
                <i
                  className="xi-angle-left-thin"
                  onClick={() => LS.current.slickPrev()}
                ></i>
                <i
                  className="xi-angle-right-thin"
                  onClick={() => LS.current.slickNext()}
                ></i>
              </div>

              <div className="slide">
                <Slider
                  slidesToShow={5}
                  className="right_slide"
                  ref={RS}
                  asNavFor={LSS}
                  arrows={false}
                  autoplay={true}
                  speed={500}
                  responsive={[
                    {
                      breakpoint: 768,
                      settings: {
                        slidesToShow: 1,

                        infinite: true,
                      },
                    },
                  ]}
                >
                  {NPTF.map((building) => {
                    return (
                      <figure key={building.id}>
                        <div className="box">
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/assets/images/main_best0" +
                              building.id +
                              ".jpg"
                            }
                            alt=""
                          />
                        </div>
                        <div className="des">{building.title}</div>
                      </figure>
                    );
                  })}
                </Slider>
              </div>
              <Slider
                slidesToShow={1}
                className="right_slide"
                ref={TS}
                asNavFor={RSS}
                arrows={false}
                autoplay={true}
                speed={500}
                responsive={[
                  {
                    breakpoint: 768,
                    settings: {
                      slidesToShow: 1,

                      infinite: true,
                    },
                  },
                ]}
              >
                <div className="textbox">
                  <h2>도서 명 : {it.ebk_nm}</h2>
                  <p>줄거리 : {it.cn_intro.substring(0, 100)} ...</p>
                </div>
              </Slider>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default Best;

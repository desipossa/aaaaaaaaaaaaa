import "../css/News.scss";

const NEWS = [
  {
    id: 1,
    category: "이벤트",
    title: "2022 카타르 월드컵 승부 예측 이벤트",
    date: "2022. 11. 22",
    link: "/",
    src: "/assets/images/main_news01.jpg",
  },
  {
    id: 2,
    category: "도서/주간 알리미",
    title: "12월 1주차 도서 알리미",
    date: "2022. 12. 05",
    link: "/",
    src: "/assets/images/main_news02.jpg",
  },
  {
    id: 3,
    category: "신시북/스토리",
    title: "신시북 12월 생일",
    date: "2022. 12. 05",
    link: "/",
    src: "/assets/images/main_news03.jpg",
  },
  {
    id: 4,
    category: "도서/주간 알리미",
    title: "12월 2주차 도서 알리미",
    date: "2022. 12. 12",
    link: "/",
    src: "/assets/images/main_news02.jpg",
  },
  {
    id: 5,
    category: "이벤트",
    title: "크리스마스 이벤트",
    date: "2022.12.16",
    link: "/",
    src: "/assets/images/main_news05.jpg",
  },
  {
    id: 6,
    category: "도서/주간 알리미",
    title: "12월 3주차 도서 알리미",
    date: "2022. 12. 19",
    link: "/",
    src: "/assets/images/main_news02.jpg",
  },
];

const News = () => {
  return (
    <section className="News csc">
      <h2>신시북 뉴스</h2>
      <p>신시북의 새 소식을 전해드립니다.</p>
      <div className="inner">
        {NEWS.map((news) => {
          return (
            <figure key={news.id}>
              <a href={news.link}>
                <div className="box">
                  <img
                    src={process.env.PUBLIC_URL + news.src}
                    alt={news.title}
                  />
                </div>
                <strong>{news.category}</strong>
                <div className="title">{news.title}</div>
                <span>{news.date}</span>
              </a>
            </figure>
          );
        })}
      </div>
    </section>
  );
};
export default News;

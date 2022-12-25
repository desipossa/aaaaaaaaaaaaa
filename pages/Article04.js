import React from "react";
import Prom from "./Prom";

const Article = ({ content, num }) => {
  return (
    <article className="Article">
      <div className="tit">
        <strong>{content[num].tit}</strong>&nbsp;&nbsp; / &nbsp;&nbsp;
        {content[3].tit}
      </div>
      <div className="bg">
        <div className="case">
          <h2>{content[num].tit}</h2>
          <p>{content[num].con}</p>
        </div>
      </div>
      <div className="sub__tit">{content[num].tit}</div>
      <p className="sub__des">{content[num].des}</p>

      <div className="sub__img">
        <figure>
          <img
            src={process.env.PUBLIC_URL + "/assets/images/article01_1.jpg"}
            alt=""
          />
        </figure>
      </div>
    </article>
  );
};

export default Article;

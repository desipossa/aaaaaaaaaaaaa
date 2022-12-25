import React from "react";
import Article01 from "./Article01";
import Aside from "./Aside";
import "../css/Subpage.scss";

const Sub01 = ({ content }) => {
  const num = 0;
  return (
    <div className="Subpage">
      <div className="nav__bar">
        <div className="inner">
          {content[num].tit} / {content[0].tit}
        </div>
      </div>
      <div className="inner sub">
        <Article01 content={content} num={num} />
        <Aside />
      </div>
    </div>
  );
};

export default Sub01;

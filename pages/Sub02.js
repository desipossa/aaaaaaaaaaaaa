import React from "react";
import Article02 from "./Article02";
import Aside from "./Aside";
import "../css/Subpage.scss";

const Sub02 = ({ content }) => {
  const num = 1;
  return (
    <div className="Subpage">
      <div className="nav__bar">
        <div className="inner">
          {content[num].tit} / {content[1].tit}
        </div>
      </div>
      <div className="inner sub">
        <Article02 content={content} num={num} />
        <Aside />
      </div>
    </div>
  );
};

export default Sub02;

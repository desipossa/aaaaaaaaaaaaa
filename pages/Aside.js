import React from "react";
import NavMenu from "./NavMenu";

const Aside = () => {
  return (
    <aside>
      <div className="aside__lnb">
        <NavMenu />
      </div>

      <div className="aside__customer">
        <img src={process.env.PUBLIC_URL + "/assets/images/logo.png"} alt="" />
        <p>
          <strong>Call : 02-6281-9607 </strong>
          <hr />
          <span>E-mail : bomin1995@naver.com</span>
        </p>
      </div>
    </aside>
  );
};

export default Aside;

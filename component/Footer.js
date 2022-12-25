import React from "react";
import Customer from "./Customer";
import "../css/Footer.scss";
import company from "../data/profile";
import FamilyLink from "./FamilyLink";

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="top">
        <div className="inner">
          <Customer />
        </div>
      </div>
      <div className="bottom">
        <div className="inner">
          <p>
            ADDRESS : {company.address} <br />
            &copy; {company.company}.allright reserved.
          </p>
          <FamilyLink />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import { Link, NavLink } from "react-router-dom";

const NAVLINK = [
  { content: "회사 소개", link: "/sub01" },
  { content: "이용 방법", link: "/sub02" },
  { content: "도서 리스트", link: "/list" },
  { content: "도서 보관함", link: "/cart" },
];
const NavMenu = () => {
  return (
    <ul>
      {NAVLINK.map((it, idx) => {
        return (
          <li key={idx}>
            <NavLink to={it.link}>{it.content}</NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default NavMenu;

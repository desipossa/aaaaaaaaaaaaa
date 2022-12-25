import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";

const Btn = styled.div`
  position: fixed;
  bottom: 100px;
  right: 100px;
  color: #fff;
  background: linear-gradient(
    50deg,
    rgba(3, 134, 245, 1) 0%,
    rgba(24, 207, 192, 1) 100%
  );
  font-size: 30px;
  padding: 10px;
  border-radius: 50%;
  visibility: hidden;
  opacity: 0;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    transform: scale(1.2);
  }
  &.on {
    visibility: visible;
    opacity: 1;
  }
  @media (max-width: 768px) {
    position: fixed;
    bottom: 30px;
    right: 30px;
    color: #fff;
    background: #f5a100;
    font-size: 30px;
    padding: 10px;
    border-radius: 50%;
    visibility: hidden;
    opacity: 0;
    cursor: pointer;
    transition: 0.5s;
    &:hover {
      color: #333;
    }
    &.on {
      visibility: visible;
      opacity: 1;
    }
  }
`;

const Totop = () => {
  const [scrollY, setScrollY] = useState(0);
  const totopHandler = () => {
    gsap.to(window, { duration: 0.5, scrollTo: 0 });
  };

  const scrllEvent = () => {
    let scy = window.scrollY;
    setScrollY(scy);
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollToPlugin);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", scrllEvent);
    return () => {
      window.removeEventListener("scroll", scrllEvent);
    };
  }, []);
  return (
    <Btn onClick={totopHandler} className={scrollY > 400 && "on"}>
      <i className="xi-arrow-top"></i>
    </Btn>
  );
};

export default Totop;

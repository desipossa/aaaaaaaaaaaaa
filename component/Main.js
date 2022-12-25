import React from "react";
import Guide from "./Guide";
import Best from "./Best";
import News from "./News";
import MainSlider from "./MainSlider";

const Main = () => {
  return (
    <main className="Main">
      <MainSlider />
      <Guide />
      <Best />
      <News />
    </main>
  );
};

export default Main;

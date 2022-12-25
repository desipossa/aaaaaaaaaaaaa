import { useEffect, useState } from "react";
import "../css/Footer.scss";

const FLINK = [
  { id: 0, name: "FAMILY SITE", link: "" },
  { id: 1, name: "신시웨이", link: "https://www.sinsiway.com/" },
  { id: 2, name: "엑셈", link: "https://ex-em.com/" },
];

const FamilyLink = () => {
  const [flnk, setflnk] = useState();

  useEffect(() => {
    flnk && window.open(flnk);
  }, [flnk]);

  return (
    <>
      <div className="right">
        <select className="fl" onChange={(e) => setflnk(e.target.value)}>
          {FLINK.map((link) => (
            <option className="ml" value={link.link} key={link.id}>
              {link.name}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default FamilyLink;

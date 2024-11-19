// import { useState } from "react";
// import kards from "../../data/kards.jsx";

const FilterArray = ({ filtrArray }) => {
  return (
    <div>
      {filtrArray.map((kard, index) => {
        return (
          <div key={index}>
            <h2>{kard.stattya}</h2>
            <h3>{kard.nomer}</h3>
            <div>
              <div>
                <h3>Суть справи</h3>
                <p>{kard.sutSpravy}</p>
              </div>
              <div>
                <h3>Обставини</h3>
                <p>{kard.obstavyny}</p>
              </div>
              <div>
                <h3>{kard.vyrok === "" ? "ухвала" : "вирок"}</h3>
                <p>{kard.vyrok !== "" ? kard.vyrok : kard.uhvala}</p>
              </div>
              <div>
                <a href={kard.link}>посилання на судовий реєстр (link)</a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default FilterArray;

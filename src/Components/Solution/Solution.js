import React from "react";
import SolOne from "./SolOne";
import "./SolOne.css";
import { SOLUTION } from "../../data/data";
import Graph from "./Graph";

const Solution = () => {
  return (
    <div className="row solution__container align-items-center">
      <div className="col-lg-8">
        <div className="row ">
          {SOLUTION.map((item, index) => (
            <div className="col-lg-6" key={index}>
              <SolOne items={item} />
            </div>
          ))}
        </div>
      </div>
      <div className="col-lg-4">
        <Graph />
      </div>
    </div>
  );
};

export default Solution;

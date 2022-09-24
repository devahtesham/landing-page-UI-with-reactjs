import React from "react";
import followImg from "../../../images/follow.png";

const Follow = () => {
  return (
    <div className="col-lg-4">
      <div className="d-flex align-items-center f_head_header">
        <div className="subs__img">
          <img src={followImg} alt="subscribe-img" />
        </div>
        <div className="subs__header ms-2">
          <h2 className="text-uppercase">subscribe</h2>
          <h3 className="text-uppercase">get newsletters</h3>
        </div>
      </div>
      <p>
        <span style={{ color: "#2476ed" }}>@Lorem ipsum</span> dolor sit amet
        consectetur adipisicing elit. Provident, laborum, nulla deleniti eaque
        incidunt in, rerum quae temporibus
      </p>
    </div>
  );
};

export default Follow;

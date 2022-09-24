import React from "react";
import { Link } from "react-router-dom";
import subsImg from "../../../images/subscribe.png";
import "./Subscribe.css";

const Subscribe = () => {
  return (
    <div className="col-lg-3">
      <div className="d-flex align-items-center f_head_header">
        <div className="subs__img">
          <img src={subsImg} alt="subscribe-img" />
        </div>
        <div className="subs__header ms-3">
          <h2 className="text-uppercase">subscribe</h2>
          <h3 className="text-uppercase">get newsletters</h3>
        </div>
      </div>
      <div className="d-flex align-items-center">
        <input />
        <Link to="#" className="footer__link">
          Subscribe
        </Link>
      </div>
    </div>
  );
};

export default Subscribe;

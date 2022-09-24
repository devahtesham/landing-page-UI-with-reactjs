import React from "react";
import { Link } from "react-router-dom";
import Email from "./Email/Email";
import Follow from "./Follow/Follow";
import Subscribe from "./Subscribe/Subscribe";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row justify-content-center footer__content">
          <div className="col-lg-11">
            <div className="row justify-content-between">
              <Subscribe />
              <Follow />
              <Email />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

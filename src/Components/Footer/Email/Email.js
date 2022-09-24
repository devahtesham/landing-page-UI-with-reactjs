import React from "react";
import emailImg from "../../../images/email.png";

const Email = () => {
  return (
    <div className="col-lg-4">
      <div className="d-flex align-items-center f_head_header">
        <div className="subs__img">
          <img src={emailImg} alt="subscribe-img" />
        </div>
        <div className="subs__header ms-2">
          <h2 className="text-uppercase">email</h2>
          <h3 className="text-uppercase">contact us</h3>
        </div>
      </div>
      <p className="mb-0">
        <span style={{ color: "#2476ed" }}>Email:-</span> demo123@gmail.com
      </p>
      <p className="mb-0">
        <span style={{ color: "#2476ed" }}>Tel:-</span> +31(0)xx xxx xxxx
      </p>
      <p className="mb-0">
        <span style={{ color: "#2476ed" }}>Address:-</span> ABC Company,
        Street-1234, ABC City
      </p>
    </div>
  );
};

export default Email;

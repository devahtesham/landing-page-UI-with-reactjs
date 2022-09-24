import React from "react";
import clImg from "../../images/clients.png";
import "./SolOne.css";
const SolOne = (props) => {
  const { heading, img, content, btnText } = props.items;
  return (
    <>
      <div className="sol__header">
        <h1>{heading}</h1>
      </div>
      <div className="client__img">
        <img src={img} alt="client-img" />
      </div>
      <p>{content}</p>
      <div className="text-end">
        <button>{btnText}</button>
      </div>
    </>
  );
};

export default SolOne;

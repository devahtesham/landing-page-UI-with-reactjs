import React from "react";
import "./SingleCard.css";
const SingleCard = (props) => {
  const { mainHeading, img, title, subtitle, spec_01, spec_02, spec_03 } =
    props.items;
  return (
    <>
      <div className="card__container d-flex flex-column align-items-center text-center">
        <h5 className="card__main__heading my-3">{mainHeading}</h5>
        <div className="serv__img mb-2">
          <img src={img} alt="services-img" />
        </div>
        <div>
          <h4 className="mb-1">{title}</h4>
          <h6>{subtitle}</h6>
        </div>
        <div className="b__bottom"></div>
        <div className="specs">
          <ul>
            <li className="mb-1">{spec_01}</li>
            <li className="mb-1">{spec_02}</li>
            <li className="mb-1">{spec_03}</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SingleCard;

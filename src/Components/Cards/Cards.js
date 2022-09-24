import React from "react";
import SingleCard from "./SingleCard";
import { CARDS__DATA } from "../../data/data";

const Cards = () => {
  return (
    <section className="card__section">
      <div className="row">
        {CARDS__DATA.map((item, index) => (
          <div className="col-lg-3" key={index}>
            <SingleCard items={item} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cards;

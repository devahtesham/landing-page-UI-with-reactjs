import React from "react";
import Cards from "../Components/Cards/Cards";
import SingleCard from "../Components/Cards/SingleCard";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import Solution from "../Components/Solution/Solution";
import "./Community.css";

const Community = () => {
  return (
    <section className="banner">
      <div className="container">
        <Header />
        <Cards />
        <Solution />
      </div>
      <div className="container-fluid p-0">
        <Footer />
      </div>
    </section>
  );
};

export default Community;

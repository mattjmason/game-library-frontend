import React from "react";
import "../../App.css";
import Hero from "./Hero";
import Cards from "../Cards/Cards";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <Cards />
      <Footer />
    </>
  );
};

export default Home;
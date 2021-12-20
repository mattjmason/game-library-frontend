import React from "react";
import "../../App.css";
import "./Hero.css";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="hero-container">
      <video src="/videos/neonartvisual.mp4" autoPlay loop muted />
      <h1>IT'S GAME TIME</h1>
      <p>Get Ready!</p>
      <div className="hero-btns">
        <button className="btn">
          <Link to="/browse" className="btn" color={{ color: "#242424" }}>
            BROWSE GAMES
          </Link>
          <i className="fas fa-search"></i>
        </button>
      </div>
    </div>
  );
}

export default Hero;

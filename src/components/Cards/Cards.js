import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>New Releases</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="https://upload.wikimedia.org/wikipedia/en/9/9f/Cyberpunk_2077_box_art.jpg"
              text="Cyberpunk 2077"
              label="Adventure"
              path="/browse"
            />
            <CardItem
              src="https://upload.wikimedia.org/wikipedia/en/f/f8/ACValhalla.jpg"
              text="Assassin's Creed Valhalla"
              label="Action"
              path="/browse"
            />
            <CardItem
              src="https://media.altchar.com/prod/images/940_530/gm-869586bb-eb27-48c0-ba49-b65c020781f4-halo.jpg"
              text="Halo Infinite"
              label="Action"
              path="/browse"
            />
          </ul>
        </div>
      </div>
      <h1>Top Rated Games</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="https://image.api.playstation.com/vulcan/img/rnd/202010/2716/JgIondlqViKdq8sTE1HhKTRF.png"
              text="The Last Of Us"
              label="Action"
              path="/browse"
            />
            <CardItem
              src="https://store-images.s-microsoft.com/image/apps.28990.69531514236615003.8f0d03d6-6311-4c21-a151-834503c2901a.d629260e-2bc4-4588-950c-f278cbc22a64"
              text="The Witcher"
              label="Adventure"
              path="/browse"
            />
            <CardItem
              src="https://image.api.playstation.com/vulcan/img/rnd/202008/2617/A3hS7JsXkt8dwt5niN7Vp0g6.png"
              text="God Of War"
              label="Action"
              path="/browse"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
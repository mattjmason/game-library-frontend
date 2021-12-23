import React from "react";
import CollectionCard from "./CollectionCard";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import Footer from "../Home/Footer";
import "./Collection.css";

class Collection extends React.Component {
  constructor() {
    super();
    this.state = {
      games: [],
    };
  }

  componentDidMount() {
    fetch(`http://localhost:3001/user/collections`, {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({ games: data });
      });
  }

  deleteFromCollection = (id) => {
    fetch(`http://localhost:3001/user/collections/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json(res))
      .then((data) => {
        let updatedGames = this.state.games.filter((game) => game.id !== id);
        this.setState({ games: updatedGames });
        Swal.fire({
          title: "Deleted!",
          text: "Game has been deleted",
          icon: "success",
        });
      });
  };

  render() {
    return (
      <>
        {this.state.games.length === 0 ? (
          <>
            <div className="browser-container">
              <h1>
                Opps! Looks like you don't have any games in your collection.
                Click below to add some games!
              </h1>
              <div className="browse-button">
                <button className="btn">
                  <Link
                    to="/browse"
                    className="btn"
                    color={{ color: "#242424" }}
                  >
                    BROWSE GAMES
                  </Link>
                  <i className="fas fa-search"></i>
                </button>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="results-game-section">
              {this.state.games.map((game) => {
                return (
                  <CollectionCard
                    key={game.id}
                    gameObj={game}
                    deleteFromCollection={this.deleteFromCollection}
                  />
                );
              })}
            </div>
            <Footer />
          </>
        )}
      </>
    );
  }
}

export default Collection;

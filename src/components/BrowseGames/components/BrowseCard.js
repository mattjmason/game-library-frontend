import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { connect } from "react-redux";

class BrowseCard extends React.Component {
  handleOnClick = (event) => {
    fetch(`http://localhost:3001/games/${event.id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        name: event.name,
        picture: event.background_image,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        switch (data.message) {
          case "Already added!":
            Swal.fire({
              title: "Already added!",
              text: "Browse more games!",
              icon: "error",
              confirmButtonText: "Back",
            });
            break;
          default:
            Swal.fire({
              title: "Added!",
              text: "Game has been added",
              icon: "success",
              confirmButtonText: "Cool",
            });
        }
      });
  };

  render() {
    let { name, background_image } = this.props.gameObj;

    const cardStyle = {
      background: `url(${background_image})`,
      backgroundSize: "100% 100%",
      backgroundPosition: "center center",
      width: "auto",
      height: "16vw",
    };

    return (
      <>
        <div>
          <div className="search-game-card animated fadeIn">
            <Link to={`/game/${this.props.gameObj.id}`}>
              <div style={cardStyle} className="search-game-card-image"></div>
            </Link>
            <Link
              className="search-game-text"
              to={`/game/${this.props.gameObj.id}`}
            >
              {name}
            </Link>
          </div>
          {this.props.loggedIn && (
            <button onClick={() => this.handleOnClick(this.props.gameObj)}>
              Add to Collection
            </button>
          )}
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.auth.loggedIn,
  };
};
export default connect(mapStateToProps)(BrowseCard);
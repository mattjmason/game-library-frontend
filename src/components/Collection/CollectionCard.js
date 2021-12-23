import React from "react";
import { Link } from "react-router-dom";
import "./Collection.css";

class CollectionCard extends React.Component {
  render() {
    let { id, name, picture } = this.props.gameObj;

    const cardStyle = {
      background: `url(${picture})`,
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
          <button onClick={() => this.props.deleteFromCollection(id)}>
            Delete from Collection
          </button>
        </div>
      </>
    );
  }
}

export default CollectionCard;

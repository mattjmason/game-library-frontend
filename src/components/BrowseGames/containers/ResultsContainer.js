import React from "react";
import BrowseCard from "../components/BrowseCard";
import { connect } from "react-redux";
import { gettingGames } from "../../../redux/actions/gameActions";

class ResultsContainer extends React.Component {
  componentDidMount() {
    this.props.gettingGames();
  }

  render() {
    return (
      <div className="results-game-section">
        {this.props.games.map((game) => {
          return <BrowseCard key={game.id} gameObj={game} />;
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    games: state.released,
  };
};

export default connect(mapStateToProps, { gettingGames })(ResultsContainer);
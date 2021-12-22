import React from "react";
import { connect } from "react-redux";
import { gameSearchResults } from "../../../redux/actions/gameActions";

class SearchContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      text: "",
    };
  }

  handleOnChange = (event) => {
    this.setState({
      text: event.target.value,
    });
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    if (this.state.text !== "") {
      let search = this.state.text;
      const API_KEY = process.env.REACT_APP_API_KEY;
      const SEARCH_URL = `https://api.rawg.io/api/games?search=${search}&key=`;
      fetch(SEARCH_URL + search + API_KEY)
        .then((resp) => resp.json())
        .then((games) => {
          this.props.gameSearchResults(games.results);
        });
    }
    this.setState({
      text: "",
    });
  };

  render() {
    return (
      <div className="game-search-container">
        <div className="game-search-text">
          <h1>Search Games</h1>
        </div>

        <div className="game-search-input">
          <form onSubmit={this.handleOnSubmit} className="field has-addons">
            <div className="control control-search">
              <input
                onChange={(e) => this.handleOnChange(e)}
                id="game-search"
                className="input"
                type="text"
                name="Search"
                placeholder="Search Games..."
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    gameSearchResults: state.released,
  };
};

export default connect(mapStateToProps, { gameSearchResults })(SearchContainer);
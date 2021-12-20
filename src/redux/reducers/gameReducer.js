const gameReducer = (state = [], action) => {
    switch (action.type) {
      case "SET_GAMES":
        return action.payload;
      case "SEARCH_RESULTS":
        return action.payload;
      default:
        return state;
    }
  };
  
  export default gameReducer;
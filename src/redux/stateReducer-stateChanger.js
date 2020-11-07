const { ADD_ONE, MINUS_ONE } = require("./action-types");

const initialState = {
  count: 0,
};
function countReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ONE:
      return {
        count: state.count + 1,
      };

    case MINUS_ONE:
      return {
        count: state.count - 1,
      };

    default:
      return state;
  }
}
export default countReducer;

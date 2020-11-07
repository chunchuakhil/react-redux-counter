const {
  FETECH_USER_REQUEST,
  FETECH_USER_SUCCESS,
  FETECH_USER_FAILURE,
} = require("./asyncAction-types");

const initialState = {
  loading: false,
  users: [],
  error: "",
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETECH_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETECH_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
        error: "",
      };
    case FETECH_USER_FAILURE:
      return {
        ...state,
        loading: false,
        users: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;

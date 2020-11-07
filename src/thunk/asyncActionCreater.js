//normally action creater will return action object

const { default: Axios } = require("axios");
const {
  fetchUserRequest,
  fetchUserSuccess,
  fetchUserFailure,
} = require("./asyncActions");

//but the thunk returns function instead of action object
const fetchUser = () => {
  return function (dispatch) {
    //now make axios request, and make dispatch necessary requests
    dispatch(fetchUserRequest());
    //and first dispatch the request
    Axios.get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        dispatch(fetchUserSuccess(response.data.map((user) => user.id)));
      })
      .catch((error) => {
        dispatch(fetchUserFailure(error.message));
      });
  };
};

export default fetchUser;

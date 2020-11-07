import {
  FETECH_USER_FAILURE,
  FETECH_USER_REQUEST,
  FETECH_USER_SUCCESS,
} from "./asyncAction-types";

export const fetchUserRequest = () => {
  return {
    type: FETECH_USER_REQUEST,
  };
};
export const fetchUserSuccess = (user) => {
  return {
    type: FETECH_USER_SUCCESS,
    payload: user,
  };
};
export const fetchUserFailure = (error) => {
  return {
    type: FETECH_USER_FAILURE,
    payload: error,
  };
};

import { ADD_ONE, MINUS_ONE } from "./action-types";

export const plus = () => ({
  type: ADD_ONE,
});

export const minus = () => ({
  type: MINUS_ONE,
});

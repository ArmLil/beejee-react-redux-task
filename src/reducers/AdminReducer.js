import { SET_ADMIN } from "../actions";

export const isAdmin = (state = false, action) => {
  switch (action.type) {
    case SET_ADMIN:
      return action.isAdmin;
    default:
      return state;
  }
};

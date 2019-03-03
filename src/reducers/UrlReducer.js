import { SET_URL } from "../actions";
import { URL_ROOT } from "../actions";
import { DEVELOPER } from "../actions";

export const getUrl = (
  state = `${URL_ROOT}/?developer=${DEVELOPER}`,
  action
) => {
  switch (action.type) {
    case SET_URL:
      return action.url;
    default:
      return state;
  }
};

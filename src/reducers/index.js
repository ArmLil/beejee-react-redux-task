import { combineReducers } from "redux";
import { dataReducer } from "./DataReducer";
import { isAdmin } from "./AdminReducer";
import { getUrl } from "./UrlReducer";

const reducers = combineReducers({
  dataReducer,
  isAdmin,
  getUrl
});

export default reducers;

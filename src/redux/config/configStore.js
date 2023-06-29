import { createStore } from "redux";
import { combineReducers } from "redux";
import todos from "../modules/todos";
import workState from "../modules/selectChange";
import toggle from "../modules/toggle";

const rootReducer = combineReducers({
  todos,
  workState,
  toggle,
});

const store = createStore(rootReducer);

export default store;

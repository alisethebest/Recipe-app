import { createStore } from "redux";
const reducer = (state = { recipes: [] }, action) => {
  if (action.type === "SET_RECIPES") {
    return { recipes: action.payload };
  }
  return state;
};
const store = createStore(reducer);
export default store;

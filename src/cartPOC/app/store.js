import { createStore } from "redux";
import ShoppingReducer from "../cartRedux/ShoppingReducer";
console.log("Hello")
const store = createStore(ShoppingReducer);
// const store=createStore(ShoppingReducer);
export default  store;

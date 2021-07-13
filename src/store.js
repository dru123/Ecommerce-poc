// import { createStore } from "redux";
// import rootReducer from "./redux/rootReducer";
// console.log("Hello")
// const store = createStore(rootReducer);
// // console.log(store);
// export default store;
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./redux/rootReducer";
console.log("Hello")
const store = createStore(rootReducer, applyMiddleware(thunk));
// console.log(store);
export default store;
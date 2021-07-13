import { combineReducers } from "redux";
import BatReducer from "./bat/batReducer";
import BallReducer from "./ball/ballReducer";
// import InputReducer from './InputContainer/inputReducer';
import userReducer from "./user/userReducer";
console.log("root Reducer");
// merged store
const rootReducer = combineReducers({
    Ball: BallReducer,
    Bat: BatReducer,
    // Input:InputReducer,
    User: userReducer
});
export default rootReducer;
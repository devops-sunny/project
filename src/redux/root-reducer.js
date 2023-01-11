import { combineReducers } from "redux";
import commonReducer from "./common/Reducer";

const rootReducer = combineReducers({
    Common: commonReducer,
});

export default rootReducer;

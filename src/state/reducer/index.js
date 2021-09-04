import { combineReducers } from "redux";
import accountReducer from "./accountReducer";
import userReducer from "./userReducer";
import accountHistoryReducer from './accountHistoryReducer'


const reducers = combineReducers({
    account : accountReducer,
    user : userReducer,
    history : accountHistoryReducer
});

export default reducers;
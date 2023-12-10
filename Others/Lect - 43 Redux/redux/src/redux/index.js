import { counterReducer, authReducer } from "./reducers";
import { increamentActionCreater } from "./actions";
import { legacy_createStore as createStore, combineReducers } from 'redux';

let rootReducer = combineReducers({
    count : counterReducer,
    auth : authReducer,
});

export default rootReducer;
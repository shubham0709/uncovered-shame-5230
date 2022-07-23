import { reducer as DataReducer } from "./DataReducer/reducer";
import { AuthReducer } from "./AuthReducer/reducer";
import thunk from 'redux-thunk';
import {
    combineReducers,
    legacy_createStore,
    applyMiddleware
} from "redux";
const rootReducer = combineReducers({
    DataReducer: DataReducer,
    AuthReducer: AuthReducer
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
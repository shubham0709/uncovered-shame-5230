import { reducer as AuthReducer } from "./Auth/reducer"
import { reducer as DataReducer } from "./DataReducer/reducer";
import thunk from 'redux-thunk';
import {
    combineReducers,
    legacy_createStore,
    applyMiddleware
} from "redux";
const rootReducer = combineReducers({
    AuthReducer: AuthReducer,
    DataReducer: DataReducer

})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
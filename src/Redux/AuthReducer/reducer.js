import {
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT,
} from "./action.types";

const initialState = {
    isLoading: false,
    isError: false,
    isAuth: false
}

const AuthReducer = (state = initialState, action) => {
    let { type, payload } = action;
    switch (type) {
        case LOGIN_REQUEST: return {
            ...state,
            isAuth: false,
            isLoading: true,
            isError: false
        }
        case LOGIN_SUCCESS: {
            return {
                ...state,
                isAuth: true,
                isLoading: false,
                isError: false
            }
        }
        case LOGIN_FAILURE: return {
            ...state,
            isAuth: false,
            isError: true,
            isLoading: false
        }
        case LOGOUT: {
            return {
                isLoading: false,
                isError: false,
                isAuth: false
            }
        }
        default: return state;
    }
}
export { AuthReducer };
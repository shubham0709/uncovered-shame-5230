import {
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT,
} from "./actionTypes";

const initialState = {
    isLoading: false,
    isError: false,
    isAuth: false
}

const reducer = (state = initialState, action) => {
    let { type, payload } = action;
    switch (type) {
        default: return state;
    }
}
export { reducer };
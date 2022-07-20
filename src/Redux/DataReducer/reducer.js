import {
    GET_DATA_LOADING,
    GET_DATA_SUCCESS,
    GET_DATA_FAILURE
} from "./action.types";

const initialState = {
    data: [],
    isLoading: false,
    isError: false
}

export const reducer = (state = initialState, action) => {
    let { type, payload } = action;
    switch (type) {
        case GET_DATA_LOADING: return {
            ...state,
            isLoading: true,
            isError: false
        }

        case GET_DATA_SUCCESS: return {
            data: payload,
            isLoading: false,
            isError: false
        }

        case GET_DATA_FAILURE: return {
            ...state,
            isLoading: false,
            isErorr: true
        }

        default: return { ...state }
    }

}
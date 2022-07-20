import * as types from "./actionTypes";

const initialState = {
    cards:[],
    isLoading: false,
    isError: false,
}

const reducer = (state = initialState, action) => {
    let { type, payload } = action;
    switch (type) {
        case types.GETDATA_REQUEST:
            return {
                ...state,
                isLoading:true,
                isError:false
            }
            case types.GETDATA_SUCCESS:
                return {
                    ...state,
                    isLoading:false,
                    cards:payload,
                    isError:false,
                }
                case types.GETDATA_FAILURE:
                    return {
                        ...state,
                        isLoading:false,
                        isError:true
                    }
        default: return state;
    }
}
export { reducer };
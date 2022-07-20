import {
    GET_DATA_LOADING,
    GET_DATA_SUCCESS,
    GET_DATA_FAILURE
} from "./action.types";
import axios from "axios";

export const getDataAPI = () => (dispatch) => {
    dispatch({ type: GET_DATA_LOADING });
    axios.get("http://localhost:8080/pages")
        .then(res => dispatch({ type: GET_DATA_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: GET_DATA_FAILURE, payload: err }))
}
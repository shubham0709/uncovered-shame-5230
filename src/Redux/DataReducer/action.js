import {
    GET_DATA_LOADING,
    GET_DATA_SUCCESS,
    GET_DATA_FAILURE
} from "./action.types";
import axios from "axios";

export const getDataAPI = () => (dispatch) => {
    dispatch({ type: GET_DATA_LOADING });
    axios.get("https://nameless-brushlands-39570.herokuapp.com/getdata")
        .then(res => dispatch({ type: GET_DATA_SUCCESS, payload: res.data[0].pages }))
        .catch(err => dispatch({ type: GET_DATA_FAILURE, payload: err }))
}
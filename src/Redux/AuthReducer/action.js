import {
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT
} from "./action.types";
import axios from "axios";
import { getDatafromLocalStorage, saveDataToLocalStorage } from "../../utils/localstorage";

export const registerAPI = (creds) => (dispatch) => {
    // dispatch({ type: REGISTER_REQUEST })
    // return axios.post("https://masai-api-mocker.herokuapp.com/auth/register", creds)
    //     .then(res => dispatch({ type: REGISTER_SUCCESS }))
    //     .catch(e => dispatch({ type: REGISTER_FAILURE }))
    console.log(creds);
    let users = getDatafromLocalStorage("registeredUsers") || [];
    users.push(creds);
    saveDataToLocalStorage("registeredUsers", users);
}

export const loginAPI = (creds) => (dispatch) => {
    dispatch({ type: LOGIN_REQUEST })
    let users = getDatafromLocalStorage("registeredUsers") || [];
    let flag = false;
    users.forEach((x) => {
        if (x.email == creds.email && x.password == creds.password) {
            dispatch({ type: LOGIN_SUCCESS });
            flag = true;
        }
    });
    if (flag == false) {
        dispatch({ type: LOGIN_FAILURE })
    }
    console.log(flag ? "login successfull" : "invalid credentials");
}

export const logoutAPI = () => (dispatch) => {
    dispatch({ type: LOGOUT });
}
import * as types from "./actionTypes";
import axios from "axios";


const getDataCard_1=(payload)=>(dispatch)=>{
dispatch({type:types.GETDATA_REQUEST});
return  axios
.get("http://localhost:8080/card_1").then((res) =>  dispatch({type:types.GETDATA_SUCCESS,payload:res.data},
    console.log("data",res.data))
    ).catch((err) => dispatch({type:types.GETDATA_FAILURE,payload:err}))

}


// 2nd card data...
const getDataCard_2=(payload)=>(dispatch)=>{
    dispatch({type:types.GETDATA_REQUEST});
    return  axios
    .get("http://localhost:8080/card_2").then((res) =>  dispatch({type:types.GETDATA_SUCCESS,payload:res.data},
        console.log("data",res.data))
        ).catch((err) => dispatch({type:types.GETDATA_FAILURE,payload:err}))
    
    }



export {getDataCard_1,getDataCard_2}




import React from 'react'
import { useNavigate } from 'react-router-dom'
import redirection from '../Function/timeout'

const OtpPage = () => {
    const navigate = useNavigate()
    // const [count,setCount] = React.useState(30);
    // const [timeout,setTimeout] = React.useState(redirection(10000) || false)
    React.useEffect(()=>{
        // const timeid = setInterval(()=>{
        //     setCount(count-1)
        // },1000)
       
    },[])

  return (
    <div>
        <div style={{height:"60px",backgroundColor:"#2f9bdb"}}></div>
         <h2>You have received a notification about payment</h2> 
         {/* <h3>{timeout ? navigate("/") : "Please make payment"}</h3> */}
    </div>
  )
}

export default OtpPage
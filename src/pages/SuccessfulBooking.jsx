import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import styles from "../Styles/SuccesfulBooking.module.css"

const SuccessfulBooking = () => {
    const data = JSON.parse(localStorage.getItem("userDetails"))
    const [time,setTime] = React.useState(10)
    const navigate = useNavigate()
 
    
    React.useEffect(()=>{
        let id = setInterval(()=>{
            if(time<=1){
                clearInterval(id)
                navigate("/")
            }else{
                setTime(()=>time-1)
            }
        },1000)


        // cleanup function 
        return ()=> {
            clearInterval(id)
        }
    },[time])
    const handleDirection = () => navigate("/")
        
    
    
    return (
            <div className={styles.SuccessfulBookingPageWrapper}>
              
                <div className={styles.GreenBar} ></div>
                <div className={styles.SuccessHead}>Your Payment is done Successfully</div>   
                <div className={styles.centerText}>
                    <img className={styles.image} src="https://cdn2.iconfinder.com/data/icons/greenline/512/check-512.png" alt="" />
                </div>
                <div className={styles.Thans}>Thanks for Your Booking with us!</div>
                <div>
                    <p className={styles.simpleText}>We received your order and payment both successfully. Now we will snd your orered document with given time period.</p>
                    <p className={styles.simpleText}>Our standard delivery time period is 12-24 hours whereas urgent order time period may vary from 6-8 hours</p>
                    <p className={styles.simpleText}><span style={{fontWeight:"700"}}>FYI: </span>Proper company invoice already sent to your email address.</p>

                </div>
                <div className={styles.lastdiv}>
                    <p className={styles.timer}> you will be redirecting To HomePage in: </p>
                    <p className={styles.timer}> {time} seconds</p>
                    <button className={styles.LastButton} onClick={handleDirection}>Go TO HomePage</button>
                </div>
      </div>
    )
}

  


export default SuccessfulBooking
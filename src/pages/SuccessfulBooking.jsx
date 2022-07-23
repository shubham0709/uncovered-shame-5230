import React from 'react'

const SuccessfulBooking = () => {
    const data = JSON.parse(localStorage.getItem("userDetails"))
  return (
    <div>
      <h1>{`Successfull booking ${data.username}`} </h1>
      <h1>Thank you for booking</h1>
    </div>
  )
}

export default SuccessfulBooking
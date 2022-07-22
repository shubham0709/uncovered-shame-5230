// import React from 'react';
import "./Register.css"

import Recaptcha from './Recaptcha';
import React, { useState } from "react";
import { Form, Alert } from "react-bootstrap";
import Login from "../Login/Login";
function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [profession, setProfession] = useState("");

  const [flag, setFlag] = useState(false);
  const [login, setLogin] = useState(true);
  


  function handleFormSubmit(e) {
    e.preventDefault();

    if (!name || !email || !password || !phone || !profession) {
      setFlag(true);
    } else {
      setFlag(false);
      localStorage.setItem("sanskarEmail", JSON.stringify(email));
      localStorage.setItem(
        "sanskarPassword",
        JSON.stringify(password)
      );
      console.log("Saved in Local Storage");

      setLogin(!login);
    }
  }

  function handleClick() {
    setLogin(!login);
  }

 
  

  return (
    <>
 
        <div>
          {" "}
          {login ? (
            <form onSubmit={handleFormSubmit}>
              <h3>OR</h3>

              <div className="form-group">
               
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  name="name"
                  onChange={(event) => setName(event.target.value)}
                />
              </div>

              <div className="form-group">
               
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>

              <div className="form-group">
               
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>

             

              <div className="form-group">
                
                <Form.Control
                  as="select"
                  onChange={(event) => setProfession(event.target.value)}
                >
                  <option>India(+91)</option>
                  <option>United State(+1)</option>
                  <option>United Arab Emitres(+971)</option>
                  <option>Singapur(+87)</option>
                  <option>Full Stack</option>
                </Form.Control>
              </div>
              <div className="form-group">
               
               <input
                 type="Phone"
                 className="form-control"
                 placeholder="Enter contact no"
                 onChange={(event) => setPhone(event.target.value)}
               />
             </div>
             <div className="checkbox">
              <input type="checkbox" id="checkbox"  />
              <label htmlFor="checkbox">Subscribe to the newsletter </label>   </div>
              <Recaptcha className="captcha"/>
              <button type="submit" className="btn">
                 Submit Now
              </button>
              <p className="terms">By signing up, you agree to Tripoto's terms and conditions and privacy policy.</p>
              <p onClick={handleClick} className="forgot-password text-right">
                Already registered{" "}<span className="gotologin">log in</span>?
                
              </p>
              {flag && (
                <Alert color="primary" variant="danger" className="alert">
                 Please fill the all box
                </Alert>
              )}
            </form>
          ) : (
            <Login />
          )}
        </div>
    
    </>
  );
}

export default Register;

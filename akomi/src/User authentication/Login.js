import React, { useState } from 'react'
import './Login.css'
import logo from '../Images/weblogo.svg'
import axios from 'axios';
import {  useNavigate } from 'react-router-dom';
function Login() {
  const navigate = useNavigate();
  let userInitialData = {
    email: "",
    password: ""
  }

  let [userData, setuserData] = useState(userInitialData);
  let handleUserData = (e) => {
    setuserData({
      ...userData,
      [e.target.name]:e.target.value
    })
  }
  let email=userData.email;
  let password=userData.password;
  let handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/login',{email,password})
    .then(result=>{console.log(result)
      if(email==="sameerhake38@gmail.com" && password==="sameer")
      {
        navigate('/BillingAR');
      }
     
    })

    console.log(userData);
  }

  return (
    <React.Fragment>

      <section className="vh-100" style={{ backgroundColor: "rgb(175 195 235)" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card shadow-2-strong" style={{ borderRadius: "1rem" }}>

                <div className="card-body p-5 text-center">
                  <img src={logo} className='login-img' />
                  {/* <h4 className="mb-5">Sign in</h4> */}

                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      name="email"
                      id="typeEmailX-2"
                      className="form-control form-control-lg"
                      placeholder="Email"
                      value={userData.email}
                      onChange={handleUserData}
                    />
                  </div>
                  <div className="form-outline mb-4">
                    <input
                      type="password"
                      name="password"
                      id="typePasswordX-2"
                      className="form-control form-control-lg"
                      placeholder="Password"
                      value={userData.password}
                      onChange={handleUserData}
                    />
                  </div>
                  <p className="small mb-5 pb-lg-2">
                    <a href="#!">
                      Forgot password?
                    </a>
                  </p>
                  {/* Checkbox */}
                  <div className="form-check d-flex justify-content-start mb-4">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      id="form1Example3"
                    />
                    <label className="form-check-label" htmlFor="form1Example3">
                      {" "}
                      Remember password{" "}
                    </label>
                  </div>
                  <button className="loginbtn btn btn-primary btn-lg btn-block" type="submit" onClick={handleSubmit}>
                    Login
                  </button>


                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </React.Fragment>
  )
}

export default Login
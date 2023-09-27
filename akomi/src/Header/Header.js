import React, { useEffect } from 'react';
import { useState } from 'react';
import './Header.css'
import Navbar from './Navbar';
import logo from "../Images/logo1.svg";
import Dropdown from 'react-bootstrap/Dropdown';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function Header() {
  const [userName, SetUserName] = useState("")
  const navigate = useNavigate();
  function HandleUserName(userName) {
    SetUserName(userName)
  }
  function handleSignOut()
  {
    // navigate('/login');

    // Optionally, you can use the `replace` function of `navigate`
    // to replace the current route in the history
     navigate('/', { replace: true });
  }

  useEffect(() => {
    // get the user name from the api
    HandleUserName("Admin");
  }, []);

  return (
    <header className="header">
      <div className='header-top'>

        <div className='header-first'>
          <img src={logo} alt="Akomi Logo" className="logo-img" />
        </div>

        <div className='header-second'>
          <Dropdown>
            <Dropdown.Toggle className="admin_button">
              <div className="user-name-text admin_button">
                <p style={{ textAlign: "center", fontSize: "12px", fontFamily: "sans-serif", fontWeight: "400", color: "white", marginTop: "-3px" }}>
                  {userName}</p>
              </div>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              
              <img src={require("../Images/Profile.png")}
                style={{
                  height: "50px", width: "50px", borderRadius: "50px", position: "relative"
                  , left: "103px", cursor: "pointer", top: "13px"
                }}
              />
              <p style={{ fontSize: "14px", textAlign: "center", color: "#2a2727", fontWeight: "700", marginTop: " 18px" }}>Admin</p>
              <p style={{ fontSize: "14px", width: "260px", textAlign: "center" }}>andrianshanshan78@hokuapps.com</p>
              <Dropdown.Item  style={{ fontSize: "12px" }}>
                <NavLink to='/BillingAR/Profile' className="custom-links-admin">My Profile</NavLink>
              </Dropdown.Item>
              <Dropdown.Item  style={{ fontSize: "12px" }}>
                <NavLink to='/Login' className="custom-links-admin" onClick={handleSignOut}>Sign Out</NavLink>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>


      </div>
      <Navbar />
    </header>
  );
}
export default Header;
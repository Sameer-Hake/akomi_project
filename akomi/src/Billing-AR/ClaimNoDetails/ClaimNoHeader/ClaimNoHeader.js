import React from 'react'
import './ClaimNoHeader'
import logo from "../../../Images/logo1.svg";
function ClaimNoHeader() {
    return (
        <div>
            <header className="header1">
                <div className='header-top'>

                 <div className='header-first'>
                   <img src={logo} alt="Akomi Logo" id="logoimgg" 
                     style={{
                        marginTop: "-26px ",
                        height: "32%",
                        width: "115px",
                        marginLeft: "-3px",
                     }}
                   />
                 </div>

                 <div className='header-second'>   
                    <div className="user-name-text">
                       <p  style={{textAlign:"center",fontSize:"12px",fontFamily:"sans-serif",fontWeight:"400",color:"white",marginTop:"-3px"}}> 
                       </p> 
                     </div> 
                 </div>

                </div>
             
            </header>
        </div>
    )
}

export default ClaimNoHeader

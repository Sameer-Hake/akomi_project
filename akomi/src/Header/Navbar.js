import React from 'react'
import { NavLink } from 'react-router-dom';
import './Navbar.css'

function Navbar()
{
    return (
        <nav>
           <div className='navbar'>

               <div className='navbar-child'>

                        <div className='navbar-item'>
                            <NavLink to='/BillingAR' className="custom-links">Billing-AR</NavLink>
                        </div>

                        <div className='navbar-item'>
                            <NavLink to='/Practise' className="custom-links">Practise</NavLink>
                        </div>
                        
                        <div className='navbar-item'>
                            <NavLink to='/Physician' className="custom-links">Physician</NavLink>
                        </div>

                        <div className='navbar-item'>
                            <NavLink to='/CoPayment' className="custom-links">Co-Payment</NavLink>
                        </div>    

                        <div className='navbar-item'>
                            <NavLink to='/FreeAuthorization' className="custom-links">Pre Authorization</NavLink>
                        </div>

                        <div className='navbar-item'>
                            <NavLink to='/UserManagement' className="custom-links">User Management</NavLink>
                        </div>

                 </div>
                 <hr className="horizantal_line" style={{ margin: "12px  0",color:"gray"}}></hr>

            </div> 
       
        </nav>
    )
}
export default Navbar;
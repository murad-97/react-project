import React, { useContext } from "react";
import { MyContext } from "../../layouts/master"; 
import { NavLink, Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Nav from "react-bootstrap/Nav";

const Sidebar = () => {
    const { isLoggedIn, handleLogout } = useContext(MyContext);
    const navigate = useNavigate();
   
  return (
    <>
      <div className="col-lg-4">
        <div className="dashboard_sidebar">
          <div className="dashboard_sidebar_user">
            <img src="https://cdn-icons-png.flaticon.com/512/3541/3541871.png" alt="img" />
            <h3>Sherlyn Chopra</h3>
            <p>
              <a href="tel:+00-123-456-789">+00 123 456 789</a>
            </p>
            <p>
              <a href="mailto:sherlyn@domain.com">sherlyn@domain.com</a>
            </p>
          </div>
          <div className="dashboard_menu_area">
            <ul>
            <li>
                <Nav.Link
                  as={NavLink}
                  to="/myprofile"
                ><i class="fas fa-user-circle"></i>
                  Profile info
                </Nav.Link>
              </li>
              <li style={{ padding: "0.5rem 1rem" }}
                className="dashboard_dropdown_button"
                id="dashboard_dropdowns">
                <i className="fas fa-address-card"></i>My bookings
                <span>
                  {" "}
                  <i className="fas fa-angle-down"></i>
                </span>
                <div
                  className="booing_sidebar_dashboard"
                  id="show_dropdown_item"
                  style={{ display: "none" }}>
                  <ul>
                    
                    <li >
                      <Nav.Link
                        as={NavLink}
                        exact
                        to="/myprofile/booking"
                      >
                        <i className="fas fa-history"></i>Pending tours
                      </Nav.Link>
                    </li>
                    <li>
                      <Nav.Link
                        as={NavLink}
                        to="/myprofile/booking"
                      >
                       <i className="fas fa-hotel"></i> Completed tours
                      </Nav.Link>
                    </li>
                  </ul>
                </div>
              </li>
              
             
             
              <li>
               
                <Nav.Link
                 
                  
                 onClick={handleLogout}
                  
                
                ><i className="fas fa-sign-out-alt"></i>
                  Logout
                </Nav.Link>
              </li>

            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

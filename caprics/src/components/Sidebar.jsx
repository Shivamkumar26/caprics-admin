import React, { useState } from "react";
import Logo from "./images/logo.png"
import User from "./images/user-image.png"
import Signout from "./images/signout.png";
import Tabs from "./Tabs.jsx"
import "./Sidebar.css";


function Sidebar() {
    return(
        <div className="sidebar">
            <img src={Logo} alt="logo" className="logo"/>
            <img src={User} alt="user" className="user-image"/>
            <h2 className="username">Alexandra Robert</h2>
            <h3 className="user-email">alexandrarobert@gmail.com</h3>
            <hr />

            <div className="sidebar-options">
                <Tabs />
            </div>

            <div className="sign-out">
                <img src={Signout} alt="signout" className="signout-logo"/>
                Sign Out
            </div>
        </div>
    );
}

export default Sidebar;
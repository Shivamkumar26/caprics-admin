import React, { useState } from "react";
import "./AdminCapricsMaster.css";
import Sidebar from "./Sidebar.jsx"
import { Link } from 'react-router-dom';

function AdminCapricsMaster() {
    return(
        <div className="caprics-master">
            <div className="sidebar">
                <Sidebar />
            </div>
        </div>
    );
}

export default AdminCapricsMaster;
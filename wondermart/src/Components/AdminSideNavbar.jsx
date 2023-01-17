import React, { useState } from "react";
import "../AdminStyles/AdminSideNavbar.css";

const AdminSideNavbar = () => {
   return (
    <div className="admin_navbar_outerbox">
        <div className="admin_navbar">
            <div>Admins</div>
            <div>Users</div>
            <div>Products</div>
            <div>Add Product</div>
        </div>
    </div>
   );
};

export {AdminSideNavbar};
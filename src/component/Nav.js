import React from 'react';
import { NavLink } from "react-router-dom";

import "./Nav.css";

const Nav = () => {
  return (
    <div className="Nav">
        <div className="nav_logo">SuperPay</div>
        <div className="nav_menu">
            <NavLink className={({ isActive }) => (isActive ? 'nav_items_active' : 'nav_items')} to="/home">Home</NavLink>
            <NavLink className={({ isActive }) => (isActive ? 'nav_items_active' : 'nav_items')} to="/about">About</NavLink>
            <NavLink className={({ isActive }) => (isActive ? 'nav_items_active' : 'nav_items')} to="/payment">Payment</NavLink>
        </div>
    </div>
  )
}

export default Nav
import React from "react";
import "./style.scss";

import { NavLink, Link } from "react-router-dom";
import { BiSolidDashboard } from "react-icons/bi";
import { IoTimerOutline } from "react-icons/io5";
import { MdOutlinePriceChange } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import { IoIosHelpCircleOutline } from "react-icons/io";
import FreePlanButton from "../freePlanButton";

function Navbar() {
  const NavActiveClass = ({ isActive }) => {
    return {
      color: isActive ? "#90A955" : "",
    };
  };
  return (
    <div className="navbar">
      <Link to="/">
        <div className="logo-div">
          <div className="logo"></div>

          <h1 className="logo-text">Agro Smart Hub</h1>
        </div>
      </Link>
      <ul>
        <NavLink to={"/"} style={NavActiveClass} className="active">
          <li className="nav-dashboard">
            <BiSolidDashboard className="all-icon" />
            <p>Dashboard</p>
          </li>
        </NavLink>
        <NavLink to={"/timer"} style={NavActiveClass}>
          <li>
            <IoTimerOutline className="Timer-icon all-icon" />
            <p>Timer</p>
          </li>
        </NavLink>
        {/* <NavLink to={"/pricing"} style={NavActiveClass}>
          <li>
            <MdOutlinePriceChange className="all-icon" />
            <p>Pricing</p>
          </li>
        </NavLink> */}
        <NavLink to={"/profile"} style={NavActiveClass}>
          <li>
            <CiUser className="all-icon" />
            <p>Profile</p>
          </li>
        </NavLink>
        <NavLink to={"/WhyUs"} style={NavActiveClass}>
          <li>
            <IoIosHelpCircleOutline className="all-icon" />
            <p>Why Us?</p>
          </li>
        </NavLink>
      </ul>
      <div className="show-data">
        <p className="show-data-text1 for-margin">This Month</p>
        <div className="data-show-div for-margin"></div>
        <p className="file-count for-margin">0/3 file used</p>
        <button className="upgrade-button for-margin">Upgrade</button>
      </div>
      <div className="Navuser-profile">
        <CiUser className="user-icon2" />
        <div className="inner-div">
          <p className="inner-text">User</p>
          <p className="inner-logout">
            <a href="#" alt="aff">
              Logout
            </a>
          </p>
        </div>
        <FreePlanButton classname="nav-freeplanbutton" />
      </div>
    </div>
  );
}

export default Navbar;

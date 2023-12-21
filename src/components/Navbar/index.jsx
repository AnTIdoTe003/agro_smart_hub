import React from 'react';
import "./style.scss";
import { NavLink } from 'react-router-dom';
import { BiSolidDashboard } from "react-icons/bi";
import { GoProjectSymlink } from "react-icons/go";
import { MdOutlinePriceChange } from "react-icons/md";
import { CiUser } from "react-icons/ci";



function Navbar() {
  return (
    <div className='navbar'>
      <div className='logo-div'>
        <div className='logo'></div>
        <h1 className='logo-text'>Agro Smart Hub</h1>
      </div>
      <ul>
        <NavLink to={"/"} className="active"><li className='dashboard'>
          <BiSolidDashboard className='all-icon' />
          <p>Dashboard</p>
        </li></NavLink>
        <NavLink to={"/home"}><li>
          <GoProjectSymlink className='all-icon' />
          <p>Project</p>
        </li>
        </NavLink>
        <li>
          <MdOutlinePriceChange className='all-icon' />
          <p>Pricing</p>
        </li>
        <li>
          <CiUser className='all-icon' />
          <p>Profile</p>
        </li>
      </ul>
      <div className='show-data'>
        <p className='show-data-text1 for-margin'>This Month</p>
        <div className='data-show-div for-margin'></div>
        <p className='file-count for-margin'>0/3 file used</p>
        <button className='upgrade-button for-margin'>Upgrade</button>
      </div>
      <div className='user-profile'>
        <CiUser className='user-icon2' />
        <div className='inner-div'>
          <p className='inner-text'>User</p>
          <p className='inner-logout'><a href='#' alt="aff">Logout</a></p>
        </div>
        <button className='freePlan-button'>Free Plan</button>
      </div>
    </div>
  )
}

export default Navbar;

import React from 'react';
import "./style.scss";
import FreePlanButton from '../../../components/DashboardComponents/freePlanButton';

function UserProfilePage() {
     return (
          <div className='user-profile'>
               <h1 className='profile-heading set-margin'>Profile</h1>
               <div className='userprofile-pic-div set-margin'>
                    <div className='user-profile-pic'></div>
                    <p className='User-name'>UserName</p>
                    <FreePlanButton classname="user-profile-button" />
               </div>
               <div className='user-information set-margin'>
                    <form action='#'>
                         <div className='Userinput-div'>
                              <label htmlFor='Full-Name'>Full Name</label>
                              <input type='text' name='Full-Name' id='FullName'
                                   placeholder="User Name" className="All-input"></input>
                         </div>
                         <div className='Userinput-div'>
                              <label htmlFor='Email'>Email</label>
                              <input type='text' name='Email' id='Email'
                                   placeholder="email223@gmail.com" className="All-input"></input>
                         </div>
                         <div className='Userinput-div'>
                              <label htmlFor='Plan'>Plan</label>
                              <input type='text' name='Plan' id='Plan'
                                   placeholder="Plan" className="All-input"></input>
                         </div>
                         <div className='Userinput-div'>
                              <label htmlFor='Password'>Password</label>
                              <input type='password' name='Password' id='password'
                                   placeholder="password" className="All-input"></input>
                         </div>
                    </form>
                    <button className='profile-button-cancle'>Cancel</button>
                    <button className='profile-button-SaveChanges'>Save Changes</button>
               </div>
          </div>
     )
}

export default UserProfilePage

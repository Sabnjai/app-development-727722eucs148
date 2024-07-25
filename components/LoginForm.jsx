import React, { useContext, useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import {Paper} from '@mui/material'
import '../assets/LoginForm.css';
import axios from 'axios';
import background from '../data/backGroundImg.mp4'
const LoginForm = ({ onClose }) => {;
  const [formData,setFormData] = useState(
    {
        useremail:"",
        userpassword:""
    }
  )
  
  const[emailError,setEmailError] = useState(false);
  const[passwordError,setPasswordError] = useState(false);
  const[fillAll,setFillAll] = useState(false);
  const handleSubmit = async(event)=>{
    event.preventDefault();
    let t = false;
    console.log(formData.useremail);
    console.log(formData.userpassword);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(formData.useremail.length==0 || formData.useremail.length==0)
    {
        setFillAll(true);
    }
    if(formData.useremail.length>0 && formData.useremail.length>0)
    {
        setFillAll(false);
    }
    if(!emailRegex.test(formData.useremail))
    {
        setEmailError(true);
    }
    if(emailRegex.test(formData.useremail))
    {
        setEmailError(false);
    }
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/;
    if(!passwordRegex.test(formData.userpassword))
    {
        setPasswordError(true);
    }
    if(passwordRegex.test(formData.userpassword))
    {
        setPasswordError(false);
    }
  }
  const handleChange = (event)=>{
    const {name,value} = event.target;
    setFormData(prevState=>({
        ...prevState,
        [name]:value
    }
    ))
  }
  return (
    <div className="main">
        <div className="background-video-container">
        <video autoPlay muted loop className="background-video">
            <source src={background} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        <div className="login-popup-content">
            <h1>STUDENT LOGIN</h1>
            <form onSubmit={handleSubmit}>
            <label>
                Email
                <input type="text" name="useremail" value={formData.useremail} onChange={handleChange} required/>
            </label>
                {emailError && <p style={{color:"red",fontSize:"12px"}}>Invalid email format.</p>}
            <label>
                Password
                <input type="password" name="userpassword" value={formData.userpassword} onChange={handleChange} required/>
            </label>
                {passwordError && <p style={{color:"red",fontSize:"12px"}}>Password must be at least 6 characters long and include one uppercase letter, one lowercase letter, one number, and one special character.</p>}
            {!emailError && !passwordError && !fillAll ? <Link to='/Landing'><button type='submit'>Login</button></Link> : <button type="submit">Login</button>}
            <p>New User ? <Link to='/Register'>Click here</Link> to Register</p>
            <p>Admin ? <Link to='/AdminLogin'>Click here</Link> to Login</p>
            <p>Office Staff ? <Link to='/StaffLogin'>Click here</Link> to Login</p>
            </form>
        </div>
        </div>
    </div>
  );
};

export default LoginForm;

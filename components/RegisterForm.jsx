import React, { useContext, useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import '../assets/RegisterForm.css';
import { Paper } from '@mui/material';
import background from '../data/backGroundImg.mp4';
const RegisterForm = ({ onClose }) => {
  const [name,setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [mobilenum, setMobileNum] = useState("");

  const[nameError,setNameError] = useState(false);
  const[emailError,setEmailError] = useState(false);
  const[passwordError,setPasswordError] = useState(false);
  const[confirmpasswordError,setConfirmPasswordError] = useState(false);

  const handleSubmit = async(event)=>{
    event.preventDefault();
    console.log(email);
    console.log(password);
    if(name.length<=3 || name.length>=20)
    {
        setNameError(true);
    }
    if(name.length>3 && name.length<20)
    {
      setNameError(false);
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email))
    {
        setEmailError(true);
    }
    if(emailRegex.test(email))
    {
        setEmailError(false);
    }
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/;
    if(!passwordRegex.test(password))
    {
        setPasswordError(true);
    }
    if(passwordRegex.test(password))
    {
        setPasswordError(false);
    }
  }
  const handleRegister = async(event)=>{
    
  }
  const navigate = useNavigate();
  return (
    <div className="main">
        <div className="background-video-container">
        <video autoPlay muted loop className="background-video">
          <source src={background} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="login-popup-content_r" elevation={24}>
            <h1>REGISTER</h1>
            <form onSubmit={handleSubmit}>
            <label>
                UserName
                <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)}/>
            </label>
                {nameError && <p style={{color:"red",fontSize:"12px"}}>length of the name must be between 4 and 20</p>}
            <label>
                Email
                <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
                {emailError && <p style={{color:"red",fontSize:"12px"}}>Invalid email format.</p>}
            <label>
                Password
                <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
                {passwordError && <p style={{color:"red",fontSize:"12px"}}>Password must be at least 6 characters long and include one uppercase letter, one lowercase letter, one number, and one special character.</p>}
            <label>
                Confirm Password
                <input type="password" name="confirmpassword" value={confirmpassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            </label>
            <label>
                Mobile Number
                <input type="text" name="mobilenum" value={mobilenum} onChange={(e) => setMobileNum(e.target.value)} />
            </label>
            <button type="submit" onClick={handleRegister}>Register</button>
            <p>Registered ? <Link to='/'>Click here</Link> to Login</p>
            </form>
        </div>
        </div>
    </div>
  );
};

export default RegisterForm;

import React, { useContext, useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import '../assets/LoginForm.css';
import { Paper } from '@mui/material';
import background from '../data/backGroundImg.mp4';
const StaffLogin = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const[nameError,setNameError] = useState(false);
  const[emailError,setEmailError] = useState(false);
  const[passwordError,setPasswordError] = useState(false);

  const handleSubmit = async(event)=>{
    event.preventDefault();
    console.log(email);
    console.log(password);
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
        <div className="login-popup-content" elevation={24}>
            <h1>STAFF LOGIN</h1>
            <form onSubmit={handleSubmit}>
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
                {!nameError && !emailError && !passwordError ? <Link to="Landing"><button type='submit'>Login</button></Link> : <button type="submit">Login</button>}
            </form>
        </div>
        </div>
    </div>
  );
};

export default StaffLogin;

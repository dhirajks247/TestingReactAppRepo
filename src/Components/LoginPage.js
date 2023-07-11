/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Logo from "../Assets/Logo.svg";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { LoginRounded } from "@mui/icons-material";


const LoginPage = () => {
  
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [registrationData, setRegistrationData] = useState({ name: '', email: '', password: '' });
  const [loginErrors, setLoginErrors] = useState({});
  const [registrationErrors, setRegistrationErrors] = useState({});

  const handleLoginFormToggle = () => {
    setShowLoginForm(!showLoginForm);
  };

  const handleRegistrationFormToggle = () => {
    setShowRegistrationForm(!showRegistrationForm);
    setShowLoginForm(!showLoginForm);

  };

  const handleLoginInputChange = (event) => {
    const { name, value } = event.target;
    setLoginData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleRegistrationInputChange = (event) => {
    const { name, value } = event.target;
    setRegistrationData((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleForgotPasswordClick = () => {
    // Handle forgot password logic here
    console.log('Forgot Password link clicked');
  };
  const resetLoginForm = () => {
    setLoginData({ email: '', password: '' });
    setLoginErrors({});
    setShowLoginForm(!showLoginForm);
  };

  const resetRegistrationForm = () => {
    setRegistrationData({ name: '', email: '', password: '' });
    setRegistrationErrors({});
    setShowRegistrationForm(!showRegistrationForm);

  };
  

  const handleLoginSubmit = (event) => {
    event.preventDefault();

    // Perform login form validation
    const errors = {};
    if (!loginData.email) {
      errors.email = 'Email required';
    }
    if (!loginData.password) {
      errors.password = 'Password is required';
    }

    if (Object.keys(errors).length > 0) {
      setLoginErrors(errors);
    } else {
      // Handle login logic here
      console.log('Login successful');
    }
  };

  const handleRegistrationSubmit = (event) => {
    event.preventDefault();

    // Perform registration form validation
    const errors = {};
    if (!registrationData.name) {
      errors.name = 'Name is required';
    }
    if (!registrationData.email) {
      errors.email = 'Email is required';
    }
    if (!registrationData.password) {
      errors.password = 'Password is required';
    }

    if (Object.keys(errors).length > 0) {
      setRegistrationErrors(errors);
    } else {
      // Handle registration logic here
      console.log('Registration successful');
    }
  };

  return (
    <nav>
      <div className="navbar-links-container">
        {/* other navigation links */}
        <button onClick={LoginPage.handleLoginFormToggle} className="primary-button">
          Login / Sign up
        </button>
      </div>
    </nav>
 );
};

export default LoginPage;


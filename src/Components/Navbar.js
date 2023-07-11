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
import LoginForm from './LoginPage';


const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
    },
    {
      text: "About",
      icon: <InfoIcon />,
    },
    {
      text: "Testimonials",
      icon: <CommentRoundedIcon />,
    },
    {
      text: "Contact",
      icon: <PhoneRoundedIcon />,
    },
    {
      text: "Cart",
      icon: <ShoppingCartRoundedIcon />,
    },
    {
      text: "Login",
      icon: <LoginRounded/>,
      
    },
  ];
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
      <div className="nav-logo-container">
        <img src={Logo} alt="" />
      </div>
      <div className="navbar-links-container">
        <a href="https://www.wikipedia.org/">Home</a>
        <a href="">About</a>
        <a href="">Courses</a>
        <a href="">Contact</a>
        <a href="">
          <BsCart2 className="navbar-cart-icon" />
        </a>
        </div>
      <div className="navbar-links-container">
        {/* other navigation links */}
        <button onClick={handleLoginFormToggle} className="primary-button">
          Login / Sign up
        </button>
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text}/>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>

      {showLoginForm && (
        <div className="login-form-overlay">
          <div className="login-form">
            <h2>Login</h2>
            <form onSubmit={handleLoginSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={loginData.email}
                  onChange={handleLoginInputChange}
                />
                {loginErrors.email && <span className="error">{loginErrors.email}</span>}
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={loginData.password}
                  onChange={handleLoginInputChange}
                />
                {loginErrors.password && <span className="error">{loginErrors.password}</span>}
              </div>
              <div className="form-group">
                <button className ="signup-button"type="submit">Login</button>
                <span style={{ margin: '10px' }}></span>
                <button className="signup-button" type="button" onClick={resetLoginForm}>Cancel</button>
              </div>
              <div className="form-group">
                <p>Don't have an account? <button className="signup-button" onClick={handleRegistrationFormToggle}>Sign up</button></p>
                <p><a href="#" onClick={handleForgotPasswordClick}>Forgot Password?</a></p>
              </div>
            </form>
          </div>
        </div>
      )}
      {showRegistrationForm && (
        <div className="registration-form-overlay">
          <div className="registration-form">
            <h2>Sign Up</h2>
            <form onSubmit={handleRegistrationSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={registrationData.name}
                  onChange={handleRegistrationInputChange}
                />
                {registrationErrors.name && <span className="error">{registrationErrors.name}</span>}
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={registrationData.email}
                  onChange={handleRegistrationInputChange}
                />
                {registrationErrors.email && <span className="error">{registrationErrors.email}</span>}
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={registrationData.password}
                  onChange={handleRegistrationInputChange}
                />
                {registrationErrors.password && <span className="error">{registrationErrors.password}</span>}
              </div>
              <div className="form-group">
                <button className="signup-button" type="submit">Sign Up</button>
                <span style={{ margin: '10px' }}></span>
                <button className="signup-cancel-button" type="button" onClick={resetRegistrationForm}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;


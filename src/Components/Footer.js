import React from "react";
import Logo from "../Assets/Logo.svg";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="" />
        </div>
        <div className="footer-icons">
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>About Us</span>
          <span>Help</span>
          <span>Share</span>
          <span>Carrers</span>
        </div>
        <div className="footer-section-columns">
          <span>91-99999-99999</span>
          <span>1@geekyants.com</span>
          <span>2@geekyants.com</span>
          <span>3@geekyants.com</span>
        </div>
        <div className="footer-section-columns">
          <span>T&C</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;

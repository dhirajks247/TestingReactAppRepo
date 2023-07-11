import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";
import {Routes, Route, useNavigate} from 'react-router-dom';

const Home = () => {
  
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
       
        <div className="home-text-section">
          <h1 className="primary-heading">
            Learn with the Geeks
          </h1>
          <p className="primary-text">
            Start Learning with us, dive into the world of testing.
          </p>
          <button onClick={""} className="secondary-button">
            Join Now <FiArrowRight />{" "}
          </button>
          
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;

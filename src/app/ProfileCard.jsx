// ProfileCard.js
import React from "react";
import "./globals.css";

const ProfileCard = () => {
  return (
    <div className="container">
        <div className="image"></div>
        <div className="profile-card dark:bg-zinc-900">
      <div className="text-data mt-20">
        <span className="name color-black dark:text-white">Shivaraj C M</span>
        <div className="job-container bg-white px-5 py-2 rounded-full">
        <span className="job bg-white rounded-md">Full Stack Developer</span>
        </div>
        
      </div>
      <div className="media-buttons">
        <a href="https://leetcode.com/Shivaraj_C_M/" className="link leetcode">
        <img
          src='images/leetcode.svg'
          alt='sql'
          style={{
            width: '35px', 
            height: '35px', 
            objectFit: 'contain',
          }}
        />
        </a>
        <a href="https://github.com/Shiv282" className="link github">
        <img
          src='images/github.svg'
          alt='sql'
          style={{
            width: '35px', 
            height: '35px', 
            objectFit: 'contain',
          }}
        />
        </a>
        <a href="https://twitter.com/ShivarajCM02" className="link twitter">
        <img
          src='images/twitter.svg'
          alt='sql'
          style={{
            width: '35px', 
            height: '35px', 
            objectFit: 'contain',
            borderRadius: '50%'
          }}
        />
        </a>
        <a href="https://www.hackerrank.com/profile/shivucm_8055" className="link hackerrank">
        <img
          src='images/hackerrank.svg'
          alt='sql'
          style={{
            width: '35px', 
            height: '35px', 
            objectFit: 'contain',
          }}
        />
        </a>
      </div>

    <div>
      <div className="analytics">
        <div className="data">
          <i className="bx bx-heart"></i>
          <span className="number mr-4 dark:text-white">Phone</span>
        </div>
        <div className="data">
          <i className="bx bx-message-rounded"></i>
          <span className="number dark:text-white">+91 9606631377</span>
        </div>
      </div>

      <div className="analytics">
        <div className="data">
          <i className="bx bx-heart"></i>
          <span className="number mr-6 dark:text-white">Email</span>
        </div>
        <div className="data">
          <i className="bx bx-message-rounded"></i>
          <span className="number dark:text-white">shivarajcm02@gmail.com</span>
        </div>
      </div>

      <div className="analytics">
        <div className="data">
          <i className="bx bx-heart"></i>
          <span className="number dark:text-white">Location</span>
        </div>
        <div className="data">
          <i className="bx bx-message-rounded"></i>
          <span className="number dark:text-white">Bengaluru</span>
        </div>
      </div>
    </div>

      <div className="buttons">
        <button className="button dark:bg-sky-400">Resume</button>
        <button className="button dark:bg-sky-400">Message</button>
      </div>
    </div>
    </div>
    
  );
};

export default ProfileCard;

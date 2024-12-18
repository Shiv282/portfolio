// ProfileCard.js
import React from "react";
import "./globals.css";

const ProfileCard = () => {
  const email = 'shivarajcm02@gmail.com';
  const subject = 'Contact Request';
  const body = 'Hi, I would like to get in touch with you regarding ';

  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    <div className="container">
        <div className="image bg-black w-48 h-48 rounded-full border border-white border-4 overflow-hidden flex justify-center items-center">
          <img src="temp.jpeg" alt="profile_icon" className="w-4/5 h-4/5 object-cover rounded-full"/>
        </div>
        <div className="profile-card dark:bg-zinc-900">
      <div className="text-data mt-20">
        <span className="name color-black dark:text-white">Shivaraj C M</span>
        <div className="job-container bg-white px-5 py-2 rounded-full">
        <span className="job bg-white rounded-md">Solutions Engineer</span>
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
        <a href="Shivaraj_C_M_Resume.pdf" className="button dark:bg-sky-400" target="_blank">Resume</a>
        <a href={gmailLink} className="button dark:bg-sky-400" target="_blank">Message</a>
      </div>
    </div>
    </div>
    
  );
};

export default ProfileCard;

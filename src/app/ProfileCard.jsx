// ProfileCard.js
import React from "react";
import "./globals.css";

const ProfileCard = () => {
  return (
    <div className="container">
        <div className="image"></div>
        <div className="profile-card">
      <div className="text-data mt-20">
        <span className="name color-black">CodingLab</span>
        <span className="job">YouTuber & Blogger</span>
      </div>
      <div className="media-buttons">
        <a href="#" className="link facebook">
          <i className="bx bxl-facebook"></i>
        </a>
        <a href="#" className="link twitter">
          <i className="bx bxl-twitter"></i>
        </a>
        <a href="#" className="link instagram">
          <i className="bx bxl-instagram"></i>
        </a>
        <a href="#" className="link youtube">
          <i className="bx bxl-youtube"></i>
        </a>
      </div>

    <div>
      <div class="analytics">
        <div class="data">
          <i class="bx bx-heart"></i>
          <span class="number">Phone</span>
        </div>
        <div class="data">
          <i class="bx bx-message-rounded"></i>
          <span class="number">+91 9606631377</span>
        </div>
      </div>

      <div class="analytics">
        <div class="data">
          <i class="bx bx-heart"></i>
          <span class="number">Email</span>
        </div>
        <div class="data">
          <i class="bx bx-message-rounded"></i>
          <span class="number">shivarajcm02@gmail.com</span>
        </div>
      </div>

      <div class="analytics">
        <div class="data">
          <i class="bx bx-heart"></i>
          <span class="number">Location</span>
        </div>
        <div class="data">
          <i class="bx bx-message-rounded"></i>
          <span class="number">Bengaluru</span>
        </div>
      </div>
    </div>

      <div className="buttons">
        <button className="button">Resume</button>
        <button className="button">Message</button>
      </div>
    </div>
    </div>
    
  );
};

export default ProfileCard;

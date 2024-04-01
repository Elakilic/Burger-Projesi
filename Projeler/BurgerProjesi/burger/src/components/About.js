import React from "react";
import BannerImage from "../fotoğraflar/banneryeni.jpg";
import "../styles/About.css";

export const About = () => {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${BannerImage})` }}
      ></div>
      <div className="aboutBottom">
        <h1>Hakkımızda</h1>
        <p>
          lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel corrupti
          culpa, numquam ut eaque maiores enim accusantium harum corporis totam,
          officiis assumenda voluptate facere aliquam quo dolor, dolorum
          dignissimos quas. lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel corrupti
          culpa, numquam ut eaque maiores enim accusantium harum corporis totam,
          officiis assumenda voluptate facere aliquam quo dolor, dolorum
          dignissimos quas. lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel corrupti
          culpa, numquam ut eaque maiores enim accusantium harum corporis totam,
          officiis assumenda voluptate facere aliquam quo dolor, dolorum
          dignissimos quas.
        </p>
      </div>
    </div>
  );
};

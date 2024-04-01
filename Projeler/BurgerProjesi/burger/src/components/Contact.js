import React from "react";
import BannerImage from "../fotoğraflar/banner.png";
import "../styles/Contact.css"

export const Contact = () => {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${BannerImage})` }}
      ></div>
      <div className="rightSide">
        <h1>Bİzimle İletişime Geçin...</h1>
        <form>
          <label>Ad Soyad</label>
          <input
            type="text"
            name="name"
            placeholder="Lütfen adınızı ve soyadınızı giriniz..."
          ></input>
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Lütfen email adresinizi giriniz..."
          ></input>
          <label>Mesajınız</label>
          <textarea
            rows="6"
            type="text"
            name="message"
            placeholder="Lütfen adınızı ve soyadınızı giriniz..."
          ></textarea>
        </form>
      </div>
    </div>
  );
};

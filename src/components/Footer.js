import React from "react";
import instagramIcon from "../Storage/Icons/instagram2.png";
import CVIcon from "../Storage/Icons/CV2.png";
import LinkedinIcon from "../Storage/Icons/linkedin2.png";
import '../App.css';

function Footer(props) {
  return (

    <footer className="footer">
    <div className="footer-content">
        <p className="Footer-text" style={{ height: "45px", position: "fixed", bottom: "30px", right: "30px" }}>Ciaran Kearney</p>
        <a href="https://www.instagram.com/kearmododragon/" target="_blank" rel="noopener noreferrer">
          <img
            className="Footer-icon"
            src={instagramIcon}
            alt="Instagram"
            style={{ width: "40px", height: "40px", position: "fixed", bottom: "10px", right: "10px" }}
          />
        </a>
        <a href="https://docs.google.com/document/d/1ayxaItR3ojyBvfQQWqcHQ73ov_Bm6-6t/export?format=pdf" target="_blank" rel="noopener noreferrer">
          <img
            className="Footer-icon"
            src={CVIcon}
            alt="CV"
            style={{ width: "40px", height: "40px", position: "fixed", bottom: "10px", right: "60px" }}
          />
        </a>
        <a href="https://www.linkedin.com/in/ciarankearney92/" target="_blank" rel="noopener noreferrer">
          <img
            className="Footer-icon"
            src={LinkedinIcon}
            alt="LinkedIn"
            style={{ width: "40px", height: "40px", position: "fixed", bottom: "10px", right: "110px" }}
          />
        </a>
        </div>
    </footer>
  );
}

export default Footer;

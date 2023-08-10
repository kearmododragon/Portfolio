import React from "react";
import instagramIcon from "../Storage/Icons/instagram2.png";
import LinkedinIcon from "../Storage/Icons/linkedin2.png";
import '../App.css';

function Footer(props) {
  return (

    <footer className="footer" style={{ background: "transparent", margin: 0, padding: 0}}>
      <div className="footer-content">
        <p className="Footer-text" style={{ height: "45px", position: "fixed", bottom: "30px", right: "30px" }}>Ciaran Kearney</p>
        <a href="https://www.instagram.com/kearmododragon/" target="_blank" rel="noopener noreferrer">
          <img
            className="Footer-icon"
            src={instagramIcon}
            alt="Instagram"
            style={{ width: "40px", height: "40px", position: "fixed", bottom: "10px", right: "30px" }}
          />
        </a>
        <a href="https://www.linkedin.com/in/ciarankearney92/" target="_blank" rel="noopener noreferrer">
          <img
            className="Footer-icon"
            src={LinkedinIcon}
            alt="LinkedIn"
            style={{ width: "40px", height: "40px", position: "fixed", bottom: "10px", right: "95px" }}
          />
        </a>
      </div>
    </footer>
  );
}

export default Footer;

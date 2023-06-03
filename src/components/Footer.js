import React from "react";
import instagramIcon from "../Storage/Icons/instagram.png";
import CVIcon from "../Storage/Icons/CV.png";
import LinkedinIcon from "../Storage/Icons/linkedin.png";

function Footer(props) {
  return (
    <section className="Footer">
      <a href="https://www.instagram.com/kearmododragon/" target="_blank" rel="noopener noreferrer">
        <img src={instagramIcon} alt="Instagram" />
      </a>
      <a href="../storage/docs/cv.pdf" target="_blank" rel="noopener noreferrer">
        <img src={CVIcon} alt="CV" />
      </a>
      <a href="https://www.linkedin.com/in/ciarankearney92/" target="_blank" rel="noopener noreferrer">
        <img src={LinkedinIcon} alt="LinkedIn" />
      </a>
    </section>
  );
}

export default Footer;

import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <ul>
          <li><a href="tel:2105555555">210-555-5555</a></li>
          <li><a href="#privacy">Privacy Policy</a></li>
          <li><a href="#careers">Careers</a></li>
          <li><a href="#ourstory">Our Story</a></li>
          <li><a href="#franchise">Franchise Opportunities</a></li>
        </ul>
      </div>
      <p>©2025 Furry Land™. All Rights Reserved. | Powered by ContentMassive</p>
    </footer>
  );
};

export default Footer;
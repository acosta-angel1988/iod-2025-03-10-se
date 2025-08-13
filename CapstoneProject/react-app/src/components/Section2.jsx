import React from 'react';
import Slideshow from './Slideshow';
import './Section2.css';

const Section2 = () => {
  return (
    <div className="section2">
      <div className="process">
        <h1>Are you Ready to <br></br>adopt a pet?</h1>
        <p>Let's get started. Search adoptable pets:</p>
        <input type="text" className="search" name="search" placeholder="Location"></input><br></br><br></br>
        <div class="dropdown">
          <button class="dropbtn">Find a Pet</button>
          <div class="dropdown-content">
            <a href="#">Find a Dog</a>
            <a href="#">Find a Cat</a>
          </div>
        </div><br></br><br></br>
        <button type="submit" class="submit-button">Search</button>
      </div>

      {/* Slideshow with images from /public/images */}
      <Slideshow />
    </div>
  );
};

export default Section2;
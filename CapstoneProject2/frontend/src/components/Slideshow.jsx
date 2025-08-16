import React, { useState, useEffect } from "react";
import "./Slideshow.css";

const images = [
  "https://placedog.net/800/300?id=1",
  "https://placekitten.com/800/300",
  "https://placedog.net/800/300?id=2",
  "https://placekitten.com/801/300"
];

const Slideshow = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slideshow-container">
      <img src={images[index]} alt="Slideshow" className="slideshow-image" />
    </div>
  );
};

export default Slideshow;
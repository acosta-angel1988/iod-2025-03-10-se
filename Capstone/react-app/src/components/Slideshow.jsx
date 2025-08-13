import React, { useState } from 'react';
import './Slideshow.css';

const slidesData = [
  { img: './Images/cat1.jpg', },
  { img: './Images/dog1.jpg', },
  { img: './Images/dog2.jpg' },
];

const Slideshow = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const nextSlide = () => setSlideIndex((prev) => (prev + 1) % slidesData.length);
  const prevSlide = () => setSlideIndex((prev) => (prev - 1 + slidesData.length) % slidesData.length);
  const setCurrentSlide = (index) => setSlideIndex(index);

  return (
    <div className="slideshow-container">
      {slidesData.map((slide, i) => (
        <div
          key={i}
          className="mySlides fade"
          style={{ display: i === slideIndex ? 'block' : 'none' }}
        >
          <div className="numbertext">{i + 1} / {slidesData.length}</div>
          <img src={slide.img} alt={`Slide ${i + 1}`} className="slide-image" />
          <div className="text">{slide.caption}</div>
        </div>
      ))}

      <a className="prev" onClick={prevSlide} style={{ cursor: 'pointer' }}>❮</a>
      <a className="next" onClick={nextSlide} style={{ cursor: 'pointer' }}>❯</a>

      <div style={{ textAlign: 'center' }}>
        {slidesData.map((_, i) => (
          <span
            key={i}
            className={`dot${i === slideIndex ? ' active' : ''}`}
            onClick={() => setCurrentSlide(i)}
            style={{ cursor: 'pointer' }}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
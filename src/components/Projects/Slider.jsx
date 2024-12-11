import React, { useState } from 'react';
import './Slider.css';

const Slider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };
  console.log(currentIndex);
  return (
    <div className="slider">
      <button className="slider-button prev" onClick={goToPrevSlide}>
        Prev
      </button>
      <div className="slider-images">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className={index === currentIndex ? 'slide active' : 'slide'}
          />
        ))}
      </div>
      <button className="slider-button next" onClick={goToNextSlide}>
        Next
      </button>
    </div>
  );
};

export default Slider;

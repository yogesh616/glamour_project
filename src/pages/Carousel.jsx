import React, { useState, useEffect } from 'react';
import './Carousel.css'; // Assuming you put the provided CSS in Carousel.css file

const Carousel = () => {
  const images = [
    'https://theinternationalglamourproject.com/wp-content/uploads/slider/cache/666a47e586083421f558bde4254acb47/Fashion-week-1-1920-1080-1.jpg',
    'https://theinternationalglamourproject.com/wp-content/uploads/slider/cache/c5641cf0a522f4761a491a990bb5b84e/Fashion-week-2-1920-1080.jpg',
    'https://theinternationalglamourproject.com/wp-content/uploads/2022/11/Fashion-week-3-1920-1080.jpg',
    'https://theinternationalglamourproject.com/wp-content/uploads/slider/cache/04c003a65cd7699b0a5b7e37844fb46b/Webseries-1-1920-1080.jpg',
    'https://theinternationalglamourproject.com/wp-content/uploads/slider/cache/952be5f0a744f3a44b439a1107f5b23d/Leadership-1-1920-1080.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [intervalId, setIntervalId] = useState(null); // To store the interval ID
  const speed = 5000; // Speed in milliseconds

  // Auto slide every 'speed' milliseconds
  useEffect(() => {
    const id = setInterval(() => {
      handleNext();
    }, speed);
    setIntervalId(id); // Store interval ID in state
    
    return () => clearInterval(id); // Cleanup interval on component unmount
  }, [currentIndex]);

  // Handle Next button click
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Handle Prev button click
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Clear interval when mouse enters, restart on mouse leave
  const handleMouseEnter = () => {
    if (intervalId) clearInterval(intervalId); // Clear existing interval
  };

  const handleMouseLeave = () => {
    const id = setInterval(() => {
      handleNext();
    }, speed); // Start the interval again
    setIntervalId(id); // Store the new interval ID
  };

  return (
    <div className="carousel" data-carousel="1" data-speed={speed}>
      <span
        className="carousel-control-left"
        onClick={handlePrev}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        &#10094;
      </span>
      <span
        className="carousel-control-right"
        onClick={handleNext}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        &#10095;
      </span>
      <div className="carousel-content" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`image ${index + 1}`}
            className="carousel-slide"
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;

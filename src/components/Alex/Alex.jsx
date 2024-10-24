import React, { useState, useEffect } from 'react';
import './Alex.css'
import image1 from '../../assets/image1.jpg';

const ImageSlider = () => {
  
  const images = [image1];
  const texts = [
    "Text for Image 1"
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []); // Empty dependency array

  return (
    <div className="image-alex">
      <img src={images[currentImage]} alt={`Slide ${currentImage + 1}`} />
      <div className="text-alex">
        {texts[currentImage]}
      </div>
    </div>
  );
};

export default ImageSlider;

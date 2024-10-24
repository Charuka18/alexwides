import React, { useState, useEffect } from 'react';
import './Home.css'
import image1 from '../../assets/image1.jpg';
import image2 from '../../assets/image2.jpg';
import image3 from '../../assets/image3.jpg';
import image4 from '../../assets/image4.jpg';

const ImageSlider = () => {
  
  const images = [image1, image2, image3, image4];
  const texts1 = [
    "extreme panoramic",
    "extreme panoramic",
    "extreme panoramic",
    "extreme panoramic"
  ];
  const texts2 = [
    "landscapes",
    "landscapes",
    "landscapes",
    "landscapes"
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []); // Empty dependency array

  return (
    <div className="image-slider">
      <img src={images[currentImage]} alt={`Slide ${currentImage + 1}`} />
      <div className="text-overlay1">
        {texts1[currentImage]}
      </div>
      <div className="text-overlay2">
        {texts2[currentImage]}
      </div>
    </div>
  );
};

export default ImageSlider;

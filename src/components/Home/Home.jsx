import React, { useState, useEffect } from 'react';
import './Home.css';
import image1 from '../../assets/image1.jpg';
import image2 from '../../assets/image2.jpg';
import image3 from '../../assets/image3.jpg';
import image4 from '../../assets/image4.jpg';


const ImageSlider = () => {
  
  const images = [
    image1,
    image2,
    image3,
    image4
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    // Set up the interval to change the image every second (1000 ms)
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000);

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, [images.length]); // Run effect on mount and when images change

  return (
  <div>
    
    <div className="image-slider">
      
      <img src={images[currentImage]} alt={`Slide ${currentImage + 1}`} />
      
    </div>
  </div>
  );
};

export default ImageSlider;

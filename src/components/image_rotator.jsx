import React, { useState, useEffect } from "react";
import { apple, google, discount } from "../assets";

function ImageRotator() {
  const imageArray = [apple, google, discount];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % imageArray.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [currentIndex, imageArray.length]);

  return <img id="myImage" src={imageArray[currentIndex]} alt="image" />;
}

export default ImageRotator;

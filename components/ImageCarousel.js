import React, { useState } from 'https://esm.sh/react@18.2.0';

function ImageCarousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="flex justify-center">
      <img
        src={images[currentIndex]}
        alt={`Image ${currentIndex + 1}`}
        className="rounded shadow-lg cursor-pointer max-w-full h-auto"
        onClick={handleClick}
      />
    </div>
  );
}

export default ImageCarousel;

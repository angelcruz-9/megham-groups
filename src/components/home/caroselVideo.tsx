import React, { useState, useEffect } from 'react';

interface VideoData {
  video: string;
  title: string;
  description: string;
}

interface CarouselVideoProps {
  data: VideoData[];
  timerInterval?: number; // default to 5 seconds if not specified
}

const CarouselVideo: React.FC<CarouselVideoProps> = ({ data, timerInterval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance carousel every few seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, timerInterval);
    return () => clearInterval(interval); // Clear interval on unmount
  }, [data.length, timerInterval]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const goToIndex = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-screen h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Video Section */}
      <video
        className="w-full h-full object-cover"
        src={data[currentIndex].video}
        autoPlay
        loop
        muted
      />

      {/* Overlay for Title and Description */}
      <div className="absolute bottom-8 left-8 bg-black bg-opacity-50 text-white p-4 rounded">
        <h2 className="text-2xl font-bold">{data[currentIndex].title}</h2>
        <p className="text-lg">{data[currentIndex].description}</p>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 text-white text-3xl bg-black bg-opacity-50 p-2 rounded-full"
      >
        ‹
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 text-white text-3xl bg-black bg-opacity-50 p-2 rounded-full"
      >
        ›
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 flex space-x-2">
        {data.map((_, index) => (
          <button
            key={index}
            onClick={() => goToIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-white' : 'bg-gray-400'
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default CarouselVideo;

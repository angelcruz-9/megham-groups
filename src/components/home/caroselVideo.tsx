import React, { useState, useEffect } from 'react';

interface VideoData {
  video: string;
  title: string;
  description: string;
}

interface CarouselVideoProps {
  data: VideoData[];
  timerInterval?: number; // default to 10 seconds if not specified
}

const CarouselVideo: React.FC<CarouselVideoProps> = ({ data, timerInterval = 10000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Auto-advance carousel every few seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, timerInterval);
    return () => clearInterval(interval); // Clear interval on unmount
  }, [data.length, timerInterval]);

  const handlePrevious = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
      setIsTransitioning(false);
    }, 500); // Transition duration
  };

  const handleNext = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
      setIsTransitioning(false);
    }, 500); // Transition duration
  };

  const goToIndex = (index: number) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsTransitioning(false);
    }, 500); // Transition duration
  };

  return (
    <div className="relative w-screen h-[92vh] flex items-center justify-center overflow-hidden bg-black">
      {/* Video Section */}
      <div
        className={`w-full h-full absolute transition-opacity duration-500 ease-in-out ${
          isTransitioning ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <video
          className="w-full h-[92vh] object-cover"
          src={data[currentIndex].video}
          autoPlay
          loop
          muted
        />
      </div>

      {/* Overlay for Title and Description */}
      <div
        className={`absolute bottom-14 left-44 bg-opacity-50 text-white p-4 rounded transition-transform duration-500 ease-in-out ${
          isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
        }`}
      >
        <h2 className="text-6xl font-bold pb-4 tracking-wider">{data[currentIndex].title}</h2>
        <p className="text-2xl w-2/4 tracking-wide">{data[currentIndex].description}</p>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrevious}
        className="absolute left-4 text-white text-6xl bg-opacity-50 p-2 cursor-pointer"
      >
        ‹
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 text-white text-6xl bg-opacity-50 p-2 cursor-pointer"
      >
        ›
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 flex space-x-2">
        {data.map((_, index) => (
          <button
            key={index}
            onClick={() => goToIndex(index)}
            className={`w-10 h-1 rounded-full ${
              index === currentIndex ? 'bg-white' : 'bg-gray-400'
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default CarouselVideo;

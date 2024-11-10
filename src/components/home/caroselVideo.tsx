import React, { useState, useEffect, useCallback } from 'react';

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

  // Use useCallback to memoize handleNext and handlePrevious functions
  const handlePrevious = useCallback(() => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
      setIsTransitioning(false);
    }, 500); // Transition duration
  }, [data.length]);

  const handleNext = useCallback(() => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
      setIsTransitioning(false);
    }, 500); // Transition duration
  }, [data.length]);

  const goToIndex = (index: number) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsTransitioning(false);
    }, 500); // Transition duration
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, timerInterval);
    return () => clearInterval(interval); // Clear interval on unmount
  }, [handleNext, timerInterval]); // Include handleNext in dependency array

  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Video Section */}
      <div
        className={`w-full h-full absolute transition-opacity duration-500 ease-in-out ${
          isTransitioning ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <video
          className="w-full h-full object-cover"
          src={`${process.env.PUBLIC_URL}${data[currentIndex].video}`}
          autoPlay
          loop
          muted
        />
      </div>

      {/* Overlay for Title and Description */}
      <div
        className={`absolute bottom-8 left-6 sm:left-10 md:left-20 lg:left-44 bg-opacity-50 text-white p-4 rounded transition-transform duration-500 ease-in-out ${
          isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
        }`}
      >
        <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold pb-2 sm:pb-4 tracking-wider">
          {data[currentIndex].title}
        </h2>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl w-5/6 sm:w-3/4 lg:w-2/4 tracking-wide">
          {data[currentIndex].description}
        </p>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrevious}
        className="absolute left-2 sm:left-4 text-white text-4xl sm:text-5xl lg:text-6xl bg-opacity-50 p-2 cursor-pointer"
      >
        ‹
      </button>
      <button
        onClick={handleNext}
        className="absolute right-2 sm:right-4 text-white text-4xl sm:text-5xl lg:text-6xl bg-opacity-50 p-2 cursor-pointer"
      >
        ›
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 flex space-x-2">
        {data.map((_, index) => (
          <button
            key={index}
            onClick={() => goToIndex(index)}
            className={`w-6 h-1 sm:w-8 sm:h-1 md:w-10 rounded-full ${
              index === currentIndex ? 'bg-white' : 'bg-gray-400'
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default CarouselVideo;

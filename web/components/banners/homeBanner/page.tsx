"use client"
import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HomepageBanner = () => {
  const slides = [
    {
      image: "/bgimage/1.jpeg",
      title: "Transform Your Fitness Journey",
      subtitle: "Unlimited Access to Premium Facilities",
      buttonText: "Join Now",
      overlay: " "
    },
    {
      image: "/bgimage/2.jpeg",
      title: "State-of-the-Art Equipment",
      subtitle: "Professional Training, Personalized Experience",
      buttonText: "Explore Memberships",
      overlay: ""
    },
    {
      image: "/bgimage/3.jpeg",
      title: "Group Classes & Personal Training",
      subtitle: "Achieve Your Goals Together",
      buttonText: "View Classes",
      overlay: ""
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]); 



  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000);
    return () => clearInterval(slideInterval);
  }, [nextSlide]);

  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div 
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            {/* Overlay */}
            <div className={`absolute inset-0 ${slide.overlay}`}></div>
          </div>

          {/* Content */}
          <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-4">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fadeIn">
                {slide.title}
              </h1>
              <p className="text-xl md:text-2xl mb-6 animate-fadeIn">
                {slide.subtitle}
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 transform hover:scale-105">
                {slide.buttonText}
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2  rounded-full p-2 z-20"
      >
        <ChevronLeft className="text-white w-8 h-8 hidden md:block" />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full p-2 z-20 "
      >
        <ChevronRight className="text-white w-8 h-8 md:block hidden" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HomepageBanner;
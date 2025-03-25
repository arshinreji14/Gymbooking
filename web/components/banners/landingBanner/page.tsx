"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { MoveRight, Dumbbell, Calendar, Trophy } from 'lucide-react';
import Link from 'next/link';

export default function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState(0);

  const onboardingSteps = [
    {
      icon: <Dumbbell className="w-16 h-16 text-blue-600 mx-auto" />,
      title: "Welcome to FitBook",
      description: "Your personal fitness scheduling companion. Book classes, track progress, and achieve your fitness goals.",
      backgroundImage: "/fitness-welcome.jpg",
      buttonText: "Get Started",
       buttonLink:""
    },
    {
      icon: <Calendar className="w-16 h-16 text-green-600 mx-auto" />,
      title: "Easy Class Booking",
      description: "Browse hundreds of fitness classes, from yoga to high-intensity training. Reserve your spot with just a few taps.",
      backgroundImage: "/class-booking.jpg",
      buttonText: "Next",
       buttonLink:""
    },
    {
      icon: <Trophy className="w-16 h-16 text-orange-600 mx-auto" />,
      title: "Track Your Progress",
      description: "Monitor your fitness journey, set personal goals, and stay motivated with our comprehensive tracking tools.",
      backgroundImage: "/progress-tracking.jpg",
      buttonText: "Create Account",
      buttonLink:"/signup"
    }
  ];

  const handleNextStep = () => {
    if (currentStep < onboardingSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Mobile & Desktop Background Image */}
      <div className="relative  w-full md:w-1/2 h-[40vh] md:h-screen"  >
      <Image src={`/bgimage/gymbg.jpg`} alt='' objectFit='cover' fill/>
      <div className="absolute inset-0  flex items-center justify-center text-center">
      
            <div className="text-white">
            
                <h1 className="text-3xl md:text-5xl font-bold ">Find the Best Gyms Near You</h1>
                <p className="mt-2 md:text-lg">Explore top-rated fitness centers in your city</p>
            </div>
            
        </div>
       
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

      {/* Content Section */}
      <div className="w-[23rem] md:w-1/2 bg-white flex flex-col justify-center p-6 md:p-12 relative rounded-lg shadow-2xl md:rounded-none ">
        <div className="max-w-md mx-auto w-full">
          {/* Icon */}
          <div className="mb-6">
            {onboardingSteps[currentStep].icon}
          </div>
          
          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            {onboardingSteps[currentStep].title}
          </h1>
          
          {/* Description */}
          <p className="text-gray-600 mb-8 text-lg">
            {onboardingSteps[currentStep].description}
          </p>
          
          {/* Navigation Buttons */}
          <div className="flex justify-between items-center space-x-4">
            {currentStep > 0 && (
              <button 
                onClick={() => setCurrentStep(currentStep - 1)}
                className="bg-gray-100 text-gray-700 px-6 py-3 rounded-full hover:bg-gray-200 transition-colors w-full md:w-auto"
              >
                Back
              </button>
            )}
            
            <Link href={onboardingSteps[currentStep].buttonLink}><button 
              onClick={handleNextStep}
              className="bg-blue-600 text-white px-8 py-3 rounded-full flex items-center justify-center space-x-2 hover:bg-blue-700 transition-colors w-full md:w-auto"
            >
              <span>{onboardingSteps[currentStep].buttonText}</span>
              <MoveRight className="w-5 h-5" />
            </button>
            </Link>
          </div>
          
          {/* Progress Indicators */}
          <div className="flex justify-center mt-8">
            {onboardingSteps.map((_, index) => (
              <div 
                key={index} 
                className={`w-3 h-3 mx-1 rounded-full ${
                  currentStep === index ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
     
    </div>
  );
}
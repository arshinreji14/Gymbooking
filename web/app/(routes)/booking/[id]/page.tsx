"use client";

import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Dumbbell, 
  Users, 
  Star, 
  Award, 
  CheckCircle 
} from 'lucide-react';

// Define types for better type safety
interface TimeSlot {
  time: string;
  available: boolean;
}

interface GymFeature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const BookingPage: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

  // Generate next 7 days for date selection
  const generateDateOptions = () => {
    const dates = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date();
      date.setDate(date.getDate() + i);
      dates.push(date);
    }
    return dates;
  };

  // Predefined time slots
  const timeSlots: TimeSlot[] = [
    { time: '06:00 AM - 07:00 AM', available: true },
    { time: '07:00 AM - 08:00 AM', available: true },
    { time: '08:00 AM - 09:00 AM', available: true },
    { time: '05:00 PM - 06:00 PM', available: false },
    { time: '06:00 PM - 07:00 PM', available: true },
    { time: '07:00 PM - 08:00 PM', available: true },
    { time: '08:00 PM - 09:00 PM', available: true }
  ];

  // Gym features
  const gymFeatures: GymFeature[] = [
    {
      icon: <Dumbbell className="w-6 h-6 text-blue-600" />,
      title: "State-of-the-Art Equipment",
      description: "Latest fitness equipment from top brands"
    },
    {
      icon: <Users className="w-6 h-6 text-green-600" />,
      title: "Group Classes",
      description: "Yoga, Zumba, HIIT, and more"
    },
    {
      icon: <Award className="w-6 h-6 text-purple-600" />,
      title: "Personal Training",
      description: "Customized fitness plans with expert trainers"
    }
  ];

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    setSelectedSlot(null);
  };

  const handleSlotSelect = (slot: string) => {
    setSelectedSlot(slot);
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden">
        {/* Gym Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Iron Paradise Fitness Center</h1>
              <div className="flex items-center space-x-2 mt-2">
                <MapPin className="w-5 h-5" />
                <span>123 Fitness Street, Workout City</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-yellow-400" />
              <span className="font-semibold">4.8 (250 Reviews)</span>
            </div>
          </div>
        </div>

        {/* Booking Section */}
        <div className="p-6">
          {/* Date Selection */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <Calendar className="mr-2 text-blue-600" /> Select Date
            </h2>
            <div className="flex space-x-2 overflow-x-auto pb-2">
              {generateDateOptions().map((date) => (
                <button
                  key={date.toISOString()}
                  onClick={() => handleDateSelect(date)}
                  className={`flex-shrink-0 p-3 rounded-lg border-2 text-center 
                    ${selectedDate && selectedDate.toDateString() === date.toDateString() 
                      ? 'border-blue-600 bg-blue-50 text-blue-600' 
                      : 'border-gray-200 hover:bg-gray-100'}`}
                >
                  <div className="font-semibold">{formatDate(date)}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Time Slot Selection */}
          {selectedDate && (
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <Clock className="mr-2 text-green-600" /> Select Time Slot
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {timeSlots.map((slot) => (
                  <button
                    key={slot.time}
                    onClick={() => handleSlotSelect(slot.time)}
                    disabled={!slot.available}
                    className={`p-3 rounded-lg border-2 text-center transition-all duration-300
                      ${selectedSlot === slot.time 
                        ? 'border-green-600 bg-green-50 text-green-600' 
                        : slot.available 
                          ? 'border-gray-200 hover:bg-gray-100 hover:border-blue-300' 
                          : 'bg-gray-100 text-gray-400 cursor-not-allowed'}`}
                  >
                    <div className="font-semibold">{slot.time}</div>
                    <div className="text-xs">
                      {slot.available ? 'Available' : 'Booked'}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Gym Features */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-4">Gym Features</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {gymFeatures.map((feature, index) => (
                <div 
                  key={index} 
                  className="bg-gray-50 p-4 rounded-lg flex items-start space-x-4 hover:shadow-md transition-all"
                >
                  {feature.icon}
                  <div>
                    <h3 className="font-semibold">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Book Now Button */}
          {selectedDate && selectedSlot && (
            <div className="mt-6">
              <button 
                className="w-full bg-blue-600 text-white py-3 rounded-lg 
                  hover:bg-blue-700 transition-colors flex items-center 
                  justify-center space-x-2 font-semibold"
              >
                <CheckCircle className="w-5 h-5" />
                <span>Book Your Slot</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
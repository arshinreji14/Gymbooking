'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { Clock, Users, Dumbbell, } from 'lucide-react';
import { BookingSlot, Gym } from '@/app/schema/gyms';
import { gymData } from '@/app/data/gyms';
import Image from 'next/image';

export default function GymBookingPage() {
  const params = useParams();
  const [gym, setGym] = useState<Gym | null>(null);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<BookingSlot | null>(null);
  const [selectedWorkout, setSelectedWorkout] = useState<string | null>(null);
  const [personalTrainer, setPersonalTrainer] = useState<boolean>(false);

  useEffect(() => {
    const foundGym = gymData.find(g => g.id === params.gymId);
    setGym(foundGym || null);
  }, [params.gymId]);

  if (!gym) return <div>Loading...</div>;

  const today = new Date().toISOString().split('T')[0];

  const handleBooking = () => {
    if (selectedSlot) {
      alert(`Booked slot:  ${selectedSlot.time}\nWorkout: ${selectedWorkout}\nTrainer: ${personalTrainer ? 'Yes' : 'No'}`);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 h-auto md:h-full mb-32">
      <h1 className="text-black text-4xl font-bold mt-20 mb-10 flex justify-center">Select Your Slot for Booking</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {/* Gym Details */}
        <div className="col-span-1">
      <h1 className="text-3xl font-bold mb-4">{gym.name}</h1>
      <div className="bg-white shadow-md rounded-lg p-4">
        {/* First Gym Image */}
        <Image
          src={gym.imageurl} 
          alt={gym.name} 
          width={500} 
          height={300} 
          className="w-full h-64 object-cover rounded-lg mb-4"
        />
        <h2 className="text-xl font-semibold">Location</h2>
        <p>{gym.address}, {gym.city}, {gym.state} {gym.zipCode}</p>
         <div className="mb-4">
                        <h3 className="font-semibold mb-2">Facilities</h3>
                        <div className="flex flex-wrap gap-2">
                          {gym.facilities.slice(0, 3).map((facility) => (
                            <span 
                              key={facility} 
                              className="flex items-center text-blue-600 px-2 py-1 rounded-full text-sm"
                            >
                              <Dumbbell className="mr-1 w-4 h-4" />
                              {facility}
                            </span>
                          ))}
                        </div>
                      </div>
<div className='flex justify-between px-4'>
        <h2 className="text-2xl font-bold mt-4">Price</h2>
        <h2 className="font-bold text-3xl text-green-500">₹{gym.membershipPrice}</h2>
        </div>
      </div>
    </div>


        {/* Date Selection */}
        <div className="col-span-1">
          <h2 className="text-2xl font-bold mb-4">Select Date</h2>
          <input 
            type="date" 
            className=" p-2 rounded-lg w-full border-2 text-black  bg-white" 
            min={today}
            onChange={(e) => setSelectedDate(e.target.value)} 
          />
        </div>

        {/* Available Slots Grid */}
        {selectedDate && (
          <div className="col-span-1">
            <h2 className="text-2xl font-bold mb-4">Available Slots</h2>
            <div className="grid grid-cols-2 gap-4">
              {gym.availableSlots
                .map((slot) => (
                  <div 
                    key={slot.id}
                    onClick={() => setSelectedSlot(slot)}
                    className={`bg-white shadow-md rounded-lg p-4 cursor-pointer transition hover:shadow-lg
                      ${selectedSlot?.id === slot.id ? 'border-2 border-blue-600' : ''}
                      ${slot.currentBookings >= slot.capacity ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    <div className="flex items-center justify-between font-bold">
                      <span className="flex items-center"><Clock className="text-green-600" /> {slot.time}</span>
                      <span className="flex items-center"><Users className="text-gray-600" /> {slot.currentBookings}/{slot.capacity}</span>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>

      {/* Workout Selection & Personal Trainer */}
      {selectedSlot && (
        <div className="mt-10 grid md:grid-cols-2 gap-8">
          {/* Workout Selection */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Choose Your Workout</h2>
            <div className="grid grid-cols-2 gap-4">
              {['Cardio', 'Chest', 'Legs', 'Back', 'Arms', 'Yoga'].map(workout => (
                <div
                  key={workout}
                  onClick={() => setSelectedWorkout(workout)}
                  className={`bg-white shadow-md rounded-lg p-4 cursor-pointer transition hover:shadow-lg
                    ${selectedWorkout === workout ? 'border-2 border-blue-600' : ''}`}
                >
                  <span className="flex items-center space-x-2 font-bold"><Dumbbell className="text-blue-600" /> <span>{workout}</span></span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Personal Trainer Selection */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Need a Personal Trainer?</h2>
            <div className="bg-white shadow-md rounded-lg p-6">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input 
                  type="checkbox" 
                  className="form-checkbox h-5 w-5 text-blue-600" 
                  checked={personalTrainer} 
                  onChange={() => setPersonalTrainer(!personalTrainer)}
                />
                <span className="text-lg">Yes, I want a personal trainer</span>
              </label>
            </div>
          </div>
        </div>
      )}

      {/* Confirm Booking Button */}
      {selectedWorkout && (
        <div className="mt-10">
          <button
            onClick={handleBooking}
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Confirm Booking
          </button>
        </div>
      )}
    </div>
  );
}

// src/app/gyms/[gymId]/booking/page.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { Calendar, Clock, Users } from 'lucide-react';
import { BookingSlot, Gym } from '@/app/schema/gyms';
import { gymData } from '@/app/data/gyms';

export default function GymBookingPage() {
  const params = useParams();
  const [gym, setGym] = useState<Gym | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<BookingSlot | null>(null);

  useEffect(() => {
    // In a real app, fetch from API
    const foundGym = gymData.find(g => g.id === params.gymId);
    setGym(foundGym || null);
    console.log(params.gymId);
    
  }, [params.gymId]);

  if (!gym) return <div>Loading...</div>;

  const handleSlotSelection = (slot: BookingSlot) => {
    setSelectedSlot(slot);
  };

  const handleBooking = () => {
    if (selectedSlot) {
      // Implement booking logic
      alert(`Booked slot: ${selectedSlot.date} at ${selectedSlot.time}`);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 h-full md:h-screen ">
         <h1 className='text-black text-4xl font-bold mt-20 mb-10 flex justify-center'>Select your slot for booking</h1>
      <div className="grid md:grid-cols-2 gap-8">
     
        {/* Gym Details */}
        <div>
          <h1 className="text-3xl font-bold mb-4">{gym.name}</h1>
          <div className="bg-white shadow-md rounded-lg p-6">
            <div className="mb-4">
              <h2 className="text-xl font-semibold">Location</h2>
              <p>{gym.address}, {gym.city}, {gym.state} {gym.zipCode}</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-2">Amenities</h2>
              <div className="flex flex-wrap gap-2">
                {gym.amenities.map((amenity) => (
                  <span 
                    key={amenity} 
                    className="bg-blue-50 text-blue-600 px-2 py-1 rounded-full text-sm"
                  >
                    {amenity}
                  </span>
                ))}
              </div>
              <div className="mb-4">
              <h2 className="text-xl font-semibold">Price</h2>
              <h2 className='font-bold text-3xl text-green-500 text-right pr-5'>Rs {gym.membershipPrice}</h2>
            </div>
            </div>
          </div>
        </div>

        {/* Booking Slots */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Available Slots</h2>
          <div className="space-y-4">
            {gym.availableSlots.map((slot) => (
              <div 
                key={slot.id}
                onClick={() => handleSlotSelection(slot)}
                className={`
                  bg-white shadow-md rounded-lg p-4 cursor-pointer 
                  transition hover:shadow-lg
                  ${selectedSlot?.id === slot.id ? 'border-2 border-blue-600' : ''}
                  ${slot.currentBookings >= slot.capacity ? 'opacity-50 cursor-not-allowed' : ''}
                `}
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <Calendar className="text-blue-600" />
                    <span>{slot.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="text-green-600" />
                    <span>{slot.time}</span>
                  </div>
                </div>
                <div className="flex justify-between mt-2">
                  <div className="flex items-center space-x-2">
                    <Users className="text-gray-600" />
                    <span>
                      {slot.currentBookings}/{slot.capacity} Booked
                    </span>
                  </div>
                  {slot.currentBookings >= slot.capacity && (
                    <span className="text-red-500">Fully Booked</span>
                  )}
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={handleBooking}
            disabled={!selectedSlot || selectedSlot.currentBookings >= selectedSlot.capacity}
            className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg 
              hover:bg-blue-700 transition
              disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {selectedSlot ? 'Confirm Booking' : 'Select a Slot'}
          </button>
        </div>
      </div>
    </div>
  );
}
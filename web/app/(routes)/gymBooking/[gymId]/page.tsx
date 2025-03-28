'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { Calendar, Clock, Users, Dumbbell, Wifi, ShowerHead } from 'lucide-react';
import { BookingSlot, Gym } from '@/app/schema/gyms';
import { gymData } from '@/app/data/gyms';

export default function GymBookingPage() {
  const params = useParams();
  const [gym, setGym] = useState<Gym | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<BookingSlot | null>(null);

  useEffect(() => {
    const foundGym = gymData.find(g => g.id === params.gymId);
    setGym(foundGym || null);
  }, [params.gymId]);

  if (!gym) return <div>Loading...</div>;

  const handleSlotSelection = (slot: BookingSlot) => {
    setSelectedSlot(slot);
  };

  const handleBooking = () => {
    if (selectedSlot) {
      alert(`Booked slot: ${selectedSlot.date} at ${selectedSlot.time}`);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 h-full md:h-screen">
      <h1 className="text-black text-4xl font-bold mt-20 mb-10 flex justify-center">
        Select Your Slot for Booking
      </h1>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Gym Details */}
        <div className="col-span-1">
          <h1 className="text-3xl font-bold mb-4">{gym.name}</h1>
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold">Location</h2>
            <p>{gym.address}, {gym.city}, {gym.state} {gym.zipCode}</p>
            <h2 className="text-xl font-semibold mt-4">Price</h2>
            <h2 className="font-bold text-3xl text-green-500">Rs {gym.membershipPrice}</h2>
          </div>
        </div>

        {/* Available Slots Grid */}
        <div className="col-span-1">
          <h2 className="text-2xl font-bold mb-4">Available Slots</h2>
          <div className="grid grid-cols-2 gap-4">
            {gym.availableSlots.map((slot) => (
              <div 
                key={slot.id}
                onClick={() => handleSlotSelection(slot)}
                className={`bg-white shadow-md rounded-lg p-4 cursor-pointer transition hover:shadow-lg
                  ${selectedSlot?.id === slot.id ? 'border-2 border-blue-600' : ''}
                  ${slot.currentBookings >= slot.capacity ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                <div className="flex items-center justify-between">
                  <span className="flex items-center"><Clock className="text-green-600" /> {slot.time}</span>
                  <span className="flex items-center"><Users className="text-gray-600" /> {slot.currentBookings}/{slot.capacity}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Date and Time Selection + Booking */}
        <div className="col-span-1">
          <h2 className="text-2xl font-bold mb-4">Select Date & Time</h2>
          <div className="bg-white shadow-md rounded-lg p-6">
            <div className="mb-4 flex items-center space-x-2">
              <Calendar className="text-blue-600" />
              <span>{selectedSlot ? selectedSlot.date : 'Select a slot'}</span>
            </div>
            <div className="mb-4 flex items-center space-x-2">
              <Clock className="text-green-600" />
              <span>{selectedSlot ? selectedSlot.time : 'Select a slot'}</span>
            </div>
            <button
              onClick={handleBooking}
              disabled={!selectedSlot || selectedSlot.currentBookings >= selectedSlot.capacity}
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {selectedSlot ? 'Confirm Booking' : 'Select a Slot'}
            </button>
          </div>
        </div>
      </div>

      {/* Facilities Section */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">Facilities</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {gym.amenities.map((amenity) => (
            <div key={amenity} className="flex items-center space-x-2 bg-gray-100 p-3 rounded-lg shadow">
              {amenity.includes('WiFi') && <Wifi className="text-blue-600" />}
              {amenity.includes('Shower') && <ShowerHead className="text-blue-600" />}
              {amenity.includes('Gym Equipment') && <Dumbbell className="text-blue-600" />}
              <span>{amenity}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

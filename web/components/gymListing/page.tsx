// src/app/gyms/page.tsx
'use client';

import React, { useState, useEffect } from 'react';

import Link from 'next/link';
import { MapPin, Dumbbell } from 'lucide-react';
import { Gym } from '@/app/schema/gyms';
import LocationSearch from '../locationSearch/page';

export default function GymListingPage() {
  const [gyms, setGyms] = useState<Gym[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchGyms = async (city?: string) => {
    setLoading(true);
    try {
      const response = await fetch(`/api/gyms${city ? `?city=${city}` : ''}`);
      const data = await response.json();
      setGyms(data);
    } catch (error) {
      console.error('Failed to fetch gyms', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGyms();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Find Your Gym</h1>
      
      <LocationSearch onSearch={fetchGyms} />

      {loading ? (
        <div className="text-center">Loading gyms...</div>
      ) : gyms.length === 0 ? (
        <div className="text-center text-gray-500">
          No gyms found. Try a different search.
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gyms.map((gym) => (
            <div 
              key={gym.id} 
              className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <h2 className="text-2xl font-semibold mb-4">{gym.name}</h2>
              
              <div className="flex items-center text-gray-600 mb-4">
                <MapPin className="mr-2 w-5 h-5" />
                {gym.address}, {gym.city}, {gym.state} {gym.zipCode}
              </div>

              <div className="mb-4">
                <h3 className="font-semibold mb-2">Facilities</h3>
                <div className="flex flex-wrap gap-2">
                  {gym.facilities.slice(0, 3).map((facility) => (
                    <span 
                      key={facility} 
                      className="flex items-center bg-blue-50 text-blue-600 px-2 py-1 rounded-full text-sm"
                    >
                      <Dumbbell className="mr-1 w-4 h-4" />
                      {facility}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-xl font-bold text-blue-600">
                  ${gym.membershipPrice}/month
                </span>
                <Link 
                  href={`/gymBooking/${gym.id}`}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  Book Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
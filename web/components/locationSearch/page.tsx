// src/components/LocationSearch.tsx
'use client';

import React, { useState } from 'react';
import { Search } from 'lucide-react';

interface LocationSearchProps {
  onSearch: (city: string) => void;
}

const LocationSearch: React.FC<LocationSearchProps> = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSearch = () => {
    onSearch(city);
  };

  return (
    <div className="flex items-center space-x-2 mb-6">
      <div className="relative flex-grow">
        <input 
          type="text" 
          placeholder="Search by city (e.g., New York)" 
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="w-full p-3 pl-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <Search 
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" 
        />
      </div>
      <button 
        onClick={handleSearch}
        className="bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition"
      >
        Search
      </button>
    </div>
  );
};

export default LocationSearch;
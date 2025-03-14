"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface Gym {
  id: number;
  name: string;
  image: string;
  dailyPrice: number;
  monthlyPrice: number;
}

interface LocationGyms {
  id: number;
  location: string;
  gyms: Gym[];
}

export default function GymList() {
  const [gyms, setGyms] = useState<LocationGyms[]>([]);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [selectedGyms, setSelectedGyms] = useState<Gym[]>([]);
  const [searchTerm, setSearchTerm] = useState(""); // For location search
  const router = useRouter();

  useEffect(() => {
    fetch("/api/gyms")
      .then((res) => res.json())
      .then((data) => setGyms(data));
  }, []);

  // Toggle location selection
  const handleLocationChange = (location: string) => {
    setSelectedLocations((prev) =>
      prev.includes(location) ? prev.filter((loc) => loc !== location) : [...prev, location]
    );
  };

  // Toggle gym selection
  const handleGymSelection = (gym: Gym) => {
    setSelectedGyms((prev) =>
      prev.some((g) => g.id === gym.id) ? prev.filter((g) => g.id !== gym.id) : [...prev, gym]
    );
  };

  return (
    <div className="container mx-auto p-6">

<div className="relative w-full h-[400px] bg-cover bg-center flex items-center justify-center text-white mb-10" style={{ backgroundImage: "url('/bgimage/gymbg.jpg')"}}>
        <div className=" bg-opacity-50 p-6 rounded-lg text-center">
            <h2 className="text-4xl font-bold mb-4">Access All Gyms in One Subscription</h2>
            <p className="text-lg mb-6">Enjoy unlimited access to top gyms across India with a single membership.</p>
            <button className="bg-indigo-400 text-black font-semibold py-2 px-6 rounded-lg shadow-lg hover:bg-indigo-700 transition">Subscribe Now</button>
        </div>
    </div>
      <h2 className="text-3xl font-bold mb-6 text-center">Select Locations & Gyms</h2>

      {/* Location Search */}
      <div className="flex justify-center mb-4">
        <input
          type="text"
          placeholder="Search location..."
          className="p-2 border rounded-lg w-full md:w-1/2 text-black"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Location Selection */}
      <div className="flex flex-wrap justify-center gap-3 mb-6">
        {gyms
          .filter((location) => location.location.toLowerCase().includes(searchTerm.toLowerCase()))
          .map((location) => (
            <button
              key={location.id}
              className={`px-4 py-2 rounded-lg border ${
                selectedLocations.includes(location.location) ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"
              }`}
              onClick={() => handleLocationChange(location.location)}
            >
              {location.location}
            </button>
          ))}
      </div>

      {/* Gym Listings - Grouped by Location */}
      <div className="space-y-8">
        {gyms
          .filter((location) => selectedLocations.includes(location.location))
          .map((location) => (
            <div key={location.id}>
              <h3 className="text-2xl font-semibold mb-4">{location.location} Gyms</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {location.gyms.map((gym) => (
                  <div key={gym.id} className="bg-white shadow-lg rounded-xl overflow-hidden relative">
                    <div className="relative h-56">
                      <Image src={gym.image || "/bgimage/gymbg.jpg"} alt={gym.name} layout="fill" objectFit="cover" />
                    </div>
                    <div className="p-4">
                      <h6 className="text-xl font-semibold text-gray-800">{gym.name}</h6>
                      <p className="text-gray-600">Daily Price: ₹{gym.dailyPrice}</p>
                      <p className="text-gray-600">Monthly Price: ₹{gym.monthlyPrice}</p>
                      <button
                        className={`mt-3 w-full px-4 py-2 rounded-md transition ${
                          selectedGyms.some((g) => g.id === gym.id)
                            ? "bg-green-600 text-white"
                            : "bg-gray-300 text-gray-800"
                        }`}
                        onClick={() => handleGymSelection(gym)}
                      >
                        {selectedGyms.some((g) => g.id === gym.id) ? "Selected" : "Select Gym"}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>

      {/* Subscribe to Selected Gyms */}
      {selectedGyms.length > 0 && (
        <div className="text-center mt-10">
          <button
            className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-700 transition text-lg"
            onClick={() => router.push(`/subscription?gyms=${selectedGyms.map((g) => g.id).join(",")}`)}
          >
            Subscribe to Selected Gyms ({selectedGyms.length})
          </button>
        </div>
      )}
    </div>
  );
}

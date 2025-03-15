"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface Gym {
  id: number;
  name: string;
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
  const [selectedLocation, setSelectedLocation] = useState("");

  useEffect(() => {
    fetch("/api/gyms")
      .then((res) => res.json())
      .then((data) => setGyms(data));
  }, []);
  const router = useRouter();
  return (
    <div className="container mx-auto p-5">
    {/* Select Dropdown */}
    <select
      className="border p-2 rounded w-full md:w-1/2 lg:w-1/3 mb-4 bg-white text-black"
      onChange={(e) => setSelectedLocation(e.target.value)}
    >
      <option value="">Select a location</option>
      {gyms.map((gym) => (
        <option key={gym.id} value={gym.location}>
          {gym.location}
        </option>
      ))}
    </select>

    {/* Gym List */}
    {selectedLocation && (
      <div>
        <h3 className="text-2xl font-semibold mb-4">{selectedLocation} Gyms</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {gyms
            .find((g) => g.location === selectedLocation)
            ?.gyms.map((gym) => (
              <div
                key={gym.id}
                className="relative flex flex-col my-6 bg-white shadow-lg border border-gray-200 rounded-lg w-full md:w-80 lg:w-96"
              >
                {/* Gym Image */}
                <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
                  <Image src="/bgimage/gymbg.jpg" alt="card-image" fill className="object-cover" />
                </div>

                {/* Gym Details */}
                <div className="p-4">
                  <h6 className="mb-2 text-gray-900 text-xl font-semibold">{gym.name}</h6>
                  <p className="text-gray-600 font-light">
                    The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona.
                  </p>
                  <p className="text-black mt-2">Daily Price: ₹{gym.dailyPrice}</p>
                  <p className="text-black">Monthly Price: ₹{gym.monthlyPrice}</p>
                </div>

                {/* Book Now Button */}
                <div className="px-4 pb-4">
                  <button
                    className="w-full rounded-md bg-indigo-600 py-2 px-4 text-center text-sm text-white transition-all shadow-md hover:bg-indigo-700 focus:bg-indigo-700"
                    type="button"
                    onClick={() => router.push(`/booking/${gym.id}`)}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    )}
  </div>
  );
}

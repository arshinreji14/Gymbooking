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

      <select
        className="border p-2 rounded w-full md:w-1/3 mb-4 bg-black"
        onChange={(e) => setSelectedLocation(e.target.value)}
      >
        <option value="">Select a location</option>
        {gyms.map((gym) => (
          <option key={gym.id} value={gym.location}>
            {gym.location}
          </option>
        ))}
      </select>

      {selectedLocation && (
        <div>
          <h3 className="text-2xl font-semibold mb-2">{selectedLocation} Gyms</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {gyms
              .find((g) => g.location === selectedLocation)
              ?.gyms.map((gym) => (
                <div key={gym.id} className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
                <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
                  <Image src="/bgimage/gymbg.jpg" alt="card-image" fill />
                </div>
                <div className="p-4">
                  <h6 className="mb-2 text-slate-800 text-xl font-semibold">
                  {gym.name}
                  </h6>
                  <p className="text-slate-600 leading-normal font-light">
                    The place is close to Barceloneta Beach and bus stop just 2 min by walk
                    and near to &quot;Naviglio&quot; where you can enjoy the main night life in
                    Barcelona.
                  </p>
                  <p className="text-black">Daily Price: ₹{gym.dailyPrice}</p>
                  <p className="text-black">Monthly Price: ₹{gym.monthlyPrice}</p>
                </div>
                <div className="px-4 pb-4 pt-0 mt-2">
                  <button className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button"  onClick={() => router.push(`/booking/${gym.id}`)}>
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

"use client";


import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface Gym {
  id: number;
  name: string;
  dailyPrice: number;
  monthlyPrice: number;
}

  
interface Location  {
    id: number;
    location: string;
    gyms: Gym[];
  };
export default function BookingPage() {
  const params = useParams(); 
  const router = useRouter();
  const id = params?.id as string;

  const [gym, setGym] = useState<Gym | null>(null);
  const [loading, setLoading] = useState(true);
  const [bookingType, setBookingType] = useState<"day" | "month">("day");
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [totalPrice, setTotalPrice] = useState<number | null>(null);

  // Fetch gym details from API
  useEffect(() => {
    async function fetchGym() {
      try {
        const response = await fetch(`/api/gyms`);
        if (!response.ok) throw new Error("Failed to fetch gyms");
  
        const gymData = await response.json();
  
        // Find the location that contains the selected gym
        const selectedLocation = gymData.find((location: Location) =>
          location.gyms.some((g) => g.id.toString() === id)
        );
  
        // Find the gym inside the selected location
        const selectedGym = selectedLocation
          ? selectedLocation.gyms.find((g:Gym) => g.id.toString() === id)
          : null;
  
        setGym(selectedGym || null);
      } catch (error) {
        console.error("Error fetching gym:", error);
      } finally {
        setLoading(false);
      }
    }
  
    if (id) fetchGym();
  }, [id]);
console.log(gym);

  useEffect(() => {
    if (!gym || !selectedDate) {
      setTotalPrice(null);
      return;
    }

    if (bookingType === "day" && endDate) {
      const days =
        Math.ceil((endDate.getTime() - selectedDate.getTime()) / (1000 * 60 * 60 * 24)) + 1;
      setTotalPrice(days * gym.dailyPrice);
    } else if (bookingType === "day") {
      setTotalPrice(gym.dailyPrice);
    } else if (bookingType === "month") {
      setTotalPrice(gym.monthlyPrice);
    }
  }, [selectedDate, endDate, bookingType, gym]);

  const handleBooking = () => {
    if (!selectedDate || !totalPrice) {
      alert("Please select a valid date.");
      return;
    }

    const bookingDetails =
      bookingType === "day" && endDate
        ? `From ${selectedDate.toDateString()} to ${endDate.toDateString()}`
        : `On ${selectedDate.toDateString()}`;

    alert(`Booking Confirmed for ${gym?.name}\n${bookingDetails}\nTotal Price: ₹${totalPrice}`);
    router.push("/");
  };

  if (loading) return <p className="text-center mt-10">Loading gym details...</p>;
  if (!gym) return <p className="text-center mt-10">Gym not found.</p>;

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">{gym.name}</h2>
      <p className="text-gray-600">Daily Price: ₹{gym.dailyPrice}</p>
      <p className="text-gray-600 mb-4">Monthly Price: ₹{gym.monthlyPrice}</p>

      <div className="mb-4">
        <label className="block mb-2">Select Booking Type:</label>
        <select
          className="w-full border p-2 rounded"
          value={bookingType}
          onChange={(e) => setBookingType(e.target.value as "day" | "month")}
        >
          <option value="day">One Day or Multiple Days</option>
          <option value="month">One Month</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block mb-2">Select Date:</label>
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          className="w-full border p-2 rounded"
          dateFormat="dd/MM/yyyy"
          minDate={new Date()}
        />
      </div>

      {bookingType === "day" && (
        <div className="mb-4">
          <label className="block mb-2">Select End Date (Optional for Multiple Days):</label>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            className="w-full border p-2 rounded"
            dateFormat="dd/MM/yyyy"
            minDate={selectedDate || new Date()}
          />
        </div>
      )}

      {totalPrice !== null && (
        <p className="text-lg font-semibold text-green-600 mb-4">Total Price: ₹{totalPrice}</p>
      )}

      <button className="w-full bg-blue-500 text-white py-2 rounded" onClick={handleBooking}>
        Confirm Booking
      </button>
    </div>
  );
}

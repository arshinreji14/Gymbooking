import { NextResponse } from "next/server";

const gyms = [
  {
    id: 101,
    location: "Mumbai",
    gyms: [
      { id: 1, name: "Mumbai Fitness Club", dailyPrice: 300, monthlyPrice: 2500 },
      { id: 2, name: "Marine Drive Gym", dailyPrice: 350, monthlyPrice: 2800 },
      { id: 3, name: "Bandra Strength Hub", dailyPrice: 400, monthlyPrice: 3200 },
    ],
  },
  {
    id: 102,
    location: "Delhi",
    gyms: [
      { id: 4, name: "Delhi Powerhouse", dailyPrice: 250, monthlyPrice: 2200 },
      { id: 5, name: "South Delhi Fitness", dailyPrice: 300, monthlyPrice: 2600 },
      { id: 6, name: "Connaught Place Gym", dailyPrice: 350, monthlyPrice: 3000 },
    ],
  },
  {
    id: 103,
    location: "Bangalore",
    gyms: [
      { id: 7, name: "Koramangala Fitness Zone", dailyPrice: 280, monthlyPrice: 2400 },
      { id: 8, name: "Indiranagar Gym Hub", dailyPrice: 320, monthlyPrice: 2700 },
      { id: 9, name: "Whitefield Strength Center", dailyPrice: 350, monthlyPrice: 3100 },
    ],
  },
  {
    id: 104,
    location: "Hyderabad",
    gyms: [
      { id: 10, name: "Banjara Hills Fitness", dailyPrice: 270, monthlyPrice: 2300 },
      { id: 11, name: "Hitech City Gym", dailyPrice: 300, monthlyPrice: 2600 },
      { id: 12, name: "Secunderabad Muscle Club", dailyPrice: 330, monthlyPrice: 2900 },
    ],
  },
  {
    id: 105,
    location: "Chennai",
    gyms: [
      { id: 13, name: "Marina Beach Gym", dailyPrice: 250, monthlyPrice: 2100 },
      { id: 14, name: "Anna Nagar Fitness", dailyPrice: 290, monthlyPrice: 2500 },
      { id: 15, name: "OMR Strength Hub", dailyPrice: 320, monthlyPrice: 2800 },
    ],
  },
  {
    id: 106,
    location: "Kochi",
    gyms: [
      { id: 16, name: "Kochi Fit Hub", dailyPrice: 260, monthlyPrice: 2200 },
      { id: 17, name: "Marine Drive Fitness", dailyPrice: 300, monthlyPrice: 2600 },
      { id: 18, name: "Ernakulam Powerhouse", dailyPrice: 340, monthlyPrice: 2900 },
    ],
  },
];

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const location = searchParams.get("location");
  const id = searchParams.get("id");

  if (id) {
    const filteredLocation = gyms.find((g) => g.id === parseInt(id));
    if (!filteredLocation) {
      return NextResponse.json({ message: "No gyms found for this location ID" }, { status: 404 });
    }
    return NextResponse.json(filteredLocation);
  }

  if (location) {
    const filteredLocation = gyms.find((g) => g.location.toLowerCase() === location.toLowerCase());
    if (!filteredLocation) {
      return NextResponse.json({ message: "No gyms found in this location" }, { status: 404 });
    }
    return NextResponse.json(filteredLocation);
  }

  return NextResponse.json(gyms);
}

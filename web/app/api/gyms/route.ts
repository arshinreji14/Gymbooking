// src/app/api/gyms/route.ts
import { gymData } from '@/app/data/gyms';
import { NextRequest, NextResponse } from 'next/server';


export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const city = searchParams.get('city');
  const name = searchParams.get('name');

  let filteredGyms = gymData;

  if (city) {
    filteredGyms = filteredGyms.filter(gym => 
      gym.city.toLowerCase().includes(city.toLowerCase())
    );
  }

  if (name) {
    filteredGyms = filteredGyms.filter(gym => 
      gym.name.toLowerCase().includes(name.toLowerCase())
    );
  }

  return NextResponse.json(filteredGyms);
}
// src/data/gyms.ts

import { Gym } from "../schema/gyms";


export const gymData: Gym[] =[
    {
      "id": "kochi-mgroad-4",
      "name": "Ultimate Fitness Center",
      "address": "18 MG Road",
      "city": "Kochi",
      "state": "Kerala",
      "zipCode": "682016",
      "amenities": ["24/7 Access", "Free Parking", "Sauna"],
      "facilities": ["Cardio Zone", "Strength Training", "CrossFit Area"],
      "membershipPrice": 55,
      "coordinates": { "lat": 9.9673, "lng": 76.2425 },
      "availableSlots": [
        { "id": "slot-1", "date": "2024-03-26", "time": "06:00 AM", "capacity": 30, "currentBookings": 18 },
        { "id": "slot-2", "date": "2024-03-26", "time": "07:30 AM", "capacity": 30, "currentBookings": 12 }
      ]
    },
    {
      "id": "kochi-kakkanad-5",
      "name": "Kakkanad Strength Arena",
      "address": "22 Infopark Road",
      "city": "Kochi",
      "state": "Kerala",
      "zipCode": "682030",
      "amenities": ["Swimming Pool", "Personal Training", "Yoga Classes"],
      "facilities": ["Weight Room", "Yoga Studio", "Spin Studio"],
      "membershipPrice": 60,
      "coordinates": { "lat": 10.015, "lng": 76.3419 },
      "availableSlots": [
        { "id": "slot-1", "date": "2024-03-26", "time": "05:30 AM", "capacity": 25, "currentBookings": 14 },
        { "id": "slot-2", "date": "2024-03-26", "time": "07:00 AM", "capacity": 25, "currentBookings": 10 }
      ]
    },
    {
      "id": "mumbai-bandra-6",
      "name": "Bandra Elite Gym",
      "address": "35 Carter Road",
      "city": "Mumbai",
      "state": "Maharashtra",
      "zipCode": "400050",
      "amenities": ["Steam Room", "Personal Training", "Calisthenics"],
      "facilities": ["Weightlifting Zone", "Functional Training", "Pilates Room"],
      "membershipPrice": 75,
      "coordinates": { "lat": 19.0667, "lng": 72.826 },
      "availableSlots": [
        { "id": "slot-1", "date": "2024-03-26", "time": "06:30 AM", "capacity": 40, "currentBookings": 25 },
        { "id": "slot-2", "date": "2024-03-26", "time": "08:00 AM", "capacity": 40, "currentBookings": 20 }
      ]
    },
    {
      "id": "delhi-cp-7",
      "name": "Connaught Place Power Gym",
      "address": "45 Janpath Road",
      "city": "Delhi",
      "state": "Delhi",
      "zipCode": "110001",
      "amenities": ["Corporate Memberships", "Spa", "Martial Arts"],
      "facilities": ["MMA Cage", "Boxing Ring", "Weight Room"],
      "membershipPrice": 80,
      "coordinates": { "lat": 28.6315, "lng": 77.2167 },
      "availableSlots": [
        { "id": "slot-1", "date": "2024-03-26", "time": "06:45 AM", "capacity": 35, "currentBookings": 18 },
        { "id": "slot-2", "date": "2024-03-26", "time": "08:30 AM", "capacity": 35, "currentBookings": 15 }
      ]
    },
    {
      "id": "bangalore-whitefield-8",
      "name": "Whitefield Fitness Hub",
      "address": "55 ITPL Main Road",
      "city": "Bangalore",
      "state": "Karnataka",
      "zipCode": "560066",
      "amenities": ["Group Classes", "Heated Yoga Studio", "Outdoor Training"],
      "facilities": ["Spin Studio", "Hot Yoga Room", "Weight Room"],
      "membershipPrice": 65,
      "coordinates": { "lat": 12.9716, "lng": 77.5946 },
      "availableSlots": [
        { "id": "slot-1", "date": "2024-03-26", "time": "06:00 AM", "capacity": 30, "currentBookings": 14 },
        { "id": "slot-2", "date": "2024-03-26", "time": "07:30 AM", "capacity": 30, "currentBookings": 12 }
      ]
    }, {
        "id": "mumbai-andheri-1",
        "name": "Andheri Fitness Arena",
        "address": "201 Lokhandwala Complex",
        "city": "Mumbai",
        "state": "Maharashtra",
        "zipCode": "400053",
        "amenities": ["24/7 Access", "Personal Training", "Free Parking"],
        "facilities": ["Cardio Zone", "Weight Room", "CrossFit Area"],
        "membershipPrice": 49,
        "coordinates": { "lat": 19.1304, "lng": 72.8328 },
        "availableSlots": [
          { "id": "slot-1", "date": "2024-03-26", "time": "06:00 AM", "capacity": 30, "currentBookings": 18 },
          { "id": "slot-2", "date": "2024-03-26", "time": "07:30 AM", "capacity": 30, "currentBookings": 10 }
        ]
      },
      {
        "id": "mumbai-bandra-2",
        "name": "Bandra Strength House",
        "address": "305 Linking Road",
        "city": "Mumbai",
        "state": "Maharashtra",
        "zipCode": "400050",
        "amenities": ["Swimming Pool", "Steam Room", "Nutrition Counseling"],
        "facilities": ["Olympic Pool", "Yoga Studio", "Sauna"],
        "membershipPrice": 69,
        "coordinates": { "lat": 19.0607, "lng": 72.8362 },
        "availableSlots": [
          { "id": "slot-1", "date": "2024-03-26", "time": "05:30 AM", "capacity": 25, "currentBookings": 15 },
          { "id": "slot-2", "date": "2024-03-26", "time": "07:00 AM", "capacity": 25, "currentBookings": 12 }
        ]
      },
      {
        "id": "mumbai-nariman-3",
        "name": "Nariman Point Powerhouse",
        "address": "401 Marine Drive",
        "city": "Mumbai",
        "state": "Maharashtra",
        "zipCode": "400021",
        "amenities": ["Heated Yoga", "Personal Training", "Massage Therapy"],
        "facilities": ["Hot Yoga Room", "Weight Room", "Functional Training"],
        "membershipPrice": 75,
        "coordinates": { "lat": 18.933, "lng": 72.826 },
        "availableSlots": [
          { "id": "slot-1", "date": "2024-03-26", "time": "06:45 AM", "capacity": 40, "currentBookings": 30 },
          { "id": "slot-2", "date": "2024-03-26", "time": "08:15 AM", "capacity": 40, "currentBookings": 20 }
        ]
      },
      {
        "id": "delhi-connaught-1",
        "name": "Connaught Place Fitness",
        "address": "110 Rajiv Chowk",
        "city": "Delhi",
        "state": "Delhi",
        "zipCode": "110001",
        "amenities": ["Free Wi-Fi", "Corporate Memberships", "Kickboxing Classes"],
        "facilities": ["Boxing Ring", "Treadmill Zone", "Strength Training"],
        "membershipPrice": 55,
        "coordinates": { "lat": 28.6315, "lng": 77.2167 },
        "availableSlots": [
          { "id": "slot-1", "date": "2024-03-26", "time": "06:00 AM", "capacity": 30, "currentBookings": 20 },
          { "id": "slot-2", "date": "2024-03-26", "time": "08:00 AM", "capacity": 30, "currentBookings": 8 }
        ]
      },
      {
        "id": "delhi-saket-2",
        "name": "Saket Elite Gym",
        "address": "202 Select Citywalk",
        "city": "Delhi",
        "state": "Delhi",
        "zipCode": "110017",
        "amenities": ["Sauna", "Free Parking", "Yoga Classes"],
        "facilities": ["Steam Room", "CrossFit Zone", "Weight Training"],
        "membershipPrice": 60,
        "coordinates": { "lat": 28.5263, "lng": 77.2192 },
        "availableSlots": [
          { "id": "slot-1", "date": "2024-03-26", "time": "05:30 AM", "capacity": 20, "currentBookings": 10 },
          { "id": "slot-2", "date": "2024-03-26", "time": "07:00 AM", "capacity": 20, "currentBookings": 15 }
        ]
      },
      {
        "id": "bangalore-indiranagar-1",
        "name": "Indiranagar Fit Club",
        "address": "42 100 Feet Road",
        "city": "Bangalore",
        "state": "Karnataka",
        "zipCode": "560038",
        "amenities": ["Yoga Classes", "Personal Training", "Heated Pool"],
        "facilities": ["Pilates Room", "Weight Training", "Cardio Theater"],
        "membershipPrice": 60,
        "coordinates": { "lat": 12.9791, "lng": 77.6408 },
        "availableSlots": [
          { "id": "slot-1", "date": "2024-03-26", "time": "06:30 AM", "capacity": 35, "currentBookings": 25 },
          { "id": "slot-2", "date": "2024-03-26", "time": "09:00 AM", "capacity": 35, "currentBookings": 15 }
        ]
      },
  ]
  
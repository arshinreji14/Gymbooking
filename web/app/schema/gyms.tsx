
export interface Gym {
    id: string;
    name: string;
    address: string;
    city: string;
    imageurl: string;
    state: string;
    zipCode: string;
    amenities: string[];
    facilities: string[];
    membershipPrice: number;
    coordinates: {
      lat: number;
      lng: number;
    };
    availableSlots: BookingSlot[];
  }
  
  export interface BookingSlot {
    id: string;
    time: string;
    capacity: number;
    currentBookings: number;
  }
  
  export interface GymBooking {
    gymId: string;
    userId: string;
    slotId: string;
    bookingDate: string;
  }
  
export interface SubscriptionPlan {
  name: string;
  price: number;
  features: string[];
}

export interface PaymentDetails {
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  name: string;
}
// src/types/index.ts
export interface SubscriptionPlan {
  id: string;
  name: string;
  price: number;
  features: string[];
  description: string;
}

export interface PaymentDetails {
  cardName: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
}
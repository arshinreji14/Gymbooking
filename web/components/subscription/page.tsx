// src/components/SubscriptionCard.tsx
'use client';

import React, { useState } from 'react';
import { SubscriptionPlan } from '@/app/schema/gyms';
import PaymentModal from '../payment/payment';

const subscriptionPlans: SubscriptionPlan[] = [
  {
    id: 'basic',
    name: 'Basic Membership',
    price: 29.99,
    description: 'Perfect for fitness beginners',
    features: [
      'Access to gym equipment',
      'Locker room facilities',
      'Basic fitness classes',
      'Fitness assessment'
    ]
  },
  {
    id: 'premium',
    name: 'Premium Membership',
    price: 49.99,
    description: 'Advanced fitness experience',
    features: [
      'All Basic features',
      'Personal trainer sessions',
      'Unlimited group classes',
      'Nutrition consultation',
      'Sauna and steam room access'
    ]
  },
  {
    id: 'elite',
    name: 'Elite Membership',
    price: 79.99,
    description: 'Ultimate fitness transformation',
    features: [
      'All Premium features',
      'Unlimited personal training',
      'Advanced body composition analysis',
      'Recovery and massage therapy',
      'Priority class booking',
      'Supplement and gear discounts'
    ]
  }
];

const SubscriptionCard: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<SubscriptionPlan | null>(null);

  const handleSubscribe = (plan: SubscriptionPlan) => {
    setSelectedPlan(plan);
  };

  const handleCloseModal = () => {
    setSelectedPlan(null);
  };

  return (
    <div className="container mx-auto px-4 py-8 h-full md:h-screen mt-20">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
        Choose Your Fitness Journey
      </h1>
      <div className="grid md:grid-cols-3 gap-6">
        {subscriptionPlans.map((plan) => (
          <div 
            key={plan.id} 
            className="bg-white shadow-lg rounded-xl p-6 transform transition-all hover:scale-105 hover:shadow-2xl"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">{plan.name}</h2>
            <p className="text-gray-600 mb-4">{plan.description}</p>
            <div className="text-4xl font-bold text-blue-600 mb-6">
              ${plan.price.toFixed(2)}/month
            </div>
            <ul className="space-y-3 mb-6">
              {plan.features.map((feature) => (
                <li 
                  key={feature} 
                  className="flex items-center text-gray-700"
                >
                  <svg 
                    className="w-5 h-5 mr-2 text-green-500" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M5 13l4 4L19 7" 
                    />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            <button 
              onClick={() => handleSubscribe(plan)}
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Subscribe Now
            </button>
          </div>
        ))}
      </div>

      {selectedPlan && (
        <PaymentModal
          plan={selectedPlan} 
          onClose={handleCloseModal} 
        />
      )}
    </div>
  );
};

export default SubscriptionCard;
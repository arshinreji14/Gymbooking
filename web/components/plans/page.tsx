import React from 'react';
import { CheckIcon,} from 'lucide-react';
import Link from 'next/link';

const GymPlans = () => {
  const plans = [
    {
      title: 'One Day Pass',
      price: '$15',
      features: [
        'Access to single gym location',
        'Full day usage (24 hours)',
        'Basic equipment access',
        'Locker room facilities'
      ],
      buttonText: 'Get Day Pass',
      buttionLink: '/gymBooking'
    },
    {
      title: 'All Gyms Membership',
      price: '$49/month',
      features: [
        'Access to all gym locations',
        'Unlimited daily visits',
        'Full equipment access',
        'Group fitness classes',
        'Personal trainer consultation',
        'Nutrition guidance'
      ],
      buttonText: 'Join Now',
      buttionLink: '/subscription'
    }
  ];

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Membership Plans
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {plans.map((plan) => (
            <div 
              key={plan.title} 
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl"
            >
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  {plan.title}
                </h3>
                <div className="text-4xl font-bold text-blue-600 mb-6">
                  {plan.price}
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature) => (
                    <li 
                      key={feature} 
                      className="flex items-center text-gray-700"
                    >
                      <CheckIcon 
                        className="w-5 h-5 text-blue-500 mr-3" 
                        strokeWidth={2.5}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
               
                <Link href={plan.buttionLink}><button 
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold 
                             hover:bg-blue-700 transition-colors duration-300 
                             focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                 {plan.buttonText}
                  
                </button></Link>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GymPlans;
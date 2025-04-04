import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const GymPlans = () => {
  const plans = [
    {
      title: 'One Day Pass',
      price: '₹199/day*',
      imageUrl:"/bgimage/2.jpeg",
      features: [
        'Access to single gym location',
      ],
      buttonText: 'Get Day Pass',
      link: '/gymBooking'
    },
    {
      title: 'All Gyms Pass',
      price: '₹ 1999/month*',
      imageUrl:"/bgimage/3.jpeg",
      features: [
        'Access to all gym locations',
        
      ],
      buttonText: 'Join Now',
      link: '/subscription'
    }
  ];

  return (
    <div className="p-4 md:p-8">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
        Membership Plans
      </h2>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
        {plans.map((plan) => (
          <Link href={plan.link} key={plan.title} className="w-full">
            <div className="bg-white rounded-xl shadow-lg cursor-pointer h-auto flex flex-row items-center overflow-hidden hover:shadow-xl transition-shadow duration-300">
              
              {/* Image Section - Always Left */}
              <div className="flex items-center justify-center w-1/3 ">
                <Image
                  src={plan.imageUrl}
                  alt={plan.title}
                  className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-full"
                  width={128}
                  height={128}
                />
              </div>

              {/* Content Section - Always Right */}
              <div className="w-2/3 px-4 py-6">
                <h3 className="text-lg md:text-xl font-bold mb-2">{plan.title}</h3>
                
                <ul className="space-y-1 mb-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm font-medium">
                      <span className="mr-2">✔</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <hr className="border-t-1 border-gray-600 my-4"></hr>
                <p className="text-sm md:text-xl font-bold text-black">{plan.price}</p>
              </div>

            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default GymPlans;
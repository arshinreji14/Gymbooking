import React from 'react';
import { Quote, Star } from 'lucide-react';
import Image from 'next/image';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      profession: 'Marketing Manager',
      quote: "This gym completely transformed my fitness journey. The all-access membership gives me the flexibility to work out at any location, and the facilities are always top-notch.",
      rating: 5,
      image: "/api/placeholder/150/150"
    },
    {
      name: 'Michael Chen',
      profession: 'Software Engineer',
      quote: "I love the convenience of the day pass. Perfect for my unpredictable schedule. The equipment is modern, clean, and well-maintained. Highly recommend!",
      rating: 4,
      image: "/api/placeholder/150/150"
    },
    {
      name: 'Emily Rodriguez',
      profession: 'Fitness Instructor',
      quote: "As a fitness professional, I'm impressed by the quality of equipment and the variety of group classes. The personal trainer consultation is a game-changer.",
      rating: 5,
      image: "/api/placeholder/150/150"
    }
  ];

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <Star 
        key={index} 
        className={`w-5 h-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`} 
        fill={index < rating ? '#fbbf24' : 'none'}
      />
    ));
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          What Our Members Say
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.name}
              className="bg-white rounded-xl shadow-lg p-6 transform transition-all hover:scale-105 hover:shadow-xl"
            >
              <div className="flex items-center mb-4">
                <Image
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-16 h-16 rounded-full mr-4 object-cover"
                 fill
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-500 text-sm">
                    {testimonial.profession}
                  </p>
                </div>
              </div>

              <div className="relative">
                <Quote className="absolute top-0 left-0 text-blue-200 w-8 h-8 -ml-4 -mt-2" />
                <p className="text-gray-600 italic mb-4 pl-4">
                &quot;{testimonial.quote}&quot;
                </p>
              </div>

              <div className="flex justify-center">
                {renderStars(testimonial.rating)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
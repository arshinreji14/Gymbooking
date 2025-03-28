'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Define the image type
interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  description: string;
}

// Sample gym images - replace with your actual images
const gymImages: GalleryImage[] = [
  {
    id: 1,
    src: "/bgimage/4.jpeg",
    alt: "Weight Training Area",
    description: "State-of-the-art weight room"
  },
  {
    id: 2,
    src: "/bgimage/5.jpeg",
    alt: "Cardio Zone",
    description: "Modern cardio machines"
  },
  {
    id: 3,
    src: "/bgimage/9.jpeg",
    alt: "Group Fitness Studio",
    description: "Spacious group class area"
  },
  {
    id: 4,
    src: "/bgimage/6.jpeg",
    alt: "Yoga Studio",
    description: "Peaceful yoga space"
  },
  {
    id: 5,
    src: "/bgimage/7.jpeg",
    alt: "Indoor Pool",
    description: "Climate-controlled swimming pool"
  },
  {
    id: 6,
    src: "/bgimage/8.jpeg",
    alt: "Cycling Studio",
    description: "High-energy cycling classes"
  }
];

const GymGallery: React.FC = () => {
  return (
    <section className="w-full py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Our Facility
        </h2>

        {/* Gallery Grid */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { 
              opacity: 1,
              transition: {
                delayChildren: 0.2,
                staggerChildren: 0.1
              }
            }
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {gymImages.map((image) => (
            <GalleryImageCard key={image.id} image={image} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const GalleryImageCard: React.FC<{ image: GalleryImage }> = ({ image }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1 }
      }}
      transition={{ duration: 0.3 }}
      className="relative overflow-hidden rounded-2xl shadow-lg group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <div className="relative w-full pt-[56.25%]"> {/* 16:9 Aspect Ratio */}
        <Image 
          src={image.src}
          alt={image.alt}
          fill
          className="absolute inset-0 object-cover transition-transform duration-300 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          quality={75}
          priority={false}
        />
      </div>

      {/* Overlay */}
      <div 
        className={`
          absolute  transition-opacity duration-300 
          ${isHovered ? 'bg-opacity-50' : 'bg-opacity-20'}
        `}
      >
        <div 
          className={`
            absolute bottom-0 left-0 right-0 p-4 text-white 
            transform transition-transform duration-300
            ${isHovered ? 'translate-y-0' : 'translate-y-full'}
          `}
        >
          <h3 className="text-xl font-bold">{image.alt}</h3>
          <p className="text-sm opacity-80">{image.description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default GymGallery;
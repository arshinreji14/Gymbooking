'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function LogoSplash() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 1500); // 2.5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showSplash && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white transition-opacity duration-500 ease-in-out">
          <div className="flex flex-col items-center justify-center">
            <Image 
              src="/logo/maxFIT.png" // Replace with your actual logo path
              alt="Logo" 
              width={300} 
              height={200} 
              className="max-w-[80%] max-h-[80%] object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}
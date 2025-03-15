"use client"
import Plans from '@/components/plans/page';
import React from 'react'
const Home = () => {   
  return (
    
<div>

    <header className="relative w-full h-64 md:h-96 bg-cover bg-center" style={{ backgroundImage:"url('/bgimage/gymbg.jpg')"}}>
        <div className="absolute inset-0  flex items-center justify-center text-center">
            <div className="text-white">
                <h1 className="text-3xl md:text-5xl font-bold ">Find the Best Gyms Near You</h1>
                <p className="mt-2 md:text-lg">Explore top-rated fitness centers in your city</p>
            </div>
        </div>
    </header>

<Plans/>
    
    
    {/* <LocationSearch/>  */}
   
</div>
  )
}

export default Home

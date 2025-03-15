import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
   
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center bg-cover" style={{ backgroundImage: "url('/bgimage/gymbg.jpg')"}}>
    <header className=" shadow w-full">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-xl lg:text-3xl font-bold text-white ">Welcome to GymBooking</h1>
      </div>
    </header>
    <main className="flex-grow flex flex-col justify-center items-center  text-center px-4 ">
      <h2 className="lg:text-6xl  text-3xl font-bold text-white mb-4 ">Stay Fit Anywhere, Anytime! </h2>
      <div className='text-center lg:text-2xl text-sm '>
      <p className="  text-white ">Traveling to a new city? No problem! Book your gym sessions daily in different cities with ease. </p>
      <p className=' text-white mx-8 '>Whether you&rsquo;re on a business trip or vacation, keep your fitness routine strong wherever you go.</p>
      <p className='  text-white mx-8 mb-8'> Find a gym near you and stay on track with your goals!</p>
      </div>
          <Link className="bg-black text-white px-6 py-3 rounded-md hover:bg-amber-50 hover:text-black" href="/home">Get Started</Link>
    </main>
   
  </div>
 
  )
}

export default Hero

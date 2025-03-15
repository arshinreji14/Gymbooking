import Link from "next/link";
import React from "react";

const Plans = () => {
  return (
    <div className="flex justify-center p-8 md:p-16">
    <div className="grid gap-6 md:grid-cols-2 max-w-4xl w-full">
      {/* Single Gym Plan */}
      <div className="group relative flex flex-col w-full text-gray-900 rounded-2xl border border-gray-300 text-center transition-all duration-500 p-6 sm:p-8 md:p-10 bg-gradient-to-r from-indigo-600 to-violet-600 hover:before:opacity-100 before:content-[''] before:absolute before:bg-indigo-800 before:w-full before:h-full before:top-0 before:left-0 before:rounded-2xl before:opacity-0 before:transition-all before:duration-500 before:z-0">
        <div className="mb-10 flex flex-col relative">
          <span className="font-manrope text-4xl sm:text-5xl lg:text-6xl font-semibold mb-2 text-white">
            Single
          </span>
          <span className="text-lg sm:text-xl text-gray-300">Access to a Single Gym</span>
          <ul className="list-disc text-white text-sm sm:text-base font-bold space-y-4 pt-5 text-left px-6 sm:px-10">
            <li>One Day Pass</li>
            <li>One Week Pass</li>
            <li>One Month Membership</li>
            <li>Single Gym</li>
          </ul>
        </div>
        <Link
          href="/booking"
          className="relative py-2.5 px-5 bg-white shadow-sm rounded-full transition-all duration-500 text-base sm:text-lg text-indigo-600 font-semibold text-center w-fit mx-auto"
        >
          Choose Plan
        </Link>
      </div>

      {/* Multiple Gyms Plan */}
      <div className="group relative flex flex-col w-full text-gray-900 rounded-2xl border border-gray-300 text-center transition-all duration-500 p-6 sm:p-8 md:p-10 bg-gradient-to-r from-indigo-600 to-violet-600 hover:before:opacity-100 before:content-[''] before:absolute before:bg-indigo-800 before:w-full before:h-full before:top-0 before:left-0 before:rounded-2xl before:opacity-0 before:transition-all before:duration-500 before:z-0">
        <div className="mb-10 flex flex-col relative">
          <span className="font-manrope text-4xl sm:text-5xl lg:text-6xl font-semibold mb-2 text-white">
            Multiple
          </span>
          <span className="text-lg sm:text-xl text-gray-300">Access to Multiple Gyms</span>
          <ul className="list-disc text-white text-sm sm:text-base font-bold space-y-4 pt-5 text-left px-6 sm:px-10">
            <li>Single plan, multiple gyms</li>
            <li>Select your favorite gyms</li>
            <li>For Hybrid Workers</li>
            <li>Multiple Gyms</li>
          </ul>
        </div>
        <Link
          href="/multyBooking"
          className="relative py-2.5 px-5 bg-white shadow-sm rounded-full transition-all duration-500 text-base sm:text-lg text-indigo-600 font-semibold text-center w-fit mx-auto"
        >
          Choose Plan
        </Link>
      </div>
    </div>
  </div>
  );
};

export default Plans;

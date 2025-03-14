import Link from "next/link";
import React from "react";

const Plans = () => {
  return (
    <div className="flex space-x-4 p-20 ">
      <div className="group relative flex flex-col mx-auto w-full max-w-sm text-gray-900 rounded-2xl border border-solid border-gray-300 text-center transition-all duration-500 p-6 xl:p-12 bg-gradient-to-r from-indigo-600 to-violet-600 hover:before:opacity-100 before:contents[' '] before:absolute before:bg-indigo-800 before:w-full before:h-full before:top-0 before:left-0 before:rounded-2xl before:opacity-0 before:transition-all before:duration-500 before:z-0">
       
        <div className="mb-20 flex flex-col relative">
          <span className="font-manrope text-6xl font-semibold mb-2 text-white">
          Single
          </span>
          <span className="text-xl text-gray-300">Access to a Single Gym </span>
          <ul className="list-disc text-white text-sm font-bold space-y-4 pt-5 text-left px-10">
  <li >One Day Pass</li>
  <li >One Week Pass</li>
  <li >One Month Membership</li>
  <li >Single Gym</li>
</ul>
        </div>
        <Link
          href="/booking"
          className="relative py-2.5 px-5 bg-white shadow-sm rounded-full transition-all duration-500 text-base text-indigo-600 font-semibold text-center w-fit mx-auto"
        >
          Choose Plan
        </Link>
      </div>
      <div className="group relative flex flex-col mx-auto w-full max-w-sm text-gray-900 rounded-2xl border border-solid border-gray-300 text-center transition-all duration-500 p-6 xl:p-12 bg-gradient-to-r from-indigo-600 to-violet-600 hover:before:opacity-100 before:contents[' '] before:absolute before:bg-indigo-800 before:w-full before:h-full before:top-0 before:left-0 before:rounded-2xl before:opacity-0 before:transition-all before:duration-500 before:z-0">
        <div className="mb-20 flex flex-col relative">
          <span className="font-manrope text-6xl font-semibold mb-2 text-white">
          Multiple
          </span>
          <span className="text-xl text-gray-300">Access to Multiple  Gym</span>
          <ul className="list-disc text-white text-sm font-bold space-y-4 pt-5 text-left px-10">
  <li >  Single plan multiple gyms</li>
  <li >  Select your favorite gyms</li>
  <li > For Hybrid Workers</li>
  <li >Multiple Gyms</li>
</ul>
        </div>
        <Link
          href="/multyBooking"
          className="relative py-2.5 px-5 bg-white shadow-sm rounded-full transition-all duration-500 text-base text-indigo-600 font-semibold text-center w-fit mx-auto"
        >
          Choose Plan
        </Link>
      </div>
    </div>
  );
};

export default Plans;

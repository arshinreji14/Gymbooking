import Link from 'next/link'
import React from 'react'

const Registration = () => {
  return (
    
    <div className='items-center justify-items-center min-h-screen p-8 pb-20 gap-16 bg-cover'style={{ backgroundImage: "url('/bgimage/gymbg.jpg')"}}>
    
        <div id="register" className="w-full max-w-lg p-12 mt-10 space-y-8 bg-white shadow-xl rounded-2xl">
            <h2 className="text-3xl font-bold text-center text-gray-900">Register</h2>
            <form action="#" method="POST" className="space-y-6">
                <div>
                    <label className="block text-lg font-medium text-gray-700">Full Name</label>
                    <input type="text" className="w-full px-5 py-3 mt-2 text-lg text-black border rounded-lg focus:ring-blue-500 focus:border-blue-500" placeholder="Enter your full name" required />
                </div>
                <div>
                    <label className="block text-lg font-medium text-gray-700">Email</label>
                    <input type="email" className="w-full px-5 py-3 mt-2 text-lg text-black border rounded-lg focus:ring-blue-500 focus:border-blue-500" placeholder="Enter your email" required />
                </div>
                <div>
                    <label className="block text-lg font-medium text-gray-700">Password</label>
                    <input type="password" className="w-full px-5 py-3 mt-2 text-lg text-black border rounded-lg focus:ring-blue-500 focus:border-blue-500" placeholder="Create a password" required />
                </div>
                <button type="submit" className="w-full px-5 py-3 text-lg font-bold text-blue-600 bg-white border border-blue-600 rounded-lg hover:bg-gray-200">Register</button>
            </form>
            <p className="text-lg text-center text-gray-600">Already have an account? <Link href="/login" className="text-blue-600 hover:underline">Sign in here</Link></p>
        </div>
        </div>
  )
}

export default Registration

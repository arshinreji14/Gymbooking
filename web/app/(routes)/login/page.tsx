import Link from 'next/link'
import React from 'react'

const Login = () => {
  return (
    
    <div className='items-center justify-items-center min-h-screen p-8 pb-20 gap-16 bg-cover'style={{ backgroundImage: "url('/bgimage/gymbg.jpg')"}}>
   <div className="w-full max-w-lg p-12 space-y-8 bg-white  justify-items-center items-center shadow-xl rounded-2xl">
        <h2 className="text-3xl font-bold text-center text-gray-900">Sign In</h2>
        <form action="#" method="POST" className="space-y-6">
            <div>
                <label className="block text-lg font-medium text-gray-700">Email</label>
                <input type="email" className="w-full px-5 py-3 mt-2 text-lg border rounded-lg focus:ring-blue-500 focus:border-blue-500" placeholder="Enter your email" required />
            </div>
            <div>
                <label className="block text-lg font-medium text-gray-700">Password</label>
                <input type="password" className="w-full px-5 py-3 mt-2 text-lg border rounded-lg focus:ring-blue-500 focus:border-blue-500" placeholder="Enter your password" required />
            </div>
            <div className="flex items-center justify-between">
                <label className="flex items-center">
                    <input type="checkbox" className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                    <span className="ml-2 text-lg text-gray-600">Remember me</span>
                </label>
                <a href="#" className="text-lg text-blue-600 hover:underline">Forgot password?</a>
            </div>
            <button type="submit" className="w-full px-5 py-3 text-lg font-bold text-blue-600 bg-white border border-blue-600 rounded-lg hover:bg-gray-200">Sign In</button>
        </form>
        <p className="text-lg text-center text-gray-600">Don&lsquo;t have an account? <Link href="/registration" className="text-blue-600 hover:underline">Register here</Link></p>
    </div>
    </div>
  )
}

export default Login

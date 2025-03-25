"use client"
import HomepageBanner from '@/components/banners/homeBanner/page';
import GymPlans from '@/components/plans/page';
import Testimonials from '@/components/testimonials/page';
import React from 'react'
const Home = () => {   
  return (
<div>
   <HomepageBanner/>
<GymPlans/> 
<Testimonials/>      
</div>
  )
}

export default Home

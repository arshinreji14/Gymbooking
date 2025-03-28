import HomepageBanner from '@/components/banners/homeBanner/page'
import GallerySection from '@/components/gallery/gallery'
import GymPlans from '@/components/plans/page'
import Testimonials from '@/components/testimonials/page'
import React from 'react'

const Home = () => {
  return (
    <div>
      <HomepageBanner/>
      <GymPlans/>
      <GallerySection/>
      <Testimonials/>
    </div>
  )
}

export default Home

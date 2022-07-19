import React from 'react'
import { Services, Contact, FeaturedProduct, Hero } from '../components/index'

function HomePage() {
  return (
    <div className='HomePage'>
      <Hero />
      <FeaturedProduct />
      <Services />
      <Contact />
    </div>
  )
}

export default HomePage

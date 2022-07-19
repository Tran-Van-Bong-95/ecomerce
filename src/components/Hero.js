import React from 'react'
import { Link } from 'react-router-dom'
import image from '../assets/hero-bcg.jpeg'
import image1 from '../assets/hero-bcg-2.jpeg'
import { links } from '../utils/constant'
function Hero() {
  return (
    <div className='Hero'>
      <div className='main_content'>
        <h1>Design Your Comfort Zone</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at
          sed omnis corporis doloremque possimus velit! Repudiandae nisi odit,
          aperiam odio ducimus, obcaecati libero et quia tempora excepturi quis
          alias?
        </p>

        <Link to='/product'>
          {' '}
          <button>SHOP NOW</button>
        </Link>
      </div>

      <div className='image_section'>
        <img src={image} alt='should_load' />
        <img src={image1} alt='image1' />
      </div>
    </div>
  )
}

export default Hero

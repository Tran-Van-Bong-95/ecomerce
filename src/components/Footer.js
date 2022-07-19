import React from 'react'

function Footer() {
  const year = new Date()
  return (
    <div className='Footer'>
      <p>
        @ {year.getFullYear()} <span>ComfySloth</span>
      </p>
      <p> All rights reserved</p>
    </div>
  )
}

export default Footer

import React from 'react'
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'
function Stars({ stars, reviews }) {
  const array = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5
    if (stars > number) {
      return <BsStarFill />
    }
    if (stars > index) {
      return <BsStarHalf />
    }
    return <BsStar />
  })

  return (
    <div className='Stars'>
      {array.map((item) => item)}
      <span> {reviews} reviews</span>
    </div>
  )
}

export default Stars

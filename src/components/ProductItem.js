import React from 'react'
import { formatPrice } from '../utils/helper'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function ProductItem({ image, name, price, id }) {
  console.log(id)
  return (
    <div className='ProductItem'>
      <div className='image'>
        <img src={image} alt='' />
        <div className='animation-hover'>
          <Link to={`/SinglePage/${id}`} className='link'>
            <FaSearch />
          </Link>
        </div>
      </div>
      <div className='content'>
        <span>{name}</span>
        <span>{formatPrice(price)}</span>
      </div>
    </div>
  )
}

export default ProductItem

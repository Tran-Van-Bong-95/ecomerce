import React from 'react'
import { useGlobalProduct } from '../context/ProductContext'
import { ProductItem } from '../components/index'
import { Link } from 'react-router-dom'
function FeaturedProduct() {
  const { featured_products } = useGlobalProduct()
  return (
    <div className='FeaturedProduct'>
      <div className='center-div'>
        <div className='title'>
          <h1>Featured Products</h1>
          <div className='underline'></div>
        </div>

        <div>
          {featured_products.slice(0, 3).map((item, index) => {
            return <ProductItem {...item} key={index} />
          })}
        </div>
      </div>

      <Link to='/product'>
        {' '}
        <button>all products</button>
      </Link>
    </div>
  )
}

export default FeaturedProduct

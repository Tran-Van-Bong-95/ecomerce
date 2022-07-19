import React from 'react'
import { useGlobalProduct } from '../context/ProductContext'
function PageHero({ title }) {
  const { products } = useGlobalProduct()

  return (
    <div className='pagehero'>
      <span>HOME</span>
      {` /  ${products.length == 0 ? `products /` : ''} ${title}`}
    </div>
  )
}

export default PageHero

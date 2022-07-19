import React from 'react'
import { ProductItem } from '../components'

function GridView({ products }) {
  return (
    <div className='GridView'>
      {products.map((item) => {
        return <ProductItem {...item} key={item.id} />
      })}
    </div>
  )
}

export default GridView

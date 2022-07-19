import React from 'react'
import { useFilterGlobal } from '../context/FiltersContext'
import { Link } from 'react-router-dom'
function ListView() {
  const { filtered_products } = useFilterGlobal()
  return (
    <div className='ListView'>
      {filtered_products.map((item) => {
        const { image, price, description, name, id } = item
        console.log(id)
        return (
          <div>
            <div className='image'>
              <div className='image-container'>
                <img src={image} alt='' />
              </div>
              <div className='content'>
                <p>{name}</p>
                <p>$ {price}</p>
                <p>{`${description.substring(0, 200)}...`}</p>
                <Link to={`/SinglePage/${id}`} className='link'>
                  {' '}
                  <button>Details</button>
                </Link>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default ListView

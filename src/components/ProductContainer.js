import React from 'react'
import { useFilterGlobal } from '../context/FiltersContext'
import { GridView, ListView } from '../components/index'
const ProductContainer = () => {
  const { grid_view, filtered_products: products } = useFilterGlobal()

  console.log(products)

  if (products.length < 1) {
    return (
      <h5 style={{ textTransform: 'none' }}>
        Sorry, no products matched your search.
      </h5>
    )
  }

  if (grid_view === false) {
    return <ListView products={products} />
  }

  if (grid_view === true) {
    return <GridView products={products} />
  }
}

export default ProductContainer

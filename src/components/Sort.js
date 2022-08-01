import React from 'react'
import { useFilterGlobal } from '../context/FiltersContext'
import { BsFillGridFill, BsList } from 'react-icons/bs'

function Sort() {
  const {
    sort,
    updateSort,
    setGridView,
    setListView,
    grid_view,
    filtered_products: products,
  } = useFilterGlobal()

  return (
    <div className='Sort'>
      <div className='btn-container'>
        <button onClick={setGridView}>
          <BsFillGridFill />
        </button>
        <button onClick={setListView}>
          <BsList />
        </button>
      </div>
      <div className='product-length'>{products.length} products found</div>
      <div className='line'></div>
      <form>
        <label htmlFor='sort'> sort by Price </label>
        <select name='sort' value={sort} id='sort' onChange={updateSort}>
          <option value='Lowest'>Lowest</option>
          <option value='Highest'>Highest</option>
          <option value='A-Z'>A-Z</option>
          <option value='Z-A'>Z-A</option>
        </select>
      </form>
    </div>
  )
}

export default Sort

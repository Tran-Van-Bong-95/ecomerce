import React from 'react'
import { useFilterGlobal } from '../context/FiltersContext'
import { getUniqueValue } from '../utils/helper'
import { FaCheck } from 'react-icons/fa'
import { formatPrice } from '../utils/helper'
function Filters() {
  const {
    updateFilter,
    all_products,
    clearFilters,
    filter: {
      text,
      category,
      company,
      color,
      price,
      max_price,
      min_price,
      free_shipping,
    },
  } = useFilterGlobal()

  console.log(text)
  const categories = getUniqueValue(all_products, 'category')
  const companies = getUniqueValue(all_products, 'company')
  const colors = getUniqueValue(all_products, 'colors')

  return (
    <div className='Filters'>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className='form-control'>
          <input
            type='text'
            name='text'
            value={text}
            placeholder='search'
            onChange={updateFilter}
            className='search-input'
          />
        </div>

        <div className='category'>
          <h3>Category</h3>
          <div>
            {categories.map((item, index) => (
              <button
                type='button'
                name='category'
                key={index}
                onClick={updateFilter}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
        {/* button có nội dung thì ta không cần value attribute  */}
        <div className='company'>
          <h3>Company</h3>
          <select name='company' value={company} onChange={updateFilter}>
            {companies.map((item, index) => {
              return (
                <option key={index} value={item}>
                  {item}
                </option>
              )
            })}
          </select>
        </div>
        {/* bằng cách ghi value ở option thì ta đã mặc định giá trị option luôn bằng value. Nhờ có value attribute khi ta onClick lên option nó thay đổi giá trị company đồng nghĩa với thay đổi lựa chọn option */}
        <div className='colors'>
          <h3>Colors</h3>
          <div>
            {colors.map((item, index) => {
              if (item === 'all') {
                return (
                  <button
                    key={index}
                    name='color'
                    onClick={updateFilter}
                    data-color='all'
                    className={`${
                      color === 'all' ? 'all-btn active' : 'all-btn'
                    }`}
                  >
                    all
                  </button>
                )
              }
              return (
                <button
                  style={{ background: item }}
                  onClick={updateFilter}
                  name='color'
                  key={index}
                  data-color={item}
                >
                  {color === item ? <FaCheck /> : null}
                </button>
              )
            })}
          </div>
        </div>

        <div className='price'>
          <h3>price</h3>
          <p className='price'>{formatPrice(price)}</p>
          <input
            type='range'
            name='price'
            onChange={updateFilter}
            min={min_price}
            max={max_price}
            value={price}
          />
        </div>

        <div className='shipping'>
          <label htmlFor='shipping'> free shipping</label>
          <input
            type='checkbox'
            name='free_shipping'
            id='shipping'
            checked={free_shipping}
            onChange={updateFilter}
          />
        </div>
      </form>
      <button type='button' className='clear-btn' onClick={clearFilters}>
        Clear Fitlers
      </button>
    </div>
  )
}

export default Filters

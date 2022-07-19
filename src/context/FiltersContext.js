import React, { useContext, createContext, useReducer, useEffect } from 'react'
import { useGlobalProduct } from '../context/ProductContext'
import { filters_reducer as reducer } from '../reducer/filters_reducer'

import {
  LOADING_PRODUCTS,
  UPDATE_FILTER,
  FILTER,
  SET_GRID_VIEW,
  SET_LIST_VIEW,
  UPDATE_SORT,
  SORT,
  CLEAR_FILTERS,
} from '../action'

/*
quy trình suy nghĩ và thứ tự làm: 
Đầu tiên loading toàn bộ products đã 
Sau đó nếu user chỉnh sửa muốn có products  (updated products) nào rồi lúc đó mới tiến hành (filtered products) ra các products mong muốn 

Tương tự với sort đầu tiên user sẽ muốn sắp xếp các products theo 1 hình thức nào đó (update sort) rồi lúc đó mới tiến hành sort (sort) để ra các products theo thứ tự mong muốn 

==> const initialState = {
  loading: false,
  grid_view: false,
  all_products: [],
  filtered_products: [],
  sort: 'Lowest',
  filter: {
    text: '',
    category: 'all',
    company: 'all',
    colors: 'all',
    shipping_fee: false,
    price: 0,       
    max_price: 0,  // đây là các mức mà người dùng chọn 
    min_price: 0

    // min_price----price----max_price 
  }
}
*/

const initialState = {
  all_products: [],
  filtered_products: [],
  grid_view: true,
  sort: 'Lowest',
  filter: {
    text: '',
    category: 'all',
    company: 'all',
    color: 'all',
    price: 0,
    max_price: 0,
    min_price: 0,
    free_shipping: false,
  },
}

const myFilterProductContext = createContext()

export const FilterProductProvider = ({ children }) => {
  const { products } = useGlobalProduct()
  const [state, dispatch] = useReducer(reducer, initialState)

  // loading products
  useEffect(() => {
    dispatch({ type: LOADING_PRODUCTS, payload: products })
  }, [products])

  // filter / sort and show products
  useEffect(() => {
    dispatch({ type: FILTER })
    dispatch({ type: SORT })
  }, [state.filter, state.sort])

  // update filtered products
  const updateFilter = (event) => {
    let value = event.target.value
    let name = event.target.name

    if (name === 'category') {
      value = event.target.textContent
    }

    if (name === 'color') {
      value = event.target.dataset.color
    }

    if (name === 'free_shipping') {
      value = event.target.checked
    }

    if (name === 'price') {
      value = Number(value)
    }

    dispatch({ type: UPDATE_FILTER, payload: { name, value } })
  }

  // set gridview
  const setGridView = () => {
    dispatch({ type: SET_GRID_VIEW })
  }

  // set listview
  const setListView = () => {
    dispatch({ type: SET_LIST_VIEW })
  }

  // updateSort
  const updateSort = (event) => {
    const value = event.target.value
    dispatch({ type: UPDATE_SORT, payload: value })
  }

  // clear filters
  const clearFilters = () => {
    dispatch({ type: CLEAR_FILTERS, payload: products })
  }

  return (
    <myFilterProductContext.Provider
      value={{
        updateFilter,
        updateSort,
        clearFilters,
        setGridView,
        setListView,
        ...state,
      }}
    >
      {children}
    </myFilterProductContext.Provider>
  )
}

export const useFilterGlobal = () => {
  return useContext(myFilterProductContext)
}

import React, { useContext, createContext, useReducer, useEffect } from 'react'
import { products_url as url } from '../utils/constant'
import { products_reducer as reducer } from '../reducer/products_reducer'

import axios from 'axios'
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
  GET_PRODUCT_ERROR,
  FEATURED_PRODUCT,
} from '../action'

/*
sidebar open
Sidebar close

 đầu tiên loading  nếu data load thành công nhận data nếu không thành công redirect đến error page dựa vào error state 

get single product begin    ~  loading 
get single product success  ~ data
get single product error    ~ error 

get product begin         ~ loading 
get product success       ~ data
get product error         ~ error 

*/
const myProductContext = createContext()
const initialState = {
  products_Loading: false,
  products_error: false,
  products: [],

  featured_products: [],

  single_product_Loading: false,
  single_product: {},
  single_product_error: false,

  isSidebarOpen: false,
}

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const fetchProduct = async () => {
    dispatch({ type: GET_PRODUCT_BEGIN })
    try {
      const response = await axios.get(url)
      const products = response.data

      dispatch({ type: GET_PRODUCT_SUCCESS, payload: products })

      const featuredProduct = products.filter((item) => item.featured === true)
      dispatch({ type: FEATURED_PRODUCT, payload: featuredProduct })
    } catch (error) {
      dispatch({ type: GET_PRODUCT_ERROR })
    }
  }

  useEffect(() => {
    fetchProduct()
  }, [])

  const fetchSingleProduct = async (url) => {
    dispatch({ type: GET_SINGLE_PRODUCT_BEGIN })
    try {
      const response = await axios.get(url)
      const singleProducts = response.data
      console.log(singleProducts)
      dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: singleProducts })
    } catch (error) {
      dispatch({ type: GET_SINGLE_PRODUCT_ERROR })
    }
  }

  const sideBarOpen = () => {
    dispatch({ type: SIDEBAR_OPEN })
  }

  const sideBarClose = () => {
    dispatch({ type: SIDEBAR_CLOSE })
  }

  return (
    <myProductContext.Provider
      value={{ ...state, sideBarClose, sideBarOpen, fetchSingleProduct }}
    >
      {children}
    </myProductContext.Provider>
  )
}

// make sure do this
export const useGlobalProduct = () => {
  return useContext(myProductContext)
}

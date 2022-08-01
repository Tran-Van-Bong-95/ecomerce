import React, { useContext, createContext, useReducer, useEffect } from 'react'
import {
  ADD_TO_CART,
  REMOVE_ITEM,
  CLEAR_SHOPPING_CART,
  TOTAL_AMOUNT,
  TOGGLE_AMOUNT,
} from '../action'

import reducer from '../reducer/cart_reducer'

const getLocalStorage = () => {
  return localStorage.getItem('cart')
    ? JSON.parse(localStorage.getItem('cart'))
    : []
}

const initialState = {
  cart: getLocalStorage(),
  total_items: 0,
  total_price: 0,
  shipping_fee: 534,
}

const CartContext = createContext()

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)

  // set CartItem
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state.cart))
    dispatch({ type: TOTAL_AMOUNT })
  }, [state.cart])

  // add to cart
  const addToCart = (id, amount, mainColor, products) => {
    dispatch({
      type: ADD_TO_CART,
      payload: { id, amount, mainColor, products },
    })
  }

  /*
  nhìn vào phần cartItem ta thấy addToCart cần các thứ sau:
  images, name, price, color, category,  id, stock 
  id ở đây là dạng id + color rồi nên bên phần reduce items trong cart sẽ cần chuyển đổi lại id sao cho bằng id + color 
  */

  // decrease, increase
  const controlButton = (text, id) => {
    dispatch({ type: TOGGLE_AMOUNT, payload: { text, id } })
  }

  // remove item
  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: id })
  }

  // clear shopping cart
  const clear_Shopping_Cart = () => {
    dispatch({ type: CLEAR_SHOPPING_CART })
  }

  return (
    <CartContext.Provider
      value={{
        ...state,
        clear_Shopping_Cart,
        controlButton,
        addToCart,
        removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

// make sure do this
export const useGlobalCartVariable = () => {
  return useContext(CartContext)
}

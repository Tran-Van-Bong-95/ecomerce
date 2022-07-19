import React from 'react'
import styled from 'styled-components'
import CartAmountButtons from './CartAmountButtons'
import { useGlobalCartVariable } from '../context/CartContext'
function CartItem({ item, removeItem }) {
  const { id, price, image, amount, color, name } = item
  const { controlButton } = useGlobalCartVariable()

  const increase = () => {
    controlButton('increase', id)
  }

  const decrease = () => {
    controlButton('decrease', id)
  }
  return (
    <div className='CartItem' key={id}>
      <div className='image'>
        <img src={image} alt='' />
        <div className='content'>
          <p>{name}</p>
          <p>
            Color: <span style={{ background: color }}></span>
          </p>
          <p>{price}</p>
        </div>
      </div>
      <CartAmountButtons
        amount={amount}
        increase={increase}
        decrease={decrease}
      />
      <span onClick={() => removeItem(id)}>delete</span>
    </div>
  )
}

export default CartItem

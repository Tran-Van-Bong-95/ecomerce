import React from 'react'
import { CartColumns, CartTotals, CartItem } from '../components/index'
import { useGlobalCartVariable } from '../context/CartContext'
import { Link } from 'react-router-dom'

function CartContainer() {
  const { cart, total_price, shipping_fee, clear_Shopping_Cart, removeItem } =
    useGlobalCartVariable()

  return (
    <div className='CartContainer'>
      <CartColumns />

      {cart.map((item) => {
        console.log(item)
        return <CartItem item={item} removeItem={removeItem} />
      })}

      <div className='direct_button'>
        <Link to='/product'>
          <button> Continue Shopping </button>{' '}
        </Link>
        <button onClick={() => clear_Shopping_Cart()}>
          {' '}
          Clear Shopping Cart{' '}
        </button>
      </div>
      <hr />
      <CartTotals total_price={total_price} shipping_fee={shipping_fee} />
    </div>
  )
}

export default CartContainer

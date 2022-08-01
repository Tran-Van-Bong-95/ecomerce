import React from 'react'
import { CartColumns, CartTotals, CartItem } from '../components/index'
import { useGlobalCartVariable } from '../context/CartContext'
import { Link } from 'react-router-dom'

function CartContainer() {
  const { cart, total_price, shipping_fee, clear_Shopping_Cart, removeItem } =
    useGlobalCartVariable()

  {
    if (cart.length > 0) {
      return (
        <div className='CartContainer'>
          <CartColumns />

          {cart.map((item) => {
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

          <CartTotals total_price={total_price} shipping_fee={shipping_fee} />
        </div>
      )
    } else {
      return (
        <div className='empty'>
          <p>Your Cart is empty</p>
          <Link to='/product'>
            <button>fill in </button>
          </Link>
        </div>
      )
    }
  }
}

export default CartContainer

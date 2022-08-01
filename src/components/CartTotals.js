import React from 'react'
import { Link } from 'react-router-dom'
import { formatPrice } from '../utils/helper'
import { useGlobalVariable } from '../context/UserContext'
function CartTotals({ total_price, shipping_fee }) {
  const { myUser, loginWithRedirect } = useGlobalVariable()
  return (
    <div className='CartTotals'>
      <p> Subtotal: {formatPrice(total_price)}</p>
      <p>Shipping_fee: {formatPrice(shipping_fee)}</p>
      <div className='cartUnderline'></div>
      <p>Order total: {formatPrice(total_price + shipping_fee)}</p>
      <div>
        {myUser ? (
          <Link to='/checkout' className='btn'>
            proceed to checkout
          </Link>
        ) : (
          <button onClick={() => loginWithRedirect()} className='btn'>
            login
          </button>
        )}
      </div>
    </div>
  )
}

export default CartTotals

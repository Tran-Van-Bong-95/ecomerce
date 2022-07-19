import React from 'react'

function CartTotals({ total_price, shipping_fee }) {
  return (
    <div className='CartTotals'>
      <p> Subtotal: ${total_price}</p>
      <p>Shipping_fee: ${shipping_fee}</p>
      <hr />
      <p>Order total: ${total_price + shipping_fee}</p>
    </div>
  )
}

export default CartTotals

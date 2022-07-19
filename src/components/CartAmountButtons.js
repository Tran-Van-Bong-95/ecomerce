import React from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa'

function CartAmountButtons({ increase, decrease, amount }) {
  return (
    <div className='CartAmountButtons'>
      <FaPlus onClick={() => increase()} />
      <span>{amount}</span>
      <FaMinus onClick={() => decrease()} />
    </div>
  )
}

export default CartAmountButtons

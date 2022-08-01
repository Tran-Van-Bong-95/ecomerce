import React from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa'

function CartAmountButtons({ increase, decrease, amount }) {
  return (
    <div className='CartAmountButtons'>
      <FaPlus className='icon' onClick={() => increase()} />
      <span>{amount}</span>
      <FaMinus className='icon' onClick={() => decrease()} />
    </div>
  )
}

export default CartAmountButtons

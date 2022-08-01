import React from 'react'

function CartColumns() {
  return (
    <>
      <div className='CartColumns'>
        <span> Item </span>
        <span> Price </span>
        <span> Quantity </span>
        <span> Subtotal </span>
      </div>
      <br />
      <div className='cartUnderline'></div>
    </>
  )
}

export default CartColumns

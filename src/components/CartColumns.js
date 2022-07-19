import React from 'react'
import styled from 'styled-components'
function CartColumns() {
  return (
    <Wrapper>
      <div className='CartColumns'>
        <span> Item </span>
        <span> Price </span>
        <span> Quantity </span>
        <span> Subtotal </span>
      </div>
    </Wrapper>
  )
}

export default CartColumns

const Wrapper = styled.div``

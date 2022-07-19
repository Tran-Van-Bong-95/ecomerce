import React from 'react'
import { PageHero, CartContainer } from '../components/index'

function CartPage() {
  return (
    <div className='CartPage'>
      <PageHero title='cart' />
      <CartContainer />
    </div>
  )
}

export default CartPage

//trong cartContainer sẽ chứa các component con

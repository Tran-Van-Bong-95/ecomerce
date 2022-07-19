import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalVariable } from '../context/UserContext'
import { PageHero, StripeCheckout } from '../components/index'

function CheckoutPage() {
  const { user } = useGlobalVariable()

  return (
    <div className='Checkout Page'>
      <PageHero title='checkout' />
      <div className='content'>
        {user ? (
          <StripeCheckout />
        ) : (
          <div className='empty'>
            <p>Your Cart is empty</p>
            <Link to='/product'>
              <button>fill in </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default CheckoutPage

/*
nếu user true return StripeCheckout, nếu false thì return Your cart is empty và 1 link tên fill in tới product 
*/

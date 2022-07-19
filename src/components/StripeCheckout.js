// write task in general

// inject stripe object into Element Provider

// create a paymentIntent on the server from a secret key
// the server will return a client secret of that payment intent
// need a reference of cardElement by element
// create a paymentMethod ( When we create a payment method we're going to need a reference
// to the cardElement )
// confirm the card payments by payment method id and client secret

import React, { useState } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import {
  Elements,
  useElement,
  useStripe,
  CardElement,
} from '@stripe/react-stripe-js'

import { useGlobalCartVariable } from '../context/CartContext'
import { useGlobalVariable } from '../context/UserContext'
import axios from 'axios'
import { formatPrice } from '../utils/helper'

const stripePromise = loadStripe(`${process.env.REACT_PUBLIC_KEY}`)

function Checkout() {
  const { total_price: price } = useGlobalCartVariable()
  const { myUser } = useGlobalVariable()
  const [isProcessing, setIsProcessing] = useState(false)
  const [isCheckoutError, setIsCheckoutError] = useState(null)
  const [succeeded, setSucceeded] = useState(false)
  const [disable, setDisable] = useState(true)

  // get stripe back
  const stripe = useStripe()

  // use element to truyền thông tin thanh toán đã thu thập 1 cách an toàn bởi Payment Element tới Stripe API, truy cập ELements instance để mà có thể sử dụng nó với stripe.confirmPayment. Sử dụng useElements là 1 cách để truy cập 1 mounted Element

  // "Mounting" is when React "renders" the component for the first time and actually builds the initial DOM from those instructions

  // tóm lại ta sử dụng useElement để trích xuất that elements Object từ stripe.js được tạo ra
  const element = useElement()

  const cardElement = element.getElement('card')
  setIsProcessing(true)

  const styleCardElement = {
    base: {
      iconColor: '#fff',
      fontSize: '16px',
      color: '#fff',
      '::placeholder': {
        color: '#87bbfd',
      },
    },
    invalid: {
      iconColor: '#FFC7EE',
      color: '#FFC7EE',
    },

    complete: {
      iconColor: '#cbf4c9',
    },
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const { data: clientSecret } = await axios.post(
        '/functions/PaymentIntent',
        {
          amount: price * 100,
        }
      )

      const paymentMethodBq = stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
      })

      if (paymentMethodBq.error) {
        setIsCheckoutError(paymentMethodBq.error.message)
        setIsProcessing(false)
        setSucceeded(false)
        return
      }

      const { error } = stripe.confirmPaymentIntent(clientSecret, {
        payment_method: paymentMethodBq.paymentMethod.id,
      })

      if (error) {
        setIsCheckoutError(error.message)
        setIsProcessing(false)
        setSucceeded(false)
        return
      }
      setIsCheckoutError(null)
      setSucceeded(true)
      setIsProcessing(false)
    } catch (error) {
      setIsCheckoutError(error.message)
      setSucceeded(false)
      setIsProcessing(false)
    }
  }

  return (
    <div className='checkout'>
      {succeeded ? (
        <article>
          <h4>Thank you</h4>
          <h4>Your payment was successful!</h4>
          <h4>Redirecting to home page shortly</h4>
        </article>
      ) : (
        <article>
          <h4>Hello, {myUser && myUser.name}</h4>
          <p>Your total is {formatPrice(price)}</p>
          <p>Test Card Number: 4242 4242 4242 4242</p>
        </article>
      )}
      <form onSubmit={handleSubmit}>
        <CardElement options={styleCardElement} />

        <button disabled={isProcessing || disable}>
          {isProcessing ? 'Processing' : 'Buy'}
        </button>

        {isCheckoutError && (
          <aticle>
            <h4>Something wrong please check again</h4>
          </aticle>
        )}

        <p className={succeeded ? 'result-message' : 'result-message hidden'}>
          Payment succeeded, see the result in your
          <a href={`https://dashboard.stripe.com/test/payments`}>
            {' '}
            Stripe dashboard.
          </a>{' '}
          Refresh the page to pay again.
        </p>
      </form>
    </div>
  )
}

const StripeCheckout = () => {
  return (
    <Elements stripe={stripePromise}>
      <Checkout />
    </Elements>
  )
}
export default StripeCheckout

// The CardElement component renders the UI for the card number, date expiration, CVC code, and the billing zip code fields.

/*
// Learning
  // A common ask/bug that users run into is:
  // How do you change the color of the card element input text?
  // How do you change the font-size of the card element input text?
  // How do you change the placeholder color?
  // The answer to all of the above is to use the `style` option.
  // It's common to hear users confused why the card element appears impervious
  // to all their styles. No matter what classes they add to the parent element
  // nothing within the card element seems to change. The reason for this is that
  // the card element is housed within an iframe and:
  // > styles do not cascade from a parent window down into its iframes

*/

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useGlobalCartVariable } from '../context/CartContext'
import CartAmountButtons from './CartAmountButtons'
import { FaCheck } from 'react-icons/fa'
function AddToCart({ products }) {
  const { id, stock, colors } = products
  const { addToCart } = useGlobalCartVariable()
  const [amount, setAmount] = useState(1)
  const [mainColor, setMainColor] = useState(colors[0])

  const decrease = () => {
    setAmount((oldValue) => {
      let newValue = oldValue - 1
      if (newValue < 0) {
        newValue = 0
      }
      return newValue
    })
  }

  const increase = () => {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount + 1
      if (tempAmount > stock) {
        tempAmount = stock
      }
      return tempAmount
    })
  }

  return (
    <div className='AddToCart'>
      <p className='colors'>
        <span>Colors:</span>
        {colors.map((color) => {
          return (
            <span
              style={{ background: color }}
              onClick={() => setMainColor(color)}
              className={mainColor === color ? 'active' : ''}
            >
              {mainColor === color ? <FaCheck /> : null}
            </span>
          )
        })}
      </p>
      <div className='amount'>
        <CartAmountButtons
          increase={increase}
          decrease={decrease}
          amount={amount}
        />
      </div>
      <Link
        to='/cart'
        onClick={() => addToCart(id, amount, mainColor, products)}
      >
        {' '}
        ADD TO CART{' '}
      </Link>
    </div>
  )
}

export default AddToCart

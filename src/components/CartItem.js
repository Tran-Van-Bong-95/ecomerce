import React from 'react'
import CartAmountButtons from './CartAmountButtons'
import { BsTrash } from 'react-icons/bs'
import { useGlobalCartVariable } from '../context/CartContext'
import { formatPrice } from '../utils/helper'
function CartItem({ item, removeItem }) {
  const { id, price, image, amount, color, name } = item
  console.log(color)
  const { controlButton } = useGlobalCartVariable()

  const increase = () => {
    controlButton('increase', id)
  }

  const decrease = () => {
    controlButton('decrease', id)
  }
  return (
    <>
      <div className='CartItem' key={id}>
        <div className='image'>
          <div className='content'>
            <div>
              <img src={image} alt='' />
              <div>
                <p
                  style={{
                    textTransform: 'capitalize',
                    fontWeight: 'bolder',
                    margin: '5px 0',
                  }}
                >
                  {name}
                </p>
                <p>
                  Color:{' '}
                  <span
                    style={{
                      backgroundColor: color,
                      borderRadius: '5px',
                      width: '15px',
                      height: '15px',
                      borderRadius: '5px',
                    }}
                  ></span>
                </p>
              </div>
            </div>

            <p>{formatPrice(price)}</p>
          </div>
        </div>
        <CartAmountButtons
          amount={amount}
          increase={increase}
          decrease={decrease}
        />
        <span className='icon cart' onClick={() => removeItem(id)}>
          <span>{formatPrice(price * amount)}</span>
          <BsTrash
            style={{ width: '1.5em', height: '1.5em', color: 'green' }}
          />
        </span>
      </div>
      <div className='cartUnderline'></div>
    </>
  )
}

export default CartItem

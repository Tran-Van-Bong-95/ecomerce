import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalVariable } from '../context/UserContext'
import { FaUserPlus, FaUserMinus, FaShoppingCart } from 'react-icons/fa'
import { useGlobalCartVariable } from '../context/CartContext'

function CartButtons() {
  const { myUser, loginWithRedirect, logout } = useGlobalVariable()
  const { clear_Shopping_Cart, cart } = useGlobalCartVariable()

  return (
    <div className='cartButtons-container'>
      <Link to='/cart' className='cart-button'>
        <p style={{ padding: '0 10px' }}>Cart</p>
        <span>
          <FaShoppingCart /> <span className='amount'>{cart.length}</span>
        </span>
      </Link>
      {myUser ? (
        <div
          type='button'
          className='logout'
          onClick={() => {
            clear_Shopping_Cart()
            localStorage.removeItem('cart')
            logout({ returnTo: window.location.origin })
          }}
        >
          {' '}
          logout <FaUserMinus className='icon' />
        </div>
      ) : (
        <button className='login' onClick={() => loginWithRedirect()}>
          Login <FaUserPlus className='icon' />
        </button>
      )}
    </div>
  )
}

export default CartButtons

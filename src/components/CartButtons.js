import React from 'react'
import { useGlobalVariable } from '../context/UserContext'
import { FaUserPlus, FaUserMinus } from 'react-icons/fa'
import { useGlobalCartVariable } from '../context/CartContext'
function CartButtons() {
  const { myUser, loginWithRedirect, logout } = useGlobalVariable()
  const { clearCart } = useGlobalCartVariable()

  return myUser ? (
    <div
      type='button'
      className='auth-btn'
      onClick={() => {
        clearCart()
        localStorage.removeItem('user')
        logout({ returnTo: window.location.origin })
      }}
    >
      {' '}
      logout <FaUserMinus />
    </div>
  ) : (
    <div className='login' onClick={loginWithRedirect}>
      Login <FaUserPlus />
    </div>
  )
}

export default CartButtons

import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Route, Navigate } from 'react-router-dom'
import CheckoutPage from './CheckoutPage'
function PrivateRoute() {
  const { user } = useAuth0()

  return (
    <Route
      path='/checkout'
      render={() => {
        return user ? <CheckoutPage /> : <Navigate to='/'></Navigate>
      }}
    ></Route>
  )
}

export default PrivateRoute

// vì trong {...rest} có path prop từ Route  rồi
// để chuyển  1 page sang  page khác dưới  điều kiện hay  changes the current location when it is rendered ta dùng Ridirect. Render under conditions

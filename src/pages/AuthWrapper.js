import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
function AuthWrapper({ children }) {
  const { isLoading, error } = useAuth0()

  // isLoading
  if (isLoading) {
    return <p>...Loading</p>
  }

  // is Error
  if (error) {
    return <p>...Error</p>
  }

  // else return {children}
  return <div className='AuthWrapper'>{children}</div>
}

export default AuthWrapper

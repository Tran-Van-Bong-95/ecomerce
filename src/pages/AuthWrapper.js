import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
function AuthWrapper({ children }) {
  const { isLoading, error } = useAuth0()

  // isLoading

  if (isLoading) {
    return <div className='loading'></div>
  }

  // is Error
  if (error) {
    return <div className='error'>...Error</div>
  }

  // else return {children}
  return <div className='AuthWrapper'>{children}</div>
}

export default AuthWrapper

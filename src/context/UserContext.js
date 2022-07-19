// using context when a state or a function is used more than 2 components

import React, { createContext, useContext, useState, useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
const myUserContext = createContext()

export const UserProvider = ({ children }) => {
  const { isLoading, logout, user, error, loginWithRedirect } = useAuth0()

  const [myUser, setMyUser] = useState(null)

  useEffect(() => {
    setMyUser(user)
  })
  return (
    <myUserContext.Provider
      value={{
        loginWithRedirect,
        isLoading,
        error,
        logout,
        myUser,
      }}
    >
      {children}
    </myUserContext.Provider>
  )
}

// make sure do this
export const useGlobalVariable = () => {
  return useContext(myUserContext)
}

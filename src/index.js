import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { UserProvider } from './context/UserContext'
import { ProductProvider } from './context/ProductContext'
import { FilterProductProvider } from './context/FiltersContext'
import { CartProvider } from './context/CartContext'
import { Auth0Provider } from '@auth0/auth0-react'

ReactDOM.render(
  <Auth0Provider
    domain={process.env.REACT_APP_AUTH_DOMAIN}
    clientId='waGEv4uSkT0YZPiGkq86UH9260Me7L7o'
    redirectUri={window.location.origin}
  >
    <UserProvider>
      <ProductProvider>
        <FilterProductProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterProductProvider>
      </ProductProvider>
    </UserProvider>
  </Auth0Provider>,
  document.getElementById('root')
)

/*
Một cách để tích hợp Auth0 với ứng dụng React của bạn là bọc thành phần gốc của bạn bằng Auth0Provider  that you can import from the SDK.
 
*/

import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {
  Home,
  SinglePage,
  CartPage,
  About,
  ProductPage,
  PrivateRoute,
  ErrorPage,
  AuthWrapper,
  CheckoutPage,
} from './pages/index'
import { Navbar, Footer, Sidebar } from './components/index'
import { useGlobalProduct } from './context/ProductContext'
function App() {
  const { isSidebarOpen } = useGlobalProduct()
  return (
    <AuthWrapper>
      <Router>
        {isSidebarOpen ? <Sidebar /> : <Navbar />}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/SinglePage/:id' element={<SinglePage />} />
          <Route path='/cart' element={<CartPage />} />
          <Route exact path='/' element={<PrivateRoute />} />
          <Route path='/about' element={<About />} />
          <Route path='/product' element={<ProductPage />} />
          <Route path='/checkout' element={<CheckoutPage />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
        <Footer />
      </Router>
    </AuthWrapper>
  )
}

export default App

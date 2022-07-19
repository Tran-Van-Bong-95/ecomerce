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
} from './pages/index'
import { Navbar, Footer, Sidebar } from './components/index'

function App() {
  return (
    <AuthWrapper>
      <Router>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/SinglePage/:id' element={<SinglePage />} />
          <Route path='/cart' element={<CartPage />} />
          <Route exact path='/' element={<PrivateRoute />}></Route>
          <Route path='/about' element={<About />} />
          <Route path='/product' element={<ProductPage />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
        <Footer />
      </Router>
    </AuthWrapper>
  )
}

export default App

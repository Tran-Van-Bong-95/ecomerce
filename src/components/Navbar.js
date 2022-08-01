import React from 'react'
import logo from '../assets/logo.svg'
import { links } from '../utils/constant'
import { Link } from 'react-router-dom'
import { BsReverseLayoutTextSidebarReverse } from 'react-icons/bs'
import { useGlobalVariable } from '../context/UserContext'
import { useGlobalProduct } from '../context/ProductContext'
import { CartButtons } from '../components/index'

function Navbar() {
  const { myUser } = useGlobalVariable()
  const { isSidebarOpen, sideBarClose, sideBarOpen } = useGlobalProduct()
  return (
    <div className='Navbar'>
      <div>
        <img src={logo} className='logo' alt='coding addict' />
      </div>
      <div className='content'>
        {links.map((item, index) => {
          const { id, text, url } = item
          return (
            <Link to={url} key={index}>
              <span key={id}>{text}</span>
            </Link>
          )
        })}
        {myUser && (
          <li>
            <Link to='/checkout' style={{ textDecoration: 'none' }}>
              Checkout
            </Link>
          </li>
        )}
        <CartButtons />
      </div>
      <button
        className='close-btn'
        onClick={() => (isSidebarOpen ? sideBarClose() : sideBarOpen())}
      >
        <BsReverseLayoutTextSidebarReverse />
      </button>
    </div>
  )
}

export default Navbar

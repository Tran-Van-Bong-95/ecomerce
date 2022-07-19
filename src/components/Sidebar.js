import React from 'react'
import { useGlobalProduct } from '../context/ProductContext'
import CartButtons from '../components/CartButtons'
import logo from '../assets/logo.svg'
import { links } from '../utils/constant'
import { Link } from 'react-router-dom'
import { FaTimes } from 'react-icons/fa'
import { useGlobalVariable } from '../context/UserContext'

function Sidebar() {
  const { isSidebarOpen, closeSidebar } = useGlobalProduct()

  const { myUser } = useGlobalVariable()

  return (
    <div className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>
      <div className='sidebar-header'>
        <img src={logo} className='logo' alt='coding addict' />
        <button className='close-btn' onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>
      <ul className='links'>
        {links.map(({ id, text, url }) => {
          return (
            <li key={id}>
              <Link to={url} onClick={closeSidebar}>
                {text}
              </Link>
            </li>
          )
        })}
        {myUser && (
          <li>
            <Link to='/checkout' onClick={closeSidebar}>
              checkout
            </Link>
          </li>
        )}
      </ul>
      <CartButtons />
    </div>
  )
}

export default Sidebar

import React from 'react'
import logo from '../assets/logo.svg'
import { links } from '../utils/constant'
import { Link } from 'react-router-dom'
import { useGlobalVariable } from '../context/UserContext'
import { CartButtons } from '../components/index'
function Navbar() {
  const { myUser } = useGlobalVariable()
  return (
    <div className='Navbar'>
      <div className='logo'>
        <img src={logo} alt='' />
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
      </div>
      {myUser && (
        <li>
          <Link to='/checkout'>checkout</Link>
        </li>
      )}
      <CartButtons />
    </div>
  )
}

export default Navbar

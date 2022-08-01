import CartButtons from '../components/CartButtons'
import { BsReverseLayoutTextSidebarReverse } from 'react-icons/bs'
import logo from '../assets/logo.svg'
import { links } from '../utils/constant'
import { Link } from 'react-router-dom'
import { useGlobalVariable } from '../context/UserContext'
import { useGlobalProduct } from '../context/ProductContext'

function Sidebar() {
  const { myUser } = useGlobalVariable()
  const { isSidebarOpen, sideBarClose, sideBarOpen } = useGlobalProduct()
  return (
    <div className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>
      <div className='logo'>
        <img src={logo} alt='coding addict' />
        <button
          className='close-btn'
          onClick={() => (isSidebarOpen ? sideBarClose() : sideBarOpen())}
        >
          <BsReverseLayoutTextSidebarReverse />
        </button>
      </div>
      <ul className='links'>
        {links.map(({ id, text, url }) => {
          return (
            <li key={id}>
              <Link to={url} onClick={sideBarClose}>
                {text}
              </Link>
            </li>
          )
        })}
        {myUser && (
          <li>
            <Link to='/checkout' onClick={sideBarClose}>
              checkout
            </Link>
          </li>
        )}
      </ul>

      <div className='btn-sidebar'>
        <CartButtons />
      </div>
    </div>
  )
}

export default Sidebar

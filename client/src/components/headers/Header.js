import React from 'react'
import { MdOutlineMenu } from "react-icons/md";
import { MdClose } from "react-icons/md";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom"
import "./Header.css"

const Header = () => {
  return (
    <div>
      <header>
        <div className='menu'>
            <MdOutlineMenu/>
        </div>
        <div className='logo'>
            <Link to='/'>eCommerce</Link>
        </div>

        <ul>
            <li><Link to='/'>Products</Link></li>
            <li><Link to='/'>Login Or Register</Link></li>

            <li>
            <MdClose size={30}/>
            </li>
        </ul>
        <span>
            <span>0</span>
            <Link><MdOutlineShoppingCart/></Link>
        </span>
        
      </header>
    </div>
  )
}

export default Header

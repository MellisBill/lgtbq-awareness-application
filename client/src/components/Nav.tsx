import React from 'react'
import { Link } from 'react-router-dom'
import { menu_items } from '../data/menu-items'
import Logo from '../assets/Logo.png'

export const Nav = () => {
  return (
    <nav className='navbar'>
      <div className='navbar-content'>

        <img src={Logo} alt="" />
        <ul className='nav-links'>
          {menu_items.map((item) => {
            return (
              <li key={item.value}>
                <Link className='nav-link' to={item.value}>{item.label}</Link>
              </li>)
          })}
        </ul>
          
        <Link className='ask-question' to='/question-and-answer'>
          <button className='ask-question'>Ask a question</button>
        </Link>
          
      </div>
       
    </nav>

  )
}

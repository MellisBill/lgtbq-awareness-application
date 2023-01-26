import React from 'react'
import { Link } from 'react-router-dom'
import { menu_items } from '../data/menu-items'

export const Nav = () => {
  return (
    <nav>
        <h1>CGI LGBT+ Hub</h1>
        <ul>
            {menu_items.map((item) => {
                return (
                <li>
                    <Link className='nav-link' to={item.value}>{item.label}</Link>
                </li>)
            })}
        </ul>
    </nav>
  )
}

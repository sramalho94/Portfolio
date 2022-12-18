import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='Navbar'>
      <NavLink to="/" className='NavBarLink'>Home</NavLink>
      <NavLink to="/aboutme" className='NavBarLink'>About Me</NavLink>
    </div>
  )
}

export default NavBar
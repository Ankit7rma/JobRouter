import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div>
    <header>
        <h1>Job Router</h1>
        <Link to="/" >Home</Link>
        <NavLink to="about" >ABout</NavLink>
    </header>
    </div>
  )
}

export default Header
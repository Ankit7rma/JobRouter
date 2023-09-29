import React from 'react'
import { NavLink } from 'react-router-dom'
import "../index.css"
const Header = () => {
  return (
    <div>
    <header>
    <nav>
        <h1>Job Router</h1>
        <NavLink to="/" >Home</NavLink>
        <NavLink to="about" >ABout</NavLink>
        </nav>
    </header>
    </div>
  )
}

export default Header
import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import "../index.css"
const Header = () => {
  return (
    <div>
    <header>
    <nav>
        <h1>Job Router</h1>
        <NavLink to="/" >Home</NavLink>
        <NavLink to="about" >About</NavLink>
        <NavLink to="help" >Help</NavLink>
        <NavLink to="careerLayout" >Career</NavLink>
        </nav>
    </header>
    <main>
      <Outlet/>
    </main>
    </div>
  )
}

export default Header
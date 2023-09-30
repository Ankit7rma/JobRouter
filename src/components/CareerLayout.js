import { NavLink, Outlet } from "react-router-dom"

export default function CareersLayout() {
    
  return (
    <div className="careers-layout">
      <h2>Careers</h2>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit?</p>
      <NavLink to="career" >Jobs</NavLink>
      <Outlet />
    </div>
  )
}
import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div>
    <h2>Error Page not found</h2>
    <p>Lorem ipsum </p>

    <h4>Go to the <Link to="/">Home</Link></h4>
    </div>
    
  )
}

export default Error
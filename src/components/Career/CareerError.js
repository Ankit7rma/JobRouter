import React from 'react'
import { Link, useRouteError } from 'react-router-dom'

const CareerError = () => {
    const error = useRouteError()
  return (
    <div><div>Error</div>
    <p>{error.message}</p>
    <Link to="/" >Back to HomePage</Link>

    </div>
  )
}

export default CareerError
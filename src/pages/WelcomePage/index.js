import React from 'react'
import { NavLink } from 'react-router-dom'

const WelcomePage = () => {
  return (
    <>
      <div>
        <h1>Welcome</h1>
        {/* <NavLink to="Home">Home</NavLink> */}
        <NavLink to="Login">Login</NavLink>
      </div>
    </>
  )
}

export default WelcomePage

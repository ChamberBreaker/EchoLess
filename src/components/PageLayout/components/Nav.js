import React from 'react'
import { IndexLink, Link } from 'react-router'

const Nav = () => (
  <div className="navContainer">
    <IndexLink to='/' className="link" activeClassName="activeLink">Home</IndexLink>
    <Link to='/about' className="link" activeClassName="activeLink">About</Link>
    <Link to='/profile' className="link" activeClassName="activeLink">Profile</Link>
  </div>
)

export default Nav

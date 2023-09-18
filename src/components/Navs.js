import React from 'react';
import {Link, useMatch, useResolvedPath} from "react-router-dom";

const Navs = () => {
  return (
    <nav className='nav'>
      <Link to='/' className='logo'>JS</Link>
    <ul>
        <CustomLink to="/home">Home</CustomLink>
        <CustomLink to="/about">About</CustomLink>
        <CustomLink to="/skills">Skills</CustomLink>
        <CustomLink to="/contact">Contact</CustomLink>
    </ul>
  </nav>
  )
}
function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}

export default Navs

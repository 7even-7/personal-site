import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faGoogle, faGit} from '@fortawesome/free-brands-svg-icons'
import '../style.css'
import {Link, useMatch, useResolvedPath} from "react-router-dom";
import resume from '../assets/resume.pdf'
const Home = () => {
    const iconSize = '2x'
  return (
    <div className='homePage'>
      <div className='avatar'></div>
      <div className='headline'>Hello, I am John. A food enthusiasts.</div>
      <ul className='icons'>
        <li>
            <a href='https://www.linkedin.com/in/john-sun06/'>    
            <FontAwesomeIcon icon={faLinkedin} style={{color: "#772828",}} size = {iconSize}/>
            </a>  
        </li>
        <li>
            <a href="https://github.com/7even-7">      
            <FontAwesomeIcon icon={faGithub} style={{color: "#772828",}} size = {iconSize}/>
            </a>
        </li>
        <li>      
            <a href="mailto:jsun777777@gmail.com">
            <FontAwesomeIcon icon={faGoogle} style={{color: "#772828",}} size = {iconSize}/>
            </a>
        </li>
      </ul>
      <ul className='pages'>
        <CustomLink to="/about">About</CustomLink>
        <CustomLink to="/skills">Skills</CustomLink>
        <CustomLink to="/contact">Contact</CustomLink>
        <a href={resume} download="Resume">Resume</a>

      </ul>
    </div>
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
export default Home

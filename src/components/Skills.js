import React from 'react'
import python from '../assets/python.png'
import cpp from '../assets/cpp.png'
import figma from '../assets/figma.png'
import java from '../assets/java.png'
import css3 from '../assets/css3.png'
import html5 from '../assets/html-5.png'
import js from '../assets/js.png'
import reac from '../assets/react.png'
import mysql from '../assets/mysql.png'

const Skills = () => {
  return (
    <>
    <h1 className='skill'>My Skills</h1>
    <div className='skillsContainer'>
      <ul>
        <li><img src={python} alt="python" /></li>
        <li><img src={cpp} alt="c++" /></li>
        <li><img src={java} alt="figma" /></li>
      </ul>

      <ul>
        <li><img src={html5} alt="html5" /></li>
        <li><img src={css3} alt="css3" /></li>
        <li><img src={js} alt="javascript" /></li>
      </ul>

      <ul>
        <li><img src={reac} alt="react" /></li>
        <li><img src={mysql} alt="MySql" /></li>
        <li><img src={figma} alt="figma" /></li>
      </ul>
    </div>
    </>
  )
}

export default Skills

import React,{useState} from 'react'
import {  NavLink } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const[menuOpen,setMenuOpen]=useState(false)
  return (
    <nav >
      <h3>Rahees T M</h3>
      <div className='menu'onClick={()=>{
        setMenuOpen(!menuOpen)
      }}>
        <span></span>
        <span></span>
        <span></span>
      </div>
        <ul className={menuOpen ? "open" : ""}>
            <li ><NavLink to='/'>Home</NavLink></li>
            <li ><NavLink to='/about'>About</NavLink></li>
            <li ><NavLink to='/project'>Project</NavLink></li>
            <li ><NavLink to='/contact'>Contact</NavLink></li>
        </ul>
    </nav>
  )
}

export default Navbar
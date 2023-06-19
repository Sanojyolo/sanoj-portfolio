import React from 'react'
import {Link, useLocation}  from 'react-router-dom'
import '../styles/Nav.css'
import ReorderIcon from "@material-ui/icons/Reorder"
import { useState } from 'react'
import { useEffect } from 'react'
import PersonOutline from "@material-ui/icons/PersonOutline"
import AccountTree from "@material-ui/icons/AccountTree"
import Contacts from "@material-ui/icons/Contacts"


const Nav = () => {
    const [expandNav, setExpandNav] = useState(false);
    const location = useLocation();

    useEffect(()=>{
        setExpandNav(false)

    },[location])
  return (
    <div className='navbar' id={expandNav ? "open" : "close"}>
        <div className='toggleButton'>
            <button onClick={()=> {setExpandNav((prev) => !prev)}}><ReorderIcon/></button>
        </div>
        <div className='links'>
            <Link to="/"><PersonOutline/> About</Link>
            <Link to="/projects"><AccountTree/> Projects</Link>
            <Link to="/contact"><Contacts/> Contact</Link>
        </div>
      
    </div>
  )
}

export default Nav

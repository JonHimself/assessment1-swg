import React from 'react'
import { Link } from 'react-router-dom'
import classes from '../styles/Navbar.module.css'

const Navbar = () => {
    return (
        <div className={classes.container}>
           <ul className={classes.list}>
               <li><Link to='/'>Home</Link></li>
               <li><Link to='/click'>Click</Link></li>
               <li><Link to='/keypress'>Keypress</Link></li>
               <li><Link to='/mousemove'>Mousemove</Link></li>
               <li><Link to='/submit'>Submit</Link></li>
           </ul>
        </div>
    )
}

export default Navbar

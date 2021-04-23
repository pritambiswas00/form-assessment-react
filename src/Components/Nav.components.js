import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'
import Img from '../Logo/logo.png'
import {motion } from 'framer-motion'


function Nav() {
    return (
              <motion.nav initial={{
                y : -250
              }} animate={{
                  y : 0
              }} className="nav">
               <Link to="/" className="Image"><img  src={Img} alt="Logo"/></Link>
                <ul>
                  <li className="nav-items"> <Link className="nav-links" to="/appointmentform">Appointment</Link> </li>
                  <li className="nav-items"> <Link className="nav-links" to="/dosage">Dosage Calculate</Link> </li>
                </ul>
             </motion.nav> 

    ) 
}

export default Nav;

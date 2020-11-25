import React from "react";
import {Link, NavLink} from "react-router-dom"

const Navbar = () =>{
   
    return(
       <nav className="nav-wrapper blue light-2">
        <div className="container">
        <a  className="brand-logo">Martins Mini site</a>
        <ul className="right">
           <li ><NavLink to="/">Home</NavLink></li>
           <li><Link to="/about">about</Link></li>
           <li><Link to="/contact">ContactUs</Link></li>
        </ul>
        </div>
      </nav>
    )

}

export default Navbar;
import React from 'react'
import AuthOptions from "../auth/AuthOptions";
import { Link } from 'react-router-dom';
import { Avatar } from "@material-ui/core";
import './Navbar.css'

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <h1>uniquekids</h1>
      </div>
      <div className="navbar__menu">
        <Link to="/" className="navbar__link">
          Home
        </Link>
        <Link to="/about" className="navbar__link">
          About
        </Link>
        <Link to="/babies" className="navbar__link">
          Babies
        </Link>
        <Link to="/girls" className="navbar__link">
          Girls
        </Link>
        <Link to="/boys" className="navbar__link">
          Boys
        </Link>
        <Link to="/toys" className="navbar__link">
          Toys
        </Link>
        <Link to="/contact" className="navbar__link">
          Contactus
        </Link>
        <AuthOptions />
        <Avatar />
      </div>
    </div>
  );
}



  

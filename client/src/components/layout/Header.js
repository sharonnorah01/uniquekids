import React from 'react'
import { Link } from 'react-router-dom'
import AuthOptions from '../auth/AuthOptions'
export default function Header() {
    return (
      <div>
        <header id="header">
          <Link to="/">
            <h4 className="title">Uniquekids</h4>
          </Link>
          <div>
            <Link to="/about">Aboutus</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/babyshop">BabyShop</Link>
            <Link to="/contact">Contactus</Link>
          </div>
          <AuthOptions />
        </header>
      </div>
    );
}

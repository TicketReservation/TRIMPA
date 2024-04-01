import React from 'react';
import SignInBtn from './SignInBtn.js';
import SignUpBtn from './SignUpBtn.js';
import '../css/homePage.css'; 
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <div className="header">
            <span>
                <NavLink to="/" className="trimpa">Tripma</NavLink>
            </span>
            <span className="topnav">
                <NavLink to="/flight" className="navLink">Flights</NavLink>
                <NavLink to="/hotel" className="navLink">Hotels</NavLink>
                <NavLink to="/" className="navLink">Packages</NavLink>
                <SignInBtn/>
                <SignUpBtn />
            </span>
        </div>
    );
}

export default Header;

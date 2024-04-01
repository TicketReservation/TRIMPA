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
                <NavLink to="/flights" className="navLink">Flights</NavLink>
                <NavLink to="/hotels" className="navLink">Hotels</NavLink>
                <NavLink to="/packages" className="navLink">Packages</NavLink>
                <SignInBtn/>
                <SignUpBtn />
            </span>
        </div>
    );
}

export default Header;

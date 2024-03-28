import React, { useState } from 'react';
import SignInBtn from './SignInBtn.js';
import SignUpBtn from './SignUpBtn.js';
import style from '../css/homePage.css';
import { NavLink } from 'react-router-dom';

function Header() {
    const [view, setView] = useState('signIn');

    const switchView = (v) => {
        setView(v);
    }

    return (
        <div className="header">
            <span>
                <NavLink to="/" className="trimpa">Tripma</NavLink>
            </span>
            <span className="topnav">
                <NavLink to="/flight" id="nav">Flights</NavLink>
                <NavLink to="/hotels" id="nav">Hotels</NavLink>
                <NavLink to="/packages" id="nav">Packages</NavLink>
                {view === "signIn" && <SignInBtn/>}
                <SignUpBtn switchView={switchView}/>
            </span>
        </div>
    );
}

export default Header;

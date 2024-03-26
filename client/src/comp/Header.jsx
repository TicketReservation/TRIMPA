import React, { useState } from 'react';
import SignIn from './SignIn.jsx';
import style from '../css/homePage.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
function Header() {
   

    return (
        <div className="header">
            <span>
                <h1 className="trimpa">Trimpa</h1>
            </span>
            <span className="topnav">
                <p id="nav" href="#Fligth">
                    Fligth
                </p>
                <p id="nav" href="#Hotels">
                    Hotels
                </p>
                <p id="nav" href="#Packages">
                    Packages
                </p>
                <a id="log" href="#Sign in">
                    Sign in
                </a>
                <a id="log" className="active" href="#Singn up">
                    Sign up
                </a>
            </span>
        </div>
    );
}

export default Header;

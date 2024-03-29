import React, { useState } from 'react';
import SignInBtn from './SignInBtn.js';
import SignUpBtn from './SignUpBtn.js'
import style from '../css/homePage.css';



function Header() {
   
    

    return (
        <div className="header">
            <span>
                <p className="trimpa">Tripma</p>
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
                <SignInBtn/>
                <SignUpBtn />
            </span>
        </div>
    );
}

export default Header;

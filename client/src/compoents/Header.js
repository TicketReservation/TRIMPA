import React, { useState } from 'react';
import SignInBtn from './SignInBtn.js';
import SignUpBtn from './SignUpBtn.js'
import style from '../css/homePage.css';



function Header() {
   
    
    return (
        <div className="header">


            
                
            


            <span>
                <h1 className="trimpa">Tripma</h1>
            </span>
            
            <span className="topnav">
                <p id="nav" href="#Fligth">
                    Flight
                </p>
                <p id="nav" href="#Hotels">
                    Hotels
                </p>
                <p id="nav" href="#Packages">
                    Packages
                </p>
                <SignInBtn/>
                <SignUpBtn/>
            </span>
        </div>
    );
}

export default Header;

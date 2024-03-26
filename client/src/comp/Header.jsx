import React, { useState } from 'react';
import SignIn from './SignIn.jsx';
import style from '../css/homePage.css';



function Header() {
   
    const [login,setLogin]=useState(false);
    return (
        <div className="header">


            <SignIn trigger={login}/>
                
            


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
                <a onClick={()=>setLogin(true)} id="log" href="#Sign in">
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

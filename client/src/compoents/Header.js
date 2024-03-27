import React, { useState } from 'react';
import SignIn from './SignIn.js';
import SignUp from './SignUp.js';
import style from '../css/homePage.css';



function Header() {
   
    const [login,setLogin]=useState(false);
    return (
        <div className="header">


            
                
            


            <span>
                <h1 className="trimpa">Tripma</h1>
            </span>
            <SignIn trigger={login} setTrigger={setLogin}/>
            {/* <SignUp trigger={login} setTrigger={setLogin}/> */}
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

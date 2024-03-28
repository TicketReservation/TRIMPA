import React, { useState } from 'react';
import SignInBtn from './SignInBtn.js';
import SignUpBtn from './SignUpBtn.js'
import style from '../css/homePage.css';
import { NavLink } from 'react-router-dom';



function Header() {
   
    const [view,setView]=useState('signIn')


    const switchView=(v)=>{
        setView(v)
    }

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
                
                {view==="signIn" && <SignInBtn/>}
                <SignUpBtn switchView={switchView}/>
            </span>
        </div>
    );
}

export default Header;

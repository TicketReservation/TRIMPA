import React, { useState } from 'react';
import SignInBtn from './SignInBtn.js';
import SignUpBtn from './SignUpBtn.js';
import style from '../css/homePage.css';
import { NavLink } from 'react-router-dom';
<<<<<<< HEAD

function Header() {
    const [view, setView] = useState('signIn');

    const switchView = (v) => {
        setView(v);
=======



function Header() {
   
    const [view,setView]=useState('signIn')


    const switchView=(v)=>{
        setView(v)
>>>>>>> 175deead37b20e4de7f4d88319a0cee156a6e66a
    }

    return (
        <div className="header">
<<<<<<< HEAD
            <span>
                <NavLink to="/" className="trimpa">Tripma</NavLink>
            </span>
            <span className="topnav">
                <NavLink to="/flight" id="nav">Flights</NavLink>
                <NavLink to="/hotels" id="nav">Hotels</NavLink>
                <NavLink to="/packages" id="nav">Packages</NavLink>
                {view === "signIn" && <SignInBtn/>}
=======


            
                
            

        
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
>>>>>>> 175deead37b20e4de7f4d88319a0cee156a6e66a
                <SignUpBtn switchView={switchView}/>
            </span>
        </div>
    );
}

export default Header;

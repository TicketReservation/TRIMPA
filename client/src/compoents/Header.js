import React, { useState } from 'react';
import SignInBtn from './SignInBtn.js';
import SignUpBtn from './SignUpBtn.js';
import { NavLink } from 'react-router-dom';
import UserInfo from './UserInfo.js';

function Header({switchView}) {
    const [view, setView] = useState("main");

    const toggle = (view) => {
        setView(view);
    }

    const logOut=()=>{
        localStorage.removeItem("jwtToken")
    }


    return (
        <div className="header">
            {view === "main" && (
                <>
                    <span>
                        <NavLink to="/" className="trimpa">Tripma</NavLink>
                    </span>

                    <span className="topnav">
                        <NavLink to="/flight" id="nav">Flights</NavLink>
                        <NavLink to="/hotels" id="nav">Hotels</NavLink>
                        <NavLink to="/packages" id="nav">Packages</NavLink>
                        <SignInBtn toggle={toggle}/>
                        <SignUpBtn />
                    </span>
                </>
            )}
            {view === "profile" && (
                <span className='topnav'>
                    <NavLink onClick={()=>switchView("update")} id='nav'>Profile</NavLink>
                    <a id='nav'onClick={()=>{logOut();toggle("main")}}>logout</a>
                </span>
            )}
            {view==="update"&&<UserInfo/>}
        </div>
    );
}

export default Header;

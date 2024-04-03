<<<<<<< HEAD
// import React, { useState } from 'react';
// import SignInBtn from './SignInBtn.js';
// import SignUpBtn from './SignUpBtn.js'
// import style from '../css/homePage.css';


=======
import React, { useState } from 'react';
import SignInBtn from './SignInBtn.js';
import SignUpBtn from './SignUpBtn.js';
import { NavLink } from 'react-router-dom';
>>>>>>> a9baaa55cfa46d47fadf75c4d91bf4fff6240369

<<<<<<< HEAD
// function Header() {
   
//     const [view,setView]=useState('signIn')


//     const switchView=(v)=>{
//         setView(v)
//     }

//     return (
//         <div className="header">


            
                
            

<<<<<<< HEAD

//             <span>
//                 <p className="trimpa">Tripma</p>
//             </span>
            
//             <span className="topnav">
//                 <p id="nav" href="#Fligth">
//                     Flight
//                 </p>
//                 <p id="nav" href="#Hotels">
//                     Hotels
//                 </p>
//                 <p id="nav" href="#Packages">
//                     Packages
//                 </p>
//                 {view==="signIn" && <SignInBtn/>}
//                 <SignUpBtn switchView={switchView}/>
//             </span>
//         </div>
//     );
// }
=======
        
            <span>
                <NavLink to="/" className="trimpa">Tripma</NavLink>
            </span>
            
            
            <span className="topnav">
                <NavLink to="/flight" id="nav">Flights</NavLink>
                <NavLink to="/flight" id="nav">Hotels</NavLink>
                <NavLink to="/packages" id="nav">Packages</NavLink>
                <SignInBtn/>
                <SignUpBtn />
            </span>
=======
function Header() {
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
                <>
                <span>
                    <NavLink className="trimpa">Tripma</NavLink>
                </span>
                <div className='topnav'>
                    <NavLink to="/flight" id="nav">Flights</NavLink>
                    <NavLink to="/hotels" id="nav">Hotels</NavLink>
                    <NavLink to="/packages" id="nav">Packages</NavLink>
                    <NavLink to='profile' id='nav'>Profile</NavLink>
                    <a id='nav'onClick={()=>{logOut();toggle("main")}}>logout</a>
                </div>
                </>
            )}
>>>>>>> b949f90d42aff9e80b9b4d3eeb86efa0dc582ec9
        </div>
    );
}
>>>>>>> a9baaa55cfa46d47fadf75c4d91bf4fff6240369

// export default Header;

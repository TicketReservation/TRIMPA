import React from 'react';
import flightdashboard from '../css/flightdashboard.css'
function FlightDashboard(props) {
    return (
        <div className="admin-dashboard">
        <div className="sidebar">
          
          
            {/* <button>Dashboard</button><br></br> */}
            <button onClick={()=>props.changeView("UserDashboard")}>USERS</button><br></br>
            <button  onClick={()=>props.changeView("FlightDashboard")}>FLIGHTS</button><br></br>
            <button onClick={()=>props.changeView("StaticsDashboard")}>STATISTICS</button><br></br>
         
        </div>
        <div className="content">
        <h1 className="title">FLIGHTS Dashboard</h1>

        </div>
        <div className="threedivs">
        <div  className="div2">hello</div>
        <div  className="div3">FLIGHTS</div>
        <div  className="div4">FLIGHTS</div>
        </div>
        </div>
      );
}

export default FlightDashboard;
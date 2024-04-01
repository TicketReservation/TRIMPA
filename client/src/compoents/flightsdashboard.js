import React from 'react';
import style from '../css/flightdashboard.css'
import flightimage from '../img/pngegg.png'
function FlightDashboard(props) {
    return (
        <div className="admin-dashboard">
        <div className="sidebar">
          
          
            {/* <button>Dashboard</button><br></br> */}
            <button onClick={()=>props.changeView("UserDashboard")}>USERS</button><br></br>
            <button  onClick={()=>props.changeView("FlightDashboard")}>FLIGHTS</button><br></br>
            <button onClick={()=>props.changeView("StaticsDashboard")}>STATISTICS</button><br></br>
            <img className="photoflight" src={flightimage}></img>   

        </div>
        <div className="content">
        <h1 className="title">FLIGHTS Dashboard</h1>
        <h3 className="nmbrflights">FLIGHTS FOR THIS DAY : {props.flight.length}</h3>

            
        <div className="content">
    
    <button onClick={()=>props.changeView("addflight")}>ADD FLIGHT</button>
    <div  className="div1"> 
    <ul>
    

    {props.flight.map((onefly) =>
    <div key={onefly.id}>
      <li className="user-item">
      <img className='user-image' src={onefly.imgUrl} alt="flight"></img>
      <div className='user-details'>
        <h1 className='user-name'>COMPANY NAME : {onefly.companyName} </h1>
        <h1 className='user-name'> DESCRIPTION : {onefly.description} </h1>
        <h1 className='user-name'> DESTINATION : {onefly.destination}</h1>

        <h1 className='user-name'>DEPARTURE :{onefly.departure} ---- ARRIVAL:{onefly.arrival} </h1>
        <h1 className='user-name'>PRICE :{onefly.price} </h1>

        <button onClick={()=>props.deleteflight(onefly.id)}>Delete</button>
        

      </div>
    </li>
     
      </div>
    )}
    </ul>


    </div>
    </div></div>
        </div>
       
        
      );
}

export default FlightDashboard;
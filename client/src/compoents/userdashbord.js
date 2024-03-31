import React ,{useState} from 'react';
import '../css/userdashbord.css'
import FlightDashboard from './flightsdashboard';
import StaticsDashboard from './staticsdashbord';
import axios from 'axios';

import Adduser from './adduserdashbord';

function UserDashboard(props) {
   
    
   
    
      //  const renderView = () => {
      //   if (view === "FlightDashboard") {
      //     return <FlightDashboard changeView={changeView} />;
      //   }
      //   else if (view === "StaticsDashboard"){
      //   return <StaticsDashboard changeView={changeView} />
      //   }
      //   else if (view === "UserDashboard"){
      //       return <UserDashboard changeView={changeView} data={data} deletee={deletee} add={add} />
      //       }
      //       else if (view === "add"){
      //           return <Adduser changeView={changeView} data={data} deletee={deletee} add={add} />
      //           }
      //     }
  return (
    <div className="admin-dashboard">
    <div className="sidebarr">
      
      

        <button onClick={()=>props.changeView("UserDashboard")}>USERS</button><br></br>
        <button  onClick={()=>props.changeView("FlightDashboard")}>FLIGHTS</button><br></br>
        <button onClick={()=>props.changeView("StaticsDashboard")}>STATISTICS</button><br></br>
     
    </div>
    <div className="content">
    <h1 className="title">Admin Dashboard</h1>
    <button onClick={()=>props.changeView("add")}>ADD USER</button>
    <div  className="div1"> 
    <ul>

    {props.data.map((user) =>
    <div key={user.id}>
      <li className="user-item">
      <img className='user-image' src={user.picture} alt="User"></img>
      <div className='user-details'>
        <h1 className='user-name'>NAME :{user.Name} ---- EMAIL:{user.email} ---- PASSWORD:{user.password}</h1>
     

        <button onClick={()=>props.deletee(user.id)}>Delete</button>
        

      </div>
    </li>
    
      </div>
    )}
    </ul>


    </div>
  
    </div></div>
  );
}

export default UserDashboard;

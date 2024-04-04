import React from 'react';
import Flightdashboard from '../css/flightdashboard.css'
import photostat from '../img/pngegg.png'
function StaticsDashboard(props) {
  console.log("data",props.data)
  const dataLength = props.data ? props.data.length : 0;
const flightLength = props.flight ? props.flight.length : 0;

    return (
        <div className="admin-dashboard">
        <div className="sidebar">
          
          
            {/* <button>Dashboard</button><br></br> */}
            <button onClick={()=>props.changeView("UserDashboard")}>USERS</button><br></br>
            <button  onClick={()=>props.changeView("FlightDashboard")}>FLIGHTS</button><br></br>
            <button onClick={()=>props.changeView("StaticsDashboard")}>STATISTICS</button><br></br>
         
        </div>
        <div className="content">
        {/* <div  className="div1">
    <div className="divvv">
    
    </div>
    <div className="divvv">
    
    </div>
    <div className="divvv">
    
    </div>
    <div className="divvv">
    </div>
     */}
     <div class="wrapper-container">
  <div class="row">
    <div class="col-lg-12">
    <h1 className="title">STATICS Dashboard</h1>    </div>
  </div>
  <div class="row">
    <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
      <a class="dashboard-stat red" href="#">
        <div class="visual">
          <i class="fa fa-usd"></i>
        </div>
        <div class="details">
          <div class="number">
            <span>{props.data.length}</span>
          </div>
          <div class="desc">Total VISITORS </div>
        </div>
      </a>
    </div>
    <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
      <a class="dashboard-stat blue" href="#">
        <div class="visual">
          <i class="fa fa-bar-chart-o"></i>
        </div>
        <div class="details">
          <div class="number">
            <span>{props.flight.length}</span>
          </div>
          <div class="desc">FLIGHTS/week</div>
        </div>
      </a>
    </div>
    <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
      <a class="dashboard-stat hoki" href="#">
        <div class="visual">
          <i class="fa fa-credit-card"></i>
        </div>
        <div class="details">
          <div class="number">
            <span>+ 53%</span>
          </div>
          <div class="desc">Popularity</div>
        </div>
      </a>
    </div>
    <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
      <a class="dashboard-stat purple" href="#">
        <div class="visual">
          <i class="fa fa-comments"></i>
        </div>
        <div class="details">
          <div class="number">
            <span>6890</span>
          </div>
          <div class="desc">Good Feedback</div>

        </div>
      </a>
    </div>
    {/* <h1 className='title'>OUR HIERARCHY</h1>
    <img className="photostat" src={photostat}></img> */}

  </div>
</div>
        </div>
        {/* <div className="threedivs">
        <div  className="div2">helloooooo</div>
        <div  className="div3">hellooooo</div>
        <div  className="div4">hellooooo</div>
        </div> */}
       

        </div>
      )
}

export default StaticsDashboard
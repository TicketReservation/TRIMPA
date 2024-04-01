import React from 'react';
import { useState,useEffect } from 'react';
// import Header from './compoents/Header';
// import MainPage from './compoents/MainPage'
import './App.css';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'; 

import Header from './compoents/Header';
import SearchBar from './compoents/SearchBar';
import "./css/homePage.css"

import './App.css';

import MainPage from './compoents/MainPage'
// import Seats from './compoents/seats';
import Flights from './compoents/Flights'
import Footer from './compoents/Footer';
import Information from './compoents/Information';
import Revieux from './compoents/Revieux';
import Seats from './compoents/seats'
import axios from 'axios'
import AdminDashboard from './compoents/admindashboard';

import Paye from './compoents/Paye'
import FlightDeals from './compoents/FlightDeals'
// import Revieux from './compoents/Revieux';

function App() {

  const [sit ,setsit] = useState(false)
  const [onesitdata,setonesitdata]=useState([])
  
  
  return (
    <div>
      
       {/* <header>
      Join Tripma today and save up to 20% on your fligth using code TRAVEL at checkout. Promotion valid for new users only.

      </header> */}
 {/* <Paye/> */}
      {/* <Header/>
      <MainPage/> */}
 <AdminDashboard   />
     {/* <FlightDeals/> */}
    {/* < Information/> */}
     {/* <Revieux />  */}
   {/* <Footer/>   */}


    </div>
  );

  
}

function FlightPage() {
  return (
    <>
      <FlightDeals />
      <Revieux />
      <Footer />
    </>
  );
}
export default App;
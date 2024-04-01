import React from 'react';
import { useState,useEffect } from 'react';

import './App.css';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'; 

import Header from './compoents/Header';
import SearchBar from './compoents/SearchBar';
import "./css/homePage.css"
import FlightDeals from './compoents/FlightDeals'
import MainPage from './compoents/MainPage'
import Flights from './compoents/Flights'
import Footer from './compoents/Footer';
import Information from './compoents/Information';
import Revieux from './compoents/Revieux';
import Seats from './compoents/seats'
import axios from 'axios'
import AdminDashboard from './compoents/admindashboard';
import Paye from './compoents/Paye'

function App() {

  const [sit ,setsit] = useState(false)
  const [onesitdata,setonesitdata]=useState([])

  const [flights, setFlights] = useState([])
  const flightList = ()=>{
      axios.get("http://localhost:3000/api/flight")
      .then((res)=>{
        console.log("App log",res)

        const flightsdata = res.data
        setFlights(flightsdata)
  })
      .catch((error)=>console.log(error) )

  }
  useEffect(() => {
      flightList()
    }, [])
  
  return (
    <div>
      {/* <Header/> */}
<Flights flights={flights}/>
       {/* <header>
      Join Tripma today and save up to 20% on your fligth using code TRAVEL at checkout. Promotion valid for new users only.

      </header> */}
 {/* <Paye/> */}
      {/* <MainPage/>  */}
     {/* <SearchBar/> */}
 {/* <AdminDashboard   /> */}
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
      {/* <FlightDeals /> */}
      <Revieux />
      <Footer />
    </>
  );
}

export default App;
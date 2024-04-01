import React from 'react';
import { useState,useEffect } from 'react';
import Header from './compoents/Header';
import './App.css';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'; 
import axios from 'axios';

import SearchBar from './compoents/SearchBar';
import "./css/homePage.css"

import './App.css';

import MainPage from './compoents/MainPage'
import Seats from './compoents/seats';
import Flights from './compoents/Flights'
import Footer from './compoents/Footer';
import Information from './compoents/Information';
import Revieux from './compoents/Revieux';







function App() {

  // const [sit ,setsit] = useState(false)
  // const [onesitdata,setonesitdata]=useState([])
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


    
  console.log("this is flights from app", flights);

  
  return (
    <div>
      
       <header>
      Join Tripma today and save up to 20% on your fligth using code TRAVEL at checkout. Promotion valid for new users only.

      </header>

 {/* <Paye/> */}
      {/* <Header/>
      <MainPage/> */}
 {/* <AdminDashboard/> */}
     {/* <FlightDeals/> */}
    {/* < Information/> */}
     {/* <Revieux />  */}
    < SearchBar />
     <Flights flights={flights}/>




   <Footer/>  


    </div>
  );

  
}

// function FlightPage() {
//   return (
//     <>
//       <FlightDeals/>
//       <Revieux/>
//       <Footer/>
//     </>
//   );
// }
export default App;
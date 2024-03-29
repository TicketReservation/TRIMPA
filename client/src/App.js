<<<<<<< HEAD
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'; 

=======

import React, {useState,useEffect} from 'react';
import ReactDOM from 'react-dom'
>>>>>>> 175deead37b20e4de7f4d88319a0cee156a6e66a
import Header from './compoents/Header';
import MainPage from './compoents/MainPage'
import Seats from './compoents/seats';
import Footer from './compoents/Footer';
import Information from './compoents/Information';
<<<<<<< HEAD
import Paye from './compoents/Paye'
import FlightDeals from './compoents/FlightDeals'
import Revieux from './compoents/Revieux';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <MainPage />
      <Routes>
        <Route path="/seats" element={<Seats />} />
        <Route path="/payment" element={<Paye />} />
        <Route path="/flight" element={<FlightPage />} />
      </Routes>
    </BrowserRouter>
  );
=======
import Flights from './compoents/Flights';
import Paye from './compoents/Paye'


import axios from 'axios';

function App() {
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
  

  
  
  
  
  
  
  
  
  
  
  return <>
  <header>
      Join Tripma today and save up to 20% on your fligth using code TRAVEL at checkout. Promotion valid for new users only.
      </header>
      <Header/>
      {/* <MainPage/> */}
      <Flights  flights={flights}/>
</>

  
    //  {/* <Footer/> */}


  
>>>>>>> 175deead37b20e4de7f4d88319a0cee156a6e66a
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
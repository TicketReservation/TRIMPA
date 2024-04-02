import React, { useState, useEffect } from 'react';
import { BrowserRouter as BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Header from './compoents/Header';
import MainPage from './compoents/MainPage';
import FlightDeals from './compoents/FlightDeals';
import Revieux from './compoents/Revieux';
import Footer from './compoents/Footer';
import Paye from './compoents/Paye';
import Flights from './compoents/Flights'
import Information from './compoents/Information';
import Seats from './compoents/seats'
// import confirmation from './compoents/confirmation';

function App() {
  // const [flights, setFlights] = useState([]);

  // useEffect(() => {
  //   const flightList = () => {
  //     axios.get("http://localhost:3000/api/flight")
  //       .then((res) => {
  //         console.log("this is flights component data", res);
  //         const flightsdata = res.data;
  //         setFlights(flightsdata);
  //       })
  //       .catch((error) => console.log(error));
  //   };
  //   flightList();
  // }, []);

  return (
    <div>
      <BrowserRouter>
          <Header />
          <MainPage />
        <Routes>
        
        <Route path="/flight" element={<FlightPage />} />
        <Route path="/information" element={<Information />} />
        <Route path="/seats" element={<Seats />} />

          <Route path="/hotel" element={<HotelPage />} />
          <Route path="/payment" element={<Paye />} />
        </Routes>
      </BrowserRouter>
    </div>
  );


function FlightPage() {
  return (
    <>
     <Flights  />
     <br/>
      <Revieux />
      {/* <Footer /> */}
    </>
  );
}



function HotelPage() {
  return (
    <>
      <FlightDeals />
      <Revieux />
      <Footer />
    </>
  );
}
}
export default App;
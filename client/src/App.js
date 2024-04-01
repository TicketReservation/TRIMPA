import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
import SearchBar from './compoents/SearchBar';

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

  
  const searchFlights = async (departure, destination) => {
    try {
      const res = await axios.get(`http://localhost:3000/api/flight/${departure}/${destination}`);
      console.log(res.data,'hhhhhhhhhhhhhhh')
      setFlights(res.data);

    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div>
      <BrowserRouter>
          

        <Routes>
        <Route path="/" element={<AccPage />} />
        
        <Route path="/flight" element={<FlightPage />} />
        <Route path="/information" element={<InfoPage />} />
        <Route path="/seats" element={<Seats />} />

          <Route path="/hotels" element={<HotelPage />} />
          <Route path="/payment" element={<PayPgae />} />
        </Routes>
      </BrowserRouter>
    </div>
  );


function FlightPage() {
  return (
    <>


    <Header />
    <SearchBar searchFlights={searchFlights}/>
    <br/><br/>
     <Flights  flights={flights} />

     <br/>
      <Revieux /><br/>
      <Footer />
    </>
  );
}

function PayPgae() {
  return (
    <>
    <Header />
    <br/><br/>
      <Paye />
    </>
  );
}

function InfoPage() {
  return (
    <>
    <Header />
    <br/><br/>
      <Information />
    </>
  );
}

function AccPage() {
  return (
    <>
    <Header />
     <MainPage />
    </>
  );
}



function HotelPage() {
  return (
    <>
    <Header />
    <br/><br/>
      <FlightDeals />
      <Revieux />
      <Footer />
    </>
  );
}
}
export default App;
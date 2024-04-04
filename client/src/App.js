import React, { useState, useEffect } from 'react';
import { BrowserRouter as BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import './App.css';
import Profile from './compoents/Profile';
import Header from './compoents/Header';
import MainPage from './compoents/MainPage';
import FlightDeals from './compoents/FlightDeals';
import Revieux from './compoents/Revieux';
import Footer from './compoents/Footer';
import Paye from './compoents/Paye';
import Flights from './compoents/Flights';
import Information from './compoents/Information';
import Seats from './compoents/seats';
import SearchBar from './compoents/SearchBar';
import Confirmation from './compoents/confirmation';
import Secondseats from './compoents/Secondseats';
import Admin from './compoents/AdminDashboard';
function App() {






  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AccPage />} />
          <Route path="/flight" element={<FlightPage />} />
          <Route path="/confir" element={<ConfirPgae />} />
          <Route path="/Second" element={<SecPage />} />
          <Route path="/Admin" element={<Admin />} />

          <Route path="profile" element={<ProfPage />} />
          <Route path="/information" element={<InfoPage />} />
          <Route path="/seats" element={<SeatPage />} />
          <Route path="/hotels" element={<HotelPage />} />
          <Route path="/payment" element={<Paye />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
  function SeatPage() {
    return (
      < Seats/>
    );
  }
  function SecPage() {
    return (
      
        < Secondseats/>
        
    );
  }

  function ConfirPgae() {
    return (
      <>
        <Header />
        <br /><br />
        <Confirmation />
        <br /><br />

        <br />
        <Footer />
      </>
    );
  }
  function FlightPage() {
    return (
      <>
        <Header />
        <SearchBar />
        <br /><br />
       <Flights  /> 
        <br />
        <Revieux /><br />
        <Footer />

      </>
    );
  }


  function ProfPage() {
    return (
      <>
      <Header/>
      <br/>
        < Profile/>

      </>
    );
  }
  function AccPage() {
    return (
      <>
        <Header />
      <MainPage/>
        <br /><br />
      </>
    );
  }

  function InfoPage() {
    return (
      <>
      <Header/>
        <Information />
      </>
    );
  }

  function HotelPage() {
    return (
      <>
      <Header/>
        <FlightDeals />
        <Revieux />
        <Footer />

      </>
    );
  }
}

export default App
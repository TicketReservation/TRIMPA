import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'; 

import Header from './compoents/Header';
import SearchBar from './compoents/SearchBar';
import "./css/homePage.css"

import './App.css';
// import Footer from './compoents/Footer';
// import Information from './compoents/Information';

import MainPage from './compoents/MainPage'
import Seats from './compoents/seats';
import Footer from './compoents/Footer';
import Information from './compoents/Information';
import Paye from './compoents/Paye'
import FlightDeals from './compoents/FlightDeals'
import Revieux from './compoents/Revieux';
import Profile from './compoents/Profile';

function App() {
  return <BrowserRouter>
    <header>
      Join Tripma today and save up to 20% on your fligth using code TRAVEL at checkout. Promotion valid for new users only.
      </header>
      <Header/>
      
      
      <div className="landing">
    <p className='saying'>It's more than</p><p className='saying'> just a trip</p>
    <SearchBar/>
  </div>


      <Routes>
      <Route path="/seats" element={<Seats />} /> 
        <Route path="/payment" element={<Paye />} /> 
        <Route path="/flight" element={<FlightPage />} />
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
    </BrowserRouter>
  
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
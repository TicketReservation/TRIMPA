import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'; 

import Header from './compoents/Header';
import MainPage from './compoents/MainPage'
import Seats from './compoents/seats';
import Footer from './compoents/Footer';
import Information from './compoents/Information';
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
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import axios from 'axios';
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
// import SearchBar from './compoents/SearchBar';


function App() {
  
  // const [flights, setFlights] = useState([]);

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
      <Header />
      {/* <SearchBar searchFlights={searchFlights}/> */}
      <br/><br/>
       <Flights />
       <br/>
        <Revieux /><br/>
        <Footer />
      </>
    );
  }
  
  // function InfoPage() {
  //   return (
  //     <>
  //     <Header />
  //     <br/><br/>
  //       <Information />
  //     </>
  //   );
  // }
  
  // function AccPage() {
  //   return (
  //     <>
  //     <Header />
  //      <MainPage />
  //     </>
  //   );
  // }
  
  
  
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
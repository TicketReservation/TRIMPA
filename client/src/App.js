import React from 'react';
import Header from './compoents/Header';
import MainPage from './compoents/MainPage'
import './App.css';
import FlightDeals from './compoents/FlightDeals';
import Footer from './compoents/Footer';
// import Information from './compoents/Information';
import Flights from './compoents/Flights';import Revieux from './compoents/Revieux';

function App() {
  return (
    <div>
       <header>
      Join Tripma today and save up to 20% on your fligth using code TRAVEL at checkout. Promotion valid for new users only.
      </header>
      <Header/>
      {/* <MainPage/> */}
     {/* <FlightDeals/> */}
     {/* < Information/> */}
  
     {/* <Revieux />  */}
     <Flights/>
    <Footer/>
    
    </div>
  );

  
}

export default App;

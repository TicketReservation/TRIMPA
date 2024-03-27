import React from 'react';
import Header from './compoents/Header';
import MainPage from './compoents/MainPage'
import './App.css';
<<<<<<< HEAD
// import Footer from './compoents/Footer';
import Information from './compoents/Information';
import Paye from './compoents/Paye';
function App() {
  return (
    <div className="App">
     <h1>hello</h1>s
    < Information/>
    <Paye />
  
     {/* <Footer/> */}
=======
import FlightDeals from './compoents/FlightDeals';
import Footer from './compoents/Footer';
// import Information from './compoents/Information';
import Revieux from './compoents/Revieux';

function App() {
  return (
    <div>
       <header>
      Join Tripma today and save up to 20% on your fligth using code TRAVEL at checkout. Promotion valid for new users only.
      </header>
      <Header/>
      <MainPage/>
     <FlightDeals/>
     {/* < Information/> */}
  
     <Revieux /> 
   <Footer/> 
>>>>>>> 6a2ea6a97dc321d1d9b7d1b63f9c39cad319c241
    </div>
  );

  
}

export default App;

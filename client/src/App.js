<<<<<<< HEAD

import React from 'react';
// import ReactDOM from 'react-dom'
// import Header from './compoents/Header';
// import MainPage from './compoents/MainPage'
import './App.css';
// import Footer from './compoents/Footer';
// import Information from './compoents/Information';
// import Flights from './compoents/Flights';
import Paye from './compoents/Paye'


// import axios from 'axios';

function App() {
    // const [flights, setFlights] = useState([])
    // const flightList = ()=>{
    //     axios.get("http://localhost:3000/api/flight")
    //     .then((res)=>{
    //       console.log("App log",res)

    //       const flightsdata = res.data
    //       setFlights(flightsdata)
    // })
    //     .catch((error)=>console.log(error) )
 
    // }
    // useEffect(() => {
    //     flightList()
    //   }, [])
  

  
  
  
  
  
  
  
  
  
  
  return <>

  <Paye />
  {/* {/* <header>
      Join Tripma today and save up to 20% on your fligth using code TRAVEL at checkout. Promotion valid for new users only.
      </header>
      <Header/>
      {/* <MainPage/> */}
      {/* <Flights  flights={flights}/>  */}
</>

  
    //  {/* <Footer/> */}


=======
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'; 

import Header from './compoents/Header';
import SearchBar from './compoents/SearchBar';
import "./css/homePage.css"

import './App.css';

import MainPage from './compoents/MainPage'
import Seats from './compoents/seats';
import Flights from './compoents/Flights'
import Footer from './compoents/Footer';
import Information from './compoents/Information';
import Paye from './compoents/Paye'
import FlightDeals from './compoents/FlightDeals'
import Revieux from './compoents/Revieux';

function App() {
  return <BrowserRouter>
  <Flights/>
  {/* <header>
      Join Tripma today and save up to 20% on your fligth using code TRAVEL at checkout. Promotion valid for new users only.
      </header>
      <Header />
      <MainPage />
      <Routes>
        <Route path="/payment" element={<Paye />} /> 
        <Route path="/flight" element={<FlightPage />} />
      </Routes>  */}
    </BrowserRouter>
>>>>>>> a9baaa55cfa46d47fadf75c4d91bf4fff6240369
  
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
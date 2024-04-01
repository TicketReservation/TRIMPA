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
import SearchBar from './compoents/SearchBar';
import UserInfo from './compoents/UserInfo';

function App() {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    const flightList = () => {
      axios.get("http://localhost:3000/api/flight")
        .then((res) => {
          console.log("App log", res);
          const flightsdata = res.data;
          setFlights(flightsdata);
        })
        .catch((error) => console.log(error));
    };
    flightList();
  }, []);

  
  const searchFlights = async (departure, destination) => {
    try {
      const res = await axios.get(`http://localhost:3000/api/flight/${departure}/${destination}`);
      console.log(res.data,'hhhhhhhhhhhhhhh')
      setFlights(res.data);

    } catch (err) {
      console.log(err);
    }
  }


  const [view,setView]=useState("main")


  const switchView=(view)=>{
    setView=view
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

          <Route path="/profil" element={<ProfilePage />} />
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
    {/* <Header /> */}
    <Header switchView={switchView}/>

{view==="main"&&(
  <div className="landing">
  <p className='saying'>It's more than</p><p className='saying'> just a trip</p>
  <SearchBar/>
</div>
)}
{view==="update"&&(<UserInfo/>)}
     {/* <MainPage /> */}
    </>
  );
}


function ProfilePage() {
  return (
    <>
    <Header />
    <br/><br/>
     
    <UserInfo/>
      <Footer />
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

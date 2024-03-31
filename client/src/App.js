<<<<<<< HEAD
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
=======
import React,{useState} from 'react';

import './App.css';

import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'; 

import Header from './compoents/Header';
import SearchBar from './compoents/SearchBar';
import "./css/homePage.css"

import MainPage from './compoents/MainPage'
import Seats from './compoents/seats';
import Flights from './compoents/Flights'
import Footer from './compoents/Footer';
import Information from './compoents/Information';
import axios from 'axios'
import AdminDashboard from './compoents/admindashboard';

import Paye from './compoents/Paye'
import FlightDeals from './compoents/FlightDeals'
import Revieux from './compoents/Revieux';
import UserDashboard from './compoents/userdashbord';

function App() {

  const [sit ,setsit] = useState(false)
  const [onesitdata,setonesitdata]=useState([])
  
  
  return (
    <div>
      {/* <UserDashboard/> */}
      {/* <Flights/> */}
      
       {/* <header>
      Join Tripma today and save up to 20% on your fligth using code TRAVEL at checkout. Promotion valid for new users only.
<<<<<<< HEAD
      </header>
      <Header />
      <MainPage />
      <Routes>
        <Route path="/payment" element={<Paye />} /> 
        <Route path="/flight" element={<FlightPage />} />
      </Routes>  */}
    </BrowserRouter>


      </header> */}
 {/* <Paye/> */}
      {/* <Header/>
      <MainPage/> */}
 <AdminDashboard   />
     {/* <FlightDeals/> */}
    {/* < Information/> */}
     {/* <Revieux />  */}
   {/* <Footer/>   */}


    </div>
  );

>>>>>>> 2341628c33cb6db0e83bfe5e283a184bfd223bd4
  
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
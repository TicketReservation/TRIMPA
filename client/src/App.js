
import React, {useState,useEffect} from 'react';
import ReactDOM from 'react-dom'
import Header from './compoents/Header';
import MainPage from './compoents/MainPage'
import './App.css';
// import Footer from './compoents/Footer';
import Information from './compoents/Information';
import Flights from './compoents/Flights';
import Paye from './compoents/Paye'


import axios from 'axios';

function App() {
    const [flights, setFlights] = useState([])
    const flightList = ()=>{
        axios.get("http://localhost:3000/api/flight")
        .then((res)=>{
          console.log("App log",res)

          const flightsdata = res.data
          setFlights(flightsdata)
    })
        .catch((error)=>console.log(error) )
 
    }
    useEffect(() => {
        flightList()
      }, [])
  

  
  
  
  
  
  
  
  
  
  
  return <>
  <header>
      Join Tripma today and save up to 20% on your fligth using code TRAVEL at checkout. Promotion valid for new users only.
      </header>
      <Header/>
      {/* <MainPage/> */}
      <Flights  flights={flights}/>
</>

  
    //  {/* <Footer/> */}


  
}

export default App;

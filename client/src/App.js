import React from 'react';
import ReactDOM from 'react-dom'
import Header from './compoents/Header';
import SearchBar from './compoents/SearchBar';
import "./css/homePage.css"

import './App.css';
// import Footer from './compoents/Footer';
// import Information from './compoents/Information';

import Paye from './compoents/Paye'
function App() {
  return <>
  <header>
      Join Tripma today and save up to 20% on your fligth using code TRAVEL at checkout. Promotion valid for new users only.
      </header>
      <Header/>
      <div className="landing">
    <p className='saying'>It's more than</p><p className='saying'> just a trip</p>
    <SearchBar/>
  </div>
</>

  
    //  {/* <Footer/> */}

  
}

export default App;

<<<<<<< HEAD
import React from "react";
import "../css/mainfolter.css";

function MainPage() {
  return (
    <div id="aabc">
    <div className="landnig">
      <div className="saying-container">
        <p className="saying">It's more than</p>
        <p className="saying">just a trip</p>
      </div>
      <div className="input-container">
<center>
        <input className="inputs" type="text" placeholder=" From where?" />
        <input className="inputs" type="text" placeholder="Where to?" />
        <input className="inputs" type="date" placeholder="Where to?" />

        <input className="inputs" type="number" placeholder="adult" />
        <button className="searchBtn">Search</button></center>
      </div>
    </div></div>
  );
=======
import * as React from 'react';
import "../css/homePage.css"
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { SingleInputDateRangeField } from '@mui/x-date-pickers-pro/SingleInputDateRangeField';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';

function MainPage() {
    
  return<div className="landing">
    <p className='saying'>It's more than</p><p className='saying'> just a trip</p>
    <span className='filter'>
    <input className='inputs' type="text"placeholder='From where?'/>
    <input className='inputs' type="text"placeholder='Where to?'/>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['SingleInputDateRangeField']}>
        <DateRangePicker
          slots={{ field: SingleInputDateRangeField }}
          name="allowedRange"
        />
      </DemoContainer>
    </LocalizationProvider>
    <input className='inputs' placeholder='Quantity?' id='nbrInp' type="number"/>
    <button className="searchBtn">Search</button>
    </span>
  </div>
>>>>>>> 175deead37b20e4de7f4d88319a0cee156a6e66a
}

export default MainPage;

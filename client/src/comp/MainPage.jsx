import React,{useState} from "react"
// import * as React from 'react';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
// import { SingleInputDateRangeField } from '@mui/x-date-pickers-pro/SingleInputDateRangeField';
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import style from "../css/homePage.css"
function MainPage() {
    
  return<div className="landing">
    <p className='saying'>It's more than</p><p className='saying'> just a trip</p>
    <span className='filter'>
    <input className='inputs' type="text"placeholder='From where?'/>
    <input className='inputs' type="text"placeholder='Where to?'/>
    {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['SingleInputDateRangeField']}>
        <DateRangePicker
          slots={{ field: SingleInputDateRangeField }}
          name="allowedRange"
        />
      </DemoContainer>
    </LocalizationProvider> */}
    <input className='inputs' type="number"/>
    <button className="btn">Search</button>
    </span>
  </div>
}

export default MainPage

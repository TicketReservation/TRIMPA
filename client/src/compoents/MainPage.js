
import * as React from 'react';
import "../css/homePage.css"
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { SingleInputDateRangeField } from '@mui/x-date-pickers-pro/SingleInputDateRangeField';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import SearchBar from './SearchBar';

function MainPage() {
    
  return<div className="landing">
    <p className='saying'>It's more than</p><p className='saying'> just a trip</p>
    <SearchBar/>
  </div>
}

export default MainPage;

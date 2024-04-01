import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import "../css/Flights.css";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import myImage from '../img/map.PNG';

const Flights = (props) => {
  const [showAll, setShowAll] = useState(false);
  const [selectedFlight, setSelectedFlight] = useState(null);

  const flightsToShow = showAll ? props.flights : props.flights.slice(0, 6);

  const handlePriceButtonClick = (flight) => {
    setSelectedFlight(selectedFlight === flight ? null : flight);
  };

  // Prepare the data for diagram
  const data = props.flights.map(flight => ({
    name: flight.arrival,
    price: flight.price
  }));

  return (
    <div className="dd">
      <div className="FilterBar">
        {/* Your filter bar JSX */}
      </div>

      <div className="bodyPage">
        <div className="rigtside">
          <h5>Choose a departing flight</h5>
          <div className={`flightsTable ${showAll ? 'expanded' : ''}`}>
            {flightsToShow.map((flight) => {
              const departureDate = new Date(flight.departure);
              const formattedDepartureDate = departureDate.toLocaleDateString();

              return (
                <div className="card" key={flight.id}>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex align-items-center">
                      <img className="companyimage" src={flight.imgUrl} alt={flight.name} />
                      <p>{flight.companyName}</p>
                      <p>{formattedDepartureDate}</p>
                      <p>$ {flight.price}</p>
                      <NavLink >  <button onClick={() => handlePriceButtonClick(flight)}>select</button></NavLink>
                    
                    </li>
                    {/* New card for payment */}
                    {selectedFlight === flight && (
                      <li className="list-group-item">
                        <div className="paymentCard">
                          <h5>{flight.companyName}</h5>
                          <p>Price: ${flight.price}</p>
                          <NavLink to="/information" id="nav">  <button onClick={() => handlePriceButtonClick(flight)}>Proceed to Payment</button></NavLink>

                        </div>
                       
                      </li>
                    )}
                  </ul>
                </div>
              );
            })}
          </div>
          <button className="buttonShowall" onClick={() => setShowAll(!showAll)}>
            {showAll ? 'Show less' : 'Show all flights'}
          </button>
          <div className="imagemap">
            <img src={myImage} alt="Description of the image" />
          </div>
        </div>

        {/* Additional JSX content */}
        <div className="leftSide">
         
<h5>Price grid (flexible dates)</h5>
      
      <div className="tableprice">
    <table className="table">
      <thead>
        <tr>
          <th>Company / Date</th>
          {props.flights.map((flight, index) => {
            const departureDate = new Date(flight.departure)
            const formattedDepartureDate = departureDate.toLocaleDateString()
            return <th key={index}>{formattedDepartureDate}</th> 
          })}
        </tr>
      </thead>
      <tbody>
        {props.flights.map((flight, index) => (
          <tr key={index}>
            <td>{flight.companyName}</td>
            {props.flights.map((innerFlight, innerIndex) => {
              if (innerFlight.companyName === flight.companyName && innerFlight.departure === flight.departure) {
                return <td key={innerIndex}>{innerFlight.price}</td>
              } else {
                return <td key={innerIndex}>-</td>
              }
            })}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  
  
  
  
  <h5>Price history</h5>
  <div className="Diagram">
    <LineChart className="linechart"
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5, right: 30, left: 20, bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      {/* <XAxis dataKey="name" /> */}
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="price" stroke="#8884d8" activeDot={{ r: 8 }} 
        shadow={{ stroke: 'PurpleBlue', strokeWidth: 10, opacity: 0.4 }} />
    </LineChart>
  </div>
  
  
  <div className="flightpagemessage">
  <h5 className="message">
    Price Rating, 
    <span style={{backgroundColor: '#5CD6C0', width: '100px', height: '26px', borderRadius: '4px', padding: '2px 8px', margin: '10px', display: 'inline-block'}}>
      <span style={{fontFamily: 'Nunito Sans', fontWeight: 600, fontSize: '18px', lineHeight: '24.55px', color: '#FFFFFF'}}>Buy soon</span>
    </span>           
  </h5>
  <p style={{fontFamily: 'Nunito Sans', fontWeight: 400, fontSize: '16px', lineHeight: '21.82px', margin: '8px', color: '#6E7491'}}>
    We recommend booking soon. The average cost of this flight is $750, but could rise 18% to $885 in two weeks.</p>
    <p style={{fontFamily: 'Nunito Sans', fontWeight: 400, fontSize: '16px', lineHeight: '21.82px', margin: '8px', color: '#A1B0CC'}}>
    Tripma analyzes thousands of flights, prices, and trends to ensure you get the best deal.
  </p>
  
  </div>
        </div>
      </div>

      {/* Additional JSX content */}
      <div className="Ccards">
        {/* Your additional card content JSX */}
      </div>
    </div>
  );
};

export default Flights;

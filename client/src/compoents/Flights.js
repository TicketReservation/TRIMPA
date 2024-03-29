import React,{ useState } from 'react'
// import ReactRoundedImage from "react-rounded-image"
import "../css/Flights.css"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'







const Flights = (props) => {
  const [showAll, setShowAll] = useState(false)
  const flightsToShow = showAll ? props.flights : props.flights.slice(0,6)

    // Prepare the data for diagram
     const data = props.flights.map(flight => ({
     name: flight.arrival,
     price: flight.price
      }))
    ///
  return (
    <div className="container" >
    <div className="FilterBar">
      <select>
        <option value="Max Price">Max Price</option>
      </select>

      <select>
        <option value="Shops">Shops</option>
      </select>

      <select>
        <option value="Times">Times</option>
      </select>

      <select>
        <option value="Airlines">Airlines</option>
      </select>

      <select>
        <option value="SeatsClass">Seats Class</option>
      </select>

      <select>
        <option value="More">More</option>
      </select>
    </div>
    
    
    
    
    
    {console.log(props.flights)}
<div className="bodyPage"> 


      <div className="rigtside " >
      <div className={`flightsTable ${showAll ? 'expanded' : ''}`} >
      {flightsToShow.map((flight) => {
        const departureDate = new Date(flight.departure)

        const formattedDepartureDate = departureDate.toLocaleDateString()

        return (
          <div className="card">
          <ul className="list-group list-group-flush">
            <li className="list-group-item d-flex align-items-center">
              <img className="companyimage" src={flight.imgUrl} alt={flight.name} />
              <p>{flight.companyName}</p>
              <p>{formattedDepartureDate}</p> 
              <p>{flight.price}</p>
            </li>
          </ul>
        </div>
        )
      })}
    </div> 
    <button className="buttonShowall" onClick={() => setShowAll(!showAll)}>
  {showAll ? 'Show less' : 'Show all flights'}
</button>
        
      </div>{/* // end of rightSide */}









    


    <div className="leftSide">








      
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

</div>{/* // leftSide end here */}


</div>   {/*  end of bodyPage */}
    </div> // end of container
  )
}

export default Flights
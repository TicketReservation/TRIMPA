import React, {  useEffect } from 'react';
import "../css/Flights.css";
import { LineChart, Line, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import myImage from '../img/map.PNG';
import { useSelector, useDispatch } from 'react-redux';
import { fetchFlights } from '../actions/flightsActions'; 
import { NavLink } from 'react-router-dom';
import { setShowAll } from '../reducers/flightsReducer';
import { setSelectedFlight } from '../reducers/flightsReducer';
import { setShowPaymentCard } from '../reducers/flightsReducer';
const Flights = () => {
  const dispatch = useDispatch();
  const flights = useSelector(state => state.flights.flights); 
  const showAll = useSelector(state => state.flights.showAll); 
const selectedFlight = useSelector(state => state.flights.selectedFlight);
const showPaymentCard = useSelector(state => state.flights.showPaymentCard);
  console.log("useSelector",flights);





  const flightsToShow = Array.isArray(flights) ? (showAll ? flights : flights.slice(0,6)) : [];
  console.log(flightsToShow);
  
  

  useEffect(() => {
    dispatch(fetchFlights());
  }, [dispatch]);



  const handleCardClick = (flight) => {
    dispatch(setShowAll(!showAll)); 
    dispatch(setSelectedFlight(flight));
    dispatch(setShowPaymentCard(true));
  };
  

  const handleShowAll = () => {
    dispatch(setShowAll(!showAll));
  };



  const handlePriceButtonClick = (flight) => {
    setSelectedFlight(selectedFlight === flight ? null : flight);
  };







/////////// Prepare the data for diagram
  let data = [];
  if (Array.isArray(flights)) {
    data = flights.map(flight => ({
      name: flight.arrival,
      price: flight.price
    }));
  }
////////////////////////////////////////







  return (
    <div className="dd">
      <div className="FilterBar">
        <select
          style={{
            width: '120px',
            height: '38px',
            borderRadius: '4px',
            border: '1px solid #CBD4E6',
            padding: '8px 12px 8px 16px',
          }}
        >
          <option value="Max Price">Max Price</option>
          {Array.isArray(flights) && flights.map((flight, index) => (
            <option key={index} value={flight.price}>
              {flight.price}
            </option>
          ))}
        </select>

        <select style={{
          width: '120px',
          height: '38px',
          borderRadius: '4px',
          border: '1px solid #CBD4E6',
          padding: '8px 12px 8px 16px',
        }}>
          <option value="Shops">Shops</option>
        </select>

        <select style={{
          width: '120px',
          height: '38px',
          borderRadius: '4px',
          border: '1px solid #CBD4E6',
          padding: '8px 12px 8px 16px',
        }}>
          <option value="Times">Times</option>
        </select>

        <select style={{
          width: '120px',
          height: '38px',
          borderRadius: '4px',
          border: '1px solid #CBD4E6',
          padding: '8px 12px 8px 16px',
        }}>
          <option value="Airlines">Airlines</option>
        </select>

        <select style={{
          width: '120px',
          height: '38px',
          borderRadius: '4px',
          border: '1px solid #CBD4E6',
          padding: '8px 12px 8px 16px',
        }}>
          <option value="SeatsClass">Seats Class</option>
        </select>

        <select style={{
          width: '120px',
          height: '38px',
          borderRadius: '4px',
          border: '1px solid #CBD4E6',
          padding: '8px 12px 8px 16px',
        }}>
          <option value="More">More</option>
        </select>
      </div>

      <div className="bodyPage"> 
        <div className="rigtside">
          <h5>Choose a departing flight</h5>
          <div className={`flightsTable ${showAll ? 'expanded' : ''}`} id={''}>
            {flightsToShow.map((flight) => {
              const departureDate = new Date(flight.departure);
              const formattedDepartureDate = departureDate.toLocaleDateString();

              return (
                <div className="cardofFlight" style={{ transform: selectedFlight === flight ? 'scale(0.95)' : 'scale(1)' }} onClick={() => handleCardClick(flight)} key={flight.id}>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex align-items-center" id={flight.id.toString()}>
                      <img className="companyimage" src={flight.imgUrl} alt={flight.name} />
                      <p>{flight.companyName}</p>
                      <p>{formattedDepartureDate}</p> 
                      <p>$ {flight.price}</p>
                    </li>
                  </ul>
                </div>
              );
            })}
          </div> 
          <button className="buttonShowall" onClick={handleShowAll}>
            {showAll ? 'Show less' : 'Show all flights'}
          </button>
          <div className="imagemap">
            <img src={myImage} alt="" />
          </div>
        </div>

        <div className="leftSide">
          {showPaymentCard ? (
            selectedFlight && (
              <li className="list-group-item">
                <div className="paymentCard">
                <img className="companyimage" src={selectedFlight.imgUrl} alt={selectedFlight.name} />
                  <h5>{selectedFlight.companyName}</h5>
                  <p>Price: ${selectedFlight.price}</p>
                  <NavLink to="/information" id="nav">
                    <button className="paymentbtn" onClick={() => handlePriceButtonClick(selectedFlight)}>Payment</button>
                  </NavLink>
                </div>
              </li>
            )
          ) : (
            <>
              <h5>Price grid (flexible dates)</h5>
              <div className="tableprice">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Company / Date</th>
                      {Array.isArray(flights) && flights.map((flight, index) => {
                        const departureDate = new Date(flight.departure);
                        const formattedDepartureDate = departureDate.toLocaleDateString();
                        return <th key={index}>{formattedDepartureDate}</th>;
                      })}
                    </tr>
                  </thead>
                  <tbody>
                    {Array.isArray(flights) && flights.map((flight, index) => (
                      <tr key={index}>
                        <td>{flight.companyName}</td>
                        {Array.isArray(flights) && flights.map((innerFlight, innerIndex) => {
                          if (
                            innerFlight.companyName === flight.companyName &&
                            innerFlight.departure === flight.departure
                          ) {
                            return <td key={innerIndex}>{innerFlight.price}</td>;
                          } else {
                            return <td key={innerIndex}>-</td>;
                          }
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h5>Price history</h5>
              <div className="Diagram">
                <LineChart
                  className="linechart"
                  width={500}
                  height={300}
                  data={data}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="price"
                    stroke="#8884d8"
                    activeDot={{ r: 8 }}
                    shadow={{ stroke: 'PurpleBlue', strokeWidth: 10, opacity: 0.4 }}
                  />
                </LineChart>
              </div>

              <div className="flightpagemessage">
                <h5 className="message">
                  Price Rating,
                  <span
                    style={{
                      backgroundColor: '#5CD6C0',
                      width: '100px',
                      height: '26px',
                      borderRadius: '4px',
                      padding: '2px 8px',
                      margin: '10px',
                      display: 'inline-block',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'Nunito Sans',
                        fontWeight: 600,
                        fontSize: '18px',
                        lineHeight: '24.55px',
                        color: '#FFFFFF',
                      }}
                    >
                      Buy soon
                    </span>
                  </span>
                </h5>
                <p
                  style={{
                    fontFamily: 'Nunito Sans',
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '21.82px',
                    margin: '8px',
                    color: '#6E7491',
                  }}
                >
                  We recommend booking soon. The average cost of this flight is $750, but could rise 18% to $885 in two weeks.
                </p>
                <p
                  style={{
                    fontFamily: 'Nunito Sans',
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '21.82px',
                    margin: '8px',
                    color: '#A1B0CC',
                  }}
                >
                  Tripma analyzes thousands of flights, prices, and trends to ensure you get the best deal.
                </p>
              </div>
            </>
          )}
        </div>
      </div>

      <div className="Ccards">
        <h5> People in San Francisco also searched for </h5>

        <div className="row">
          <div className="col-4">
            <div className="card">
              <img style={{width:"397px",height:"410px"}} src="https://s3-alpha-sig.figma.com/img/8125/5891/ea1583d20a3fb02917ad104af6587f3e?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oS2m5uq9ST9FfCanuvp78~qA5OIFapZw2-pWxZbks2NTGqZk9UhcfadV6HGRHEoDdgzXkuFyMgFbTAR2-EPi23ipkbJHQNZU4VWcEzgmYkOMpP1FZfPsxd06Mkbm~gfWOezVEg6VONCdNfJ3cVvNIaqwwvSFU5-GILHI--Yrd5UZwsRmHzTJag9obTV-n01lmsfu1m6GN3RHC1NXGieLVmPJ1Wb62zUQ4pZP24ImKw6fPHAAU6mRAXSEY3-Zt0SVeG7z8lRuY47tIwVI2BaQMfIpLBUKh9hXBaEHgisN3vGlRUh44laoWhI07shXBHWOGn0oebl3uV-u3I0i-QHSjw__" className="card-img-top" alt="Skyscrapers"/>
              <div className="card-body">
                <h5 className="card-title">
                  Shanghai, <span style={{fontFamily: 'Nunito Sans', fontWeight: 600, fontSize: '18px', lineHeight: '24.55px', color: '#605DEC'}}>China </span>           $598
                </h5>        
                <p className="card-text" >
                  An international city rich in culture    
                </p>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card" >
              <img style={{width:"397px",height:"410px"}}  src="https://s3-alpha-sig.figma.com/img/ca89/1425/cf94faaf7d2ea932cf5ce939144da65c?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FAX0ndMMeGWnaBHDMDb~Z2wtrZrnol8pR~VcynF4Dwdu-eo~0Ly235fkua6PzcYjlEStpKJ3umUhoIoeLvjeuSaEfgFJwjt8A2Iofd2b6uXnDnjUHyo71mHurxqIX~o-AWIp1ac6EWi1U9mGbdWuupnfYGjO1bPrLwvnhbwYjSqpj6iQFzVwSVco6U3ArOzByT8j6Uv2-g-mLqmFLC3pwu8Qz4yTZ8XeY8s1toUQ7pGFlnCD5obCMiggWcO7psk6QYwRig691OuYhDzPOadv~AZA04eiPs14DuitIoZ-joOu3r1EMJl5nMQ3L92CN0vqeK1H4VFq5K6JvQ7GHTEe2Q__" className="card-img-top" alt="Los Angeles Skyscrapers"/>
              <div className="card-body">
                <h5 className="card-title">Sydney Opera House, Sydney     $981</h5>
                <p className="card-text">Take a stroll along the famous harbor    </p>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card">
              <img  style={{width:"397px",height:"410px"}} src="https://s3-alpha-sig.figma.com/img/3fda/53a3/3484d5625d49b225735e042218c3677f?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=W7dS6We~OD~PLFDdWe5T~Wkv0uz~6jcZipCoMvY4~LdjAvayVROlPt1ofwnNSJBh24qQWnePRBHbAHL-jkD1iqgBOUSblggesmqU68g3ps7WuFkhXMZFnSTTUIAuN7kIhqjacUpmcjuZcWksI6bkfNoqHnZHlk4LsLbay8DxiQHhDXyurx2jGQezlYVlVyTTBFndWVCUOJbZJ2C5gR7HSspTSCi79gYwwliJ~5fDTOinB1sFOhkrA9YOYdfQTZkMyvp8go~CazaKbFi9fwrDyjPr7LStvxYZQ8CafUbEQO7NCDBK588wCdd2imjc7tjzYBvRC91IeVnhWKwvlqiKbg__" className="card-img-top" alt="Palm Springs Road"/>
              <div className="card-body">
                <h5 className="card-title">Kōdaiji Temple, Kyoto    $633</h5>
                <p className="card-text">
                  Step back in time in the Gion district
                </p>
              </div>
            </div>
          </div>
        </div> 
      </div> 
    </div>
  );
}



export default Flights;
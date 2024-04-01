import React, { useState } from 'react';
import style from '../css/information.css';

function Information() {
  const [comteur, setComteur] = useState(0);

  const pls = (event) => {
    event.preventDefault();
    setComteur(comteur + 1);
  }
  
  const mns = (event) => {
    event.preventDefault();
    setComteur(comteur - 1);
  }
  



  return (
    <div className="container">
      <h4>Passenger information</h4>
      <p>
        Enter the required information for each traveler and be sure that it exactly 
        matches  <br /> the government-issued ID presented at the airport. </p>
      <div className="col-7 mb-md-0 mb-5">
        <p>Passenger 1 (Adult)</p>
        <form name="contact-form" >
          <div className="row"     >
            <div className="col-md-4">
              <div className="md-form mb-0">
                <input type="text"  placeholder="First name*" className="form-control" />
              </div>
              <br />
              <div className="md-form mb-0">
                <input type="text" placeholder="Suffix" className="form-control" />
              </div>
              <br />
              <div className="md-form mb-0">
                <input type="text" placeholder="Email address" className="form-control" />
              </div>  <br />
              <div className="md-form mb-0">
                <input type="text" placeholder="Redress number" className="form-control" />
              </div> <br />
            </div>
            <div className="col-md-4">
              <div className="md-form mb-0">
                <input type="text"  placeholder="Middle name" className="form-control" />
              </div>
              <br />
              
              <div className="md-form mb-0">
                <input type="date"  placeholder="Date of birth" className="form-control" />
              </div>
              <br />
              <div className="md-form mb-0">
                <input type="number"  placeholder="Phone number" className="form-control" />
              </div>
              <br />
              <div className="md-form mb-0">
                <input type="text"  placeholder="Known traveller number*" className="form-control" />
              </div>
            </div>
            <div className="col-md-4">
              <div className="md-form mb-0">
                <input type="text" placeholder="Last Name*" className="form-control" />
              </div>
              
              <br />
            </div>
          </div>
          <br />
          <br />
          <br />
          <h4>Emergency contact information</h4>
          <div>
            <p>
              <input type="checkbox" name="sameAsPassenger1" id="sameAsPassenger1" />
              Same as Passenger 1
            </p>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="md-form mb-0">
                <input type="text" name="emergencyFirstName" placeholder="First name*" className="form-control" />
              </div>
              <br />
              <div className="md-form mb-0">
                <input type="text" name="emergencyLastName" placeholder="Last Name*" className="form-control" />
              </div>
              <br />
            </div>
            <div className="col-md-6">
              <div className="md-form mb-0">
                <input type="text" name="emergencyEmail" placeholder="Email address*" className="form-control" />
              </div>
              <br />
              <div className="md-form mb-0">
                <input type="text" name="emergencyPhoneNumber" placeholder="Phone number" className="form-control" />
              </div>
              <br />
            </div>
          </div>
          <h4>Bag information</h4>
          <p>
            Each passenger is allowed one free carry-on bag and one personal item. First checked bag for each passenger is also free.
            Second bag check fees are waived for loyalty program members. See the full bag policy.
          </p>
          <div>
            <div>
              First Last <button onClick={mns}>-</button> {comteur}<button onClick={pls}>+</button>
            </div>
            <br />
            
            <a href='/'>Save and close</a>
            <br></br>
            <a href='/seats'>Select seats</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Information;

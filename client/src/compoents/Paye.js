import React from 'react';
import '../css/Paye.css'

function Paye() {
  return (
    <div className="payment-container">
    <h1>Payment method</h1>

    <div className="payment-inputs">
      <div className="input-container">
        <input type="text" placeholder="Name on card" style={{flex: '1 1 0', height: 32, color: '#7C8DB0', fontSize: 18, fontFamily: 'Nunito Sans', fontWeight: '400', wordWrap: 'break-word'}} />
        <input type="text" placeholder="Card number"style={{flex: '1 1 0', height: 32, color: '#7C8DB0', fontSize: 18, fontFamily: 'Nunito Sans', fontWeight: '400', wordWrap: 'break-word'}} />
        <input type="date" placeholder="Expiration date" style={{flex: '1 1 0', height: 32, color: '#7C8DB0', fontSize: 18, fontFamily: 'Nunito Sans', fontWeight: '400', wordWrap: 'break-word'}} />
        <input type="text" placeholder="CCV"  style={{flex: '1 1 0', height: 32, color: '#7C8DB0', fontSize: 18, fontFamily: 'Nunito Sans', fontWeight: '400', wordWrap: 'break-word'}}/>
      </div>
      <div className="create-account">
        <h1>Create Account</h1>
        <div style={{width: 682, color: '#7C8DB0', fontSize: 16, fontFamily: 'Nunito Sans', fontWeight: '400', wordWrap: 'break-word'}}>
        Tripma is free to use as a guest, but if you create an account today,
         you can save and view flights, manage your trips, earn rewards, and more.</div>
        <input type="text" placeholder="Email address or phone number" />
        <input type="password" placeholder="Password" />
      </div>
    </div>

    <div className="payment-buttons">
      <button className="back-button">Back to seat select</button>
      <button className="confirm-button">Confirm and pay</button>
    </div>
    <div className="payment-options">
        <div className="payment-option">
          <button className="payment-button"  
           style={{color: '#6E7491', fontSize: 18, fontFamily: 'Nunito Sans', fontWeight: '600', wordWrap: 'break-word'}}
          >Credit card</button>
        </div>
        <div className="payment-option">
          <button className="payment-button">Sign up with Google</button>
        </div>
        <div className="payment-option">
          <button className="payment-button">Continue with Apple</button>
        </div>
        <div className="payment-option">
          <button className="payment-button">Continue With Facebook</button>
          
        </div>
      </div>
      <div style={{width: 682}}><span style="color: '#7C8DB0', fontSize: 16, fontFamily: 'Nunito Sans', fontWeight: '400', wordWrap: 'break-word'">This flight has a flexible cancellation policy. If you cancel or change your 
          flight up to 30 days before the departure date,
           you are eligible for a free refund.
            All flights booked on Tripma are backed by our satisfaction guarantee, however cancellation policies vary by airline. See the</span>
        </div>
  </div>
  );
}

export default Paye;

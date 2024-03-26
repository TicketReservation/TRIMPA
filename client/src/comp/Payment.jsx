import React, { useState } from 'react'

const payment = () => {
    const [amount, setAmount] = useState('');
    const [currency, setCurrency] = useState('');
    const [paymentResult, setPaymentResult] = useState(null);
    const [error, setError] = useState(null);
  
    



  return (
    <div>
        <h1>Payment method</h1>
        <h1>Select a payment method below.
         Tripma processes your payment securely with end-to-end encryption.</h1>
         <form   >
           <input     ></input>
           <input  >  </input> 
           <input  >  </input>

         </form>
    </div>
  )
}

export default payment


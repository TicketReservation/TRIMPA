const database =require('../model-mysql/Payment')


module.exports={
pay: async  (req,res)=>{
    let {id,price} = req.body;
     try{
        const data = await database.create({})
     
    }

catch(error){
console.log(error)
}

}

}











// app.post('/api/payments', async (req, res) => {
//     try {
//       const { userId, amount, currency } = req.body;
//       const payment = await Payment.create({ amount, currency, UserId: userId });
//       res.status(201).json(payment);
//     } catch (error) {
//       console.error('Error creating payment:', error);
//       res.status(500).json({ error: 'Failed to create payment' });
//     }
//   })
// import React, { useState } from 'react';
// import axios from 'axios';

// const App = () => {
//   const [firstName, setFirstName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [amount, setAmount] = useState('');
//   const [currency, setCurrency] = useState('');
//   const [paymentResult, setPaymentResult] = useState(null);
//   const [error, setError] = useState(null);

//   const handleUserSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('/api/users', { firstName, email, password });
//       console.log('User created:', response.data);
//       // Optionally, handle success response (e.g., display a success message)
//     } catch (error) {
//       console.error('Error creating user:', error.response.data.error);
//       setError('Failed to create user');
//     }
//   };

//   const handlePaymentSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('/api/payments', { userId: 1, amount, currency });
//       setPaymentResult(response.data);
//       setError(null);
//     } catch (error) {
//       console.error('Error processing payment:', error.response.data.error);
//       setError('Failed to process payment');
//       setPaymentResult(null);
//     }
//   };

//   return (
//     <div>
//       <h1>User Registration</h1>
//       <form onSubmit={handleUserSubmit}>
//         <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
//         <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
//         <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
//         <button type="submit">Register</button>
//       </form>
//       <h1>Payment Form</h1>
//       <form onSubmit={handlePaymentSubmit}>
//         <input type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
//         <input type="text" placeholder="Currency" value={currency} onChange={(e) => setCurrency(e.target.value)} />
//         <button type="submit">Submit Payment</button>
//       </form>
//       {error && <p>Error: {error}</p>}
//       {paymentResult && (
//         <div>
//           <p>Payment successful!</p>
//           <p>Payment ID: {paymentResult.id}</p>
//           {/* Display additional payment details if needed */}
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;

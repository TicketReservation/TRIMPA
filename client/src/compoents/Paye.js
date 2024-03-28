
      import React from 'react';
      import { styled } from '@mui/system';
      import TextField from '@mui/material/TextField';
      import '../css/Paye.css'
      
      
      // const StyledButton = styled('button')({
      //   display: 'block',
      //   width: '100%',
      //   padding:  '0.75rem',
      //   marginTop: '0.5rem',
      //   borderRadius: '0.25rem',
      //   fontSize: '1.5rem',
      // });
      
      function Paye() {
        return (
      
      <div className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
      <div className="text-2xl font-bold text-indigo-500 max-md:max-w-full">
        Payment method
      </div>
      <div className="mt-8 text-lg text-slate-400 max-md:max-w-full">
        Select a payment method below. Tripma processes your payment securely
        with end-to-end encryption.
      </div>
      <div className="flex gap-0 pr-4 mt-7 text-lg text-indigo-500 rounded border border-indigo-500 border-solid max-md:flex-wrap">
        <button className="flex gap-1 px-5 py-3 bg-indigo-500 rounded text-neutral-50">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f9e2c99aa9213a2019553e72cbaeed11268acd5feff4fd29febf6bbc70acfb7b?apiKey=4da697fc30d442f5a7beefc7a3e47a6f&"
            className="shrink-0 my-auto aspect-square w-[18px]"
          />
          Credit card
        </button>
        <button className="flex gap-1 px-5 py-3 rounded">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ce6d9076735558b608dae98f7e820736049d6556b6245ab746189f05abbe399d?apiKey=4da697fc30d442f5a7beefc7a3e47a6f&"
            className="shrink-0 my-auto aspect-square w-[18px]"
          />
          Google Pay
        </button>
        <button className="flex gap-1 px-5 py-3 rounded">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/987cda7270c885b0cdb77c227c79f7d99c04b8fd5de298fc5e6266cd0d6ba5bd?apiKey=4da697fc30d442f5a7beefc7a3e47a6f&"
            className="shrink-0 my-auto aspect-square w-[18px]"
          />
          Apple Pay
        </button>
        <button className="flex gap-1 px-5 py-3 whitespace-nowrap rounded">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8a110e75454c4061d95290a4a4c704990071fd553a07fd884095953099e10304?apiKey=4da697fc30d442f5a7beefc7a3e47a6f&"
            className="shrink-0 my-auto aspect-square w-[18px]"
          />
          Paypal
        </button>
        <button className="flex gap-1 px-5 py-3 whitespace-nowrap rounded">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8b808f9ff90b9d928738568003bdf28b52fe4ca5d44732b836194a3f2f4987d0?apiKey=4da697fc30d442f5a7beefc7a3e47a6f&"
            className="shrink-0 my-auto aspect-square w-[18px]"
          />
          Crypto
        </button>
      </div>
      <div className="mt-7 text-lg font-semibold text-slate-500 max-md:max-w-full">
        Credit card details
      </div>
      <TextField
        label="Name on card"
        variant="outlined"
        className="mt-4"
        
      />
      <br></br>
      <TextField
        label="Card number"
        variant="outlined"
        className="mt-4"
      />
      <div className="flex gap-5 justify-between mt-4 max-md:flex-wrap">
        <TextField
          label="Expiration date"
          variant="outlined"
          className="flex-1"
        />
        <br></br>
        <TextField
          label="CCV"
          variant="outlined"
          className="flex-1"
        />
      </div>
      <div className="mt-7 text-lg font-semibold text-slate-500 max-md:max-w-full">
        Create an account
      </div>
      <div className="mt-9 text-base text-slate-400 max-md:mr-2.5 max-md:max-w-full">
        Tripma is free to use as a guest, but if you create an account today,
        you can save and view flights, manage your trips, earn rewards, and
        more.
      </div>
      <div className="flex gap-2 py-1 mt-7 max-w-full w-[301px]">
        <div className="flex flex-col justify-center my-auto">
          <div className="shrink-0 h-4 border border-solid border-slate-500 stroke-[1px] stroke-slate-500" />
        </div>
        <div className="text-base text-slate-500">
          Save card and create account for later
        </div>
      </div>
      <TextField
        label="Email address or phone number"
        variant="outlined"
        className="mt-4"
      />
       <br></br>
      <TextField
        label="Password"
        type="password"
        variant="outlined"
        className="mt-4"
      />
        <div className="mt-7 text-lg font-semibold text-slate-500 max-md:max-w-full">
        Cancellation policy
      </div>
      <div className="mt-4 text-base text-slate-400 max-md:max-w-full">
        This flight has a flexible cancellation policy. If you cancel or change your
        flight up to 30 days before the departure date, you are eligible for a free
        refund. All flights booked on Tripma are backed by our satisfaction
        guarantee, however cancellation policies vary by airline. See the full
        cancellation policy for this flight.
      </div>
      <div className="flex gap-5 justify-between self-start pr-2.5 mt-6 text-lg">
        <button className="justify-center px-5 py-3 text-indigo-500 rounded border border-indigo-500 border-solid">
          Back to seat select
        </button>
        <button className="justify-center px-5 py-3 rounded border border-solid bg-slate-300 bg-opacity-30 border-slate-400 text-slate-400  " >
          Confirm and pay
        </button>
      </div>
    </div>
    );
  }
  export default Paye;
   
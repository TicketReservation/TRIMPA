import React,{useState} from 'react';
import style from '../css/adduserdash.css'

const AddFlight = (props) => {

const [companyName,setcompanyName]=useState("")
const [price,setprice]=useState(0)
const [imgUrl,setimgUrl]=useState("")
const [description,setdescription]=useState("")
const [departure,setdeparture]=useState("")
const [destination,setdestination]=useState("")
const [arrival,setarrival]=useState("")

   
const addddflight =()=>{
    props.addflight({companyName:companyName,
        price:price,
        imgUrl:imgUrl,
        description:description,
        departure:departure,
        destination:destination,
        arrival:arrival

     })
   }

return (
  <div className='form-container'>
 <input type="text" value={companyName} placeholder='put companyName' onChange={(e)=>setcompanyName(e.target.value)} />
 <input type="text" value={description} placeholder='put description' onChange={(e)=>setdescription(e.target.value)} />
 <input type="text" value={imgUrl} placeholder='put imgUrl' onChange={(e)=>setimgUrl(e.target.value)} />
 <input type="date" value={departure} placeholder='put departure' onChange={(e)=>setdeparture(e.target.value)} />
 <input type="text" value={destination} placeholder='put destination' onChange={(e)=>setdestination(e.target.value)} />
 <input type="date" value={arrival} placeholder='put arrival' onChange={(e)=>setarrival(e.target.value)} />
 <h4>PRICE :</h4>
 <input type="number" value={price} onChange={(e)=>setprice(e.target.value)} />

 <button onClick={()=>{ addddflight();props.changeView("FlightDashboard")}}>ADD</button>
  </div>
)
}

export default AddFlight;
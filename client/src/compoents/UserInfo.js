import axios from 'axios'
import React,{useEffect, useState} from 'react'
import { jwtDecode } from "jwt-decode";
import '../css/profile.css'
function UserInfo() {
  const [id,setId]=useState(null)
  const [data,setData]=useState([])

  const fetch=()=>{
    const token=localStorage.getItem("jwtToken")
    const decoded=jwtDecode(token)
    console.log(decoded,'decoded');
    setId(decoded.id)
    axios.get(`http://localhost:3000/api/user/${id}`)
    .then(res=>setData(res.data))
    .catch(err=>console.log(err))
}
    
  
    useEffect(()=>{
      fetch()
    }, [])
    

   


  return <div className='userInfo'>
    <img src={data.picture}/>
    <h3 className='userName'>{data.Name}</h3>
    <h7 className='userAdress'>{data.email}</h7><br/>
    <button>Update</button>
  </div>
}

export default UserInfo

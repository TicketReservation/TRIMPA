import axios from 'axios'
import React,{useEffect, useState} from 'react'
import { jwtDecode } from "jwt-decode";
import '../css/profile.css'
function UserInfo() {
  const [id,setId]=useState(null)
  const [data,setData]=useState([])

  const fetch = () => {
    const token = localStorage.getItem("jwtToken");
    const decoded = jwtDecode(token);
    console.log(decoded, 'decoded');
    setId(decoded.id);
    axios.get(`http://localhost:3000/api/user/${id}`)
      .then(res => {
        console.log('dataaaaa',res.data);
        setData(res.data);
      })
      .catch(err => console.log(err));
  };
  


    useEffect(()=>{
      fetch()
    }, [])





    return (
        <div className='userInfo'>
          {data && data.picture && <img src={data.picture} alt="user profile" />}
          <h3 className='userName'>{data && data.Name}</h3>
          <h7 className='userAdress'>{data && data.email}</h7><br/>
          <button>Update</button>
        </div>
      );
      
}

export default UserInfo
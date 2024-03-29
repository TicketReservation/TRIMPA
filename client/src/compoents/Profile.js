import React,{ useState,useEffect } from 'react'
import '../css/profile.css'
import axios from 'axios'

function Profile() {

  const [data,setData]=useState([])
  const [udate,setUpdate]=useState({
    Name:"",
    email:"",
    password:"",
    picture:""
  })
  const handleData=(id)=>{
    axios.get(`http://localhost:3000/api/user/${id}`)
    .then(res=>setData(res.data))
    .catch(err=>console.log(err))
  }
  useEffect(
    ()=>handleData(1),[]
    )
  
  

  return <div className='updateProfile'>
  <form>
    <h2>Update Profile</h2>
    <span className='NameEmail'>
    <label htmlFor="name">Name</label><br/>
    <input type="text"  id="name" name="name" required/><br/>
    <label htmlFor="email">Email</label><br/>
    <input type="email"  id="email" name="email" required/><br/>
    </span>
    <span className='PasswordPicture'>
    <label htmlFor="password">Password</label><br/>
    <input type="password" placeholder='New Password' id="password" name="password" required/><br/>
    <label htmlFor="picture">Picture</label><br/>
    <input type="file" id="picture" name="picture"/><br/><br/>
    <button type="submit">Save</button>
    </span>
  </form>
</div>
  
}

export default Profile

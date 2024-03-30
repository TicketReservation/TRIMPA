import React,{useState} from 'react';
import style from '../css/adduserdash.css'

const Adduser = (props) => {

    const [Name,setname]=useState("")
const [email,setemail]=useState("")
const [password,setpass]=useState("")
const [picture,setimage]=useState("")
   
const adddd =()=>{
    props.add({Name:Name,
         email:email,
         password:password,
         picture:picture
     })
   }

return (
  <div className='form-container'>
 <input type="text" value={Name} placeholder='put name' onChange={(e)=>setname(e.target.value)} />
 <input type="email" value={email} placeholder='put email' onChange={(e)=>setemail(e.target.value)} />
 <input type="text" name={password} placeholder='put Password' onChange={(e)=>setpass(e.target.value)} />
 <input type="text" value={picture} placeholder='put pictureurl' onChange={(e)=>setimage(e.target.value)} />
 <button onClick={()=>{ adddd();props.changeView("UserDashboard")}}>ADD</button>
  </div>
)
}

export default Adduser;
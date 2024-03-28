import * as React from 'react';
import { Unstable_Popup as BasePopup } from '@mui/base/Unstable_Popup';
import '../css/homePage.css'
import axios from 'axios';


function SignInBtn() {

    const [anchor, setAnchor] = React.useState(null);

    const handleClick = (event) => {
      setAnchor(anchor ? null : event.currentTarget);
    };
  
    const open = Boolean(anchor);
    const _id = open ? 'simple-popper' : undefined;


    const [signIn,setSignIn]=React.useState({
      email:"",
      password:""
    })

    const handleInput=(e)=>{
      setSignIn({...signIn,
        [e.target.id]:e.target.value})
    }

    const handleSubmit=()=>{
      axios.post("http://localhost:3000/api/user/login",signIn)
      .then(res=>{
        const token=res.data.token
        localStorage.setItem("jwtToken",token)
        console.log("Token Stored in the local storage",token);
      })
      .catch(err=>console.log(err))
    }

  return <div>
      <a onClick={handleClick} id="log" href="#Sign in">
                    Sign in
                </a>
                <BasePopup id={_id} open={open} anchor={anchor}>
    <div className='signIn'>
    <form onSubmit={()=>handleSubmit()} >
      <h2>Sign in</h2>
      <br/> 
      <br/> 
      <br/> 
      <label htmlFor="email">Email</label>
      <input type="email" onChange={(e)=>handleInput(e)} value={signIn.email} id="email" name="email"  required />
     
      <label htmlFor="password">Password</label>
      <input type="password" onChange={(e)=>handleInput(e)} value={signIn.password} id="password" name="password"   required />
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      
      <button type="submit" className='signInBtn' >Sign in</button>
    </form>
    </div>
      </BasePopup>
  </div>
  
}

export default SignInBtn

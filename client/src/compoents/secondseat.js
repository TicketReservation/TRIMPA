import React,{useState,useEffect} from "react"
import style from "../css/seats.css"
import imagebus from "../img/BusinessSeats.jpg"
import imageeco from "../img/EconomySeats.jpg"
import axios from 'axios' 

function Secondseats (props){

  // const [onesitdata,setonesitdata]=useState([])
  const [name,setname]=useState("")
const [valid,setvalid]=useState(false)
const [type,settype]=useState("")
const [flight, setflight] = useState([]);
const [sits, setsits] = useState([]);

console.log(props.oneflight);
console.log(props.flight);


const fetchsits = () => {
  axios.get("http://localhost:3000/api/sit/")
      .then((response) => setsits(response.data))
      .catch((err) => console.log(err));
}

const fetchflight = () => {
  axios.get("http://localhost:3000/api/flight/")
      .then((response) => setflight(response.data))
      .catch((err) => console.log(err));
}
useEffect(() => {
  fetchsits()
  fetchflight();
}, []);

// const getone = () =>{
//   axios.get(`http://localhost:3000/api/sit/${name}`)
//   .then((response)=>setonesitdata(response.data))
//   .catch((err)=>console.log(err))
//   }

// const add = (body) =>{
//   axios.post(("http://localhost:3000/api/sit/",body))
//   .then((response)=>console.log(response.data))
//   .catch((err)=>console.log(err))
 
//   }
  const update = (name,body) =>{
    axios.put(`http://localhost:3000/api/sit/${name}`,body)
    .then((response)=>console.log(response.data))
    .catch((err)=>console.log(err))
   
    }
// const adddd =()=>{
//  add({Name:name,
//       Type:type,
//       valid:valid
//   })
// }
const upp =()=>{
  update(name,{name:name,
    valid:valid,
      
  })
}
return (
    <div>
        <h1 class="trimpa">TRIMPA</h1>
        <h3 class="trimpa">second flight</h3>
    <div class ="bigdiv">
<div class="plane">
  <div class="cockpit">
    <h1>Please select a seat</h1>
  </div>
  
  <ol class="cabin fuselage">
    <li class="row row--1">
      <ol class="seats" type="A">
        <li class="seatbusiness">
          <input type="checkbox" id="1A" />
          <label onClick={() => { setname("1A"); setvalid(!valid);  settype("vip"); upp() }}  for="1A">1A</label>
        </li>
        <li class="seatbusiness">
          <input type="checkbox" id="1B" />
          <label onClick={() => { setname("1B");setvalid(!valid); settype("vip"); upp() }} for="1B">1B</label>
        </li>
        <li class="seatbusiness">
          <input type="checkbox" id="1C" />
          <label onClick={() => { setname("1C");setvalid(!valid); settype("vip"); upp() }} for="1C">1C</label>
        </li>
        <li class="seatbusiness">
          <input type="checkbox" id="1D" />
          <label onClick={() => { setname("1D");setvalid(!valid); settype("vip"); upp() }} for="1D">1D</label>
        </li>
       
      </ol>
    </li>
    <li class="row row--2">
      <ol class="seats" type="A">
        <li class="seatbusiness">
          <input type="checkbox" id="2A" />
          <label onClick={() => { setname("2A");setvalid(!valid); settype("vip"); upp() }} for="2A">2A</label>
        </li>
        <li class="seatbusiness">
          <input type="checkbox" id="2B" />
          <label onClick={() => { setname("2B");setvalid(!valid); settype("vip"); upp() }} for="2B">2B</label>
        </li>
        <li class="seatbusiness">
          <input type="checkbox" id="2C" />
          <label onClick={() => { setname("2C");setvalid(!valid); settype("vip"); upp() }} for="2C">2C</label>
        </li>
        <li class="seatbusiness">
          <input type="checkbox" id="2D" />
          <label onClick={() => { setname("2D");setvalid(!valid); settype("vip"); upp() }} for="2D">2D</label>
        </li>
        
      </ol>
    </li>
    <li class="row row--3">
      <ol class="seats" type="A">
        <li class="seatbusiness">
          <input type="checkbox" id="3A" />
          <label onClick={() => { setname("3A");setvalid(!valid); settype("vip"); upp() }} for="3A">3A</label>
        </li>
        <li class="seatbusiness">
          <input type="checkbox" id="3B" />
          <label onClick={() => { setname("3B");setvalid(!valid); settype("vip"); upp() }} for="3B">3B</label>
        </li>
        <li class="seatbusiness">
          <input type="checkbox" id="3C" />
          <label onClick={() => { setname("3C");setvalid(!valid); settype("vip"); upp() }} for="3C">3C</label>
        </li>
        <li class="seatbusiness">
          <input type="checkbox" id="3D" />
          <label onClick={() => { setname("3D");setvalid(!valid); settype("vip"); upp() }} for="3D">3D</label>
        </li>
        
      </ol>
    </li>
    <li class="row row--4">
      <ol class="seats" type="A">
        <li class="seatbusiness">
          <input type="checkbox" id="4A" />
          <label onClick={() => { setname("4A");setvalid(!valid); settype("vip"); upp() }} for="4A">4A</label>
        </li>
        <li class="seatbusiness">
          <input type="checkbox" id="4B" />
          <label onClick={() => { setname("4B");setvalid(!valid); settype("vip"); upp() }} for="4B">4B</label>
        </li>
        <li class="seatbusiness">
          <input type="checkbox" id="4C" />
          <label onClick={() => { setname("4C");setvalid(!valid); settype("vip"); upp() }} for="4C">4C</label>
        </li>
        <li class="seatbusiness">
          <input type="checkbox" id="4D" />
          <label onClick={() => { setname("4D");setvalid(!valid); settype("vip"); upp() }} for="4D">4D</label>
        </li>
       
      </ol>
    </li>
    <li class="row row--5">
      <ol class="seats" type="A">
        <li class="seatbusiness">
          <input type="checkbox" id="5A" />
          <label onClick={() => { setname("5A");setvalid(!valid); settype("vip"); upp() }} for="5A">5A</label>
        </li>
        <li class="seatbusiness">
          <input type="checkbox" id="5B" />
          <label onClick={() => { setname("5B");setvalid(!valid); settype("vip"); upp() }} for="5B">5B</label>
        </li>
        <li class="seatbusiness">
          <input type="checkbox" id="5C" />
          <label onClick={() => { setname("5C");setvalid(!valid); settype("vip"); upp() }} for="5C">5C</label>
        </li>
        <li class="seatbusiness">
          <input type="checkbox" id="5D" />
          <label onClick={() => { setname("5D");setvalid(!valid); settype("vip"); upp() }} for="5D">5D</label>
        </li>
        
      </ol>
      <div class="exit exit--front fuselage">
  </div>
    </li>
    <li class="row row--6">
      <ol class="seats" type="A">
        <li class="seat">
          <input type="checkbox" id="6A" />
          <label onClick={() => { setname("6A");setvalid(!valid); settype("vip"); upp() }} for="6A">6A</label>
        </li>
        <li class="seat">
          <input type="checkbox" id="6B" />
          <label onClick={() => { setname("6B");setvalid(!valid); settype("vip"); upp() }} for="6B">6B</label>
        </li>
        <li class="seat">
          <input type="checkbox" id="6C" />
          <label onClick={() => { setname("6C");setvalid(!valid); settype("vip"); upp() }} for="6C">6C</label>
        </li>
        <li class="seat">
          <input type="checkbox" id="6D" />
          <label onClick={() => { setname("6D");setvalid(!valid); settype("vip"); upp() }} for="6D">6D</label>
        </li>
        <li class="seat">
          <input type="checkbox" id="6E" />
          <label onClick={() => { setname("6E");setvalid(!valid); settype("vip"); upp() }} for="6E">6E</label>
        </li>
        <li class="seat">
          <input type="checkbox" id="6F" />
          <label onClick={() => { setname("6F");setvalid(!valid); settype("vip"); upp() }} for="6F">6F</label>
        </li>
      </ol>
    </li>
    <li class="row row--7">
      <ol class="seats" type="A">
        <li class="seat">
          <input type="checkbox" id="7A" />
          <label onClick={() => { setname("7A");setvalid(!valid); settype("vip"); upp() }} for="7A">7A</label>
        </li>
        <li class="seat">
          <input type="checkbox" id="7B" />
          <label onClick={() => { setname("7B");setvalid(!valid); settype("vip"); upp() }} for="7B">7B</label>
        </li>
        <li class="seat">
          <input type="checkbox" id="7C" />
          <label onClick={() => { setname("7C");setvalid(!valid); settype("vip"); upp() }} for="7C">7C</label>
        </li>
        <li class="seat">
          <input type="checkbox" id="7D" />
          <label onClick={() => { setname("7D");setvalid(!valid); settype("vip"); upp() }} for="7D">7D</label>
        </li>
        <li class="seat">
          <input type="checkbox" id="7E" />
          <label onClick={() => { setname("7E");setvalid(!valid); settype("vip"); upp() }} for="7E">7E</label>
        </li>
        <li class="seat">
          <input type="checkbox" id="7F" />
          <label onClick={() => { setname("7F");setvalid(!valid); settype("vip"); upp() }} for="7F">7F</label>
        </li>
      </ol>
    </li>
    <li class="row row--8">
      <ol class="seats" type="A">
        <li class="seat">
          <input type="checkbox" id="8A" />
          <label onClick={() => { setname("8A");setvalid(!valid); settype("vip"); upp() }} for="8A">8A</label>
        </li>
        <li class="seat">
          <input type="checkbox" id="8B" />
          <label onClick={() => { setname("8B");setvalid(!valid); settype("vip"); upp() }} for="8B">8B</label>
        </li>
        <li class="seat">
          <input type="checkbox" id="8C" />
          <label onClick={() => { setname("8C");setvalid(!valid); settype("vip"); upp() }} for="8C">8C</label>
        </li>
        <li class="seat">
          <input type="checkbox" id="8D" />
          <label onClick={() => { setname("8D");setvalid(!valid); settype("vip"); upp() }} for="8D">8D</label>
        </li>
        <li class="seat">
          <input type="checkbox" id="8E" />
          <label onClick={() => { setname("8E");setvalid(!valid); settype("vip"); upp() }} for="8E">8E</label>
        </li>
        <li class="seat">
          <input type="checkbox" id="8F" />
          <label onClick={() => { setname("8F");setvalid(!valid); settype("vip"); upp() }} for="8F">8F</label>
          </li>
          </ol>
          </li>

    <li class="row row--9">
      <ol class="seats" type="A">
        <li class="seat">
          <input type="checkbox" id="9A" />
          <label onClick={() => { setname("9A");setvalid(!valid); settype("vip"); upp() }} for="9A">9A</label>
        </li>
        <li class="seat">
          <input type="checkbox" id="9B" />
          <label onClick={() => { setname("9B");setvalid(!valid); settype("vip"); upp() }} for="9B">9B</label>
        </li>
        <li class="seat">
          <input type="checkbox" id="9C" />
          <label onClick={() => { setname("9C");setvalid(!valid); settype("vip"); upp() }} for="9C">9C</label>
        </li>
        <li class="seat">
          <input type="checkbox" id="9D" />
          <label onClick={() => { setname("9D");setvalid(!valid); settype("vip"); upp() }} for="9D">9D</label>
        </li>
        <li class="seat">
          <input type="checkbox" id="9E" />
          <label onClick={() => { setname("9E");setvalid(!valid); settype("vip"); upp() }} for="9E">9E</label>
        </li>
        <li class="seat">
          <input type="checkbox" id="9F" />
          <label onClick={() => { setname("9F");setvalid(!valid); settype("vip"); upp() }} for="9F">9F</label>
        </li>
      </ol>
    </li>
    <li class="row row--10">
      <ol class="seats" type="A">
        <li class="seat">
          <input type="checkbox" id="10A" />
          <label onClick={() => { setname("10A");setvalid(!valid); settype("vip"); upp() }} for="10A">10A</label>
        </li>
        <li class="seat">
          <input type="checkbox" id="10B" />
          <label onClick={() => { setname("10B");setvalid(!valid); settype("vip"); upp() }} for="10B">10B</label>
        </li>
        <li class="seat">
          <input type="checkbox" id="10C" />
          <label onClick={() => { setname("10C");setvalid(!valid); settype("vip"); upp() }} for="10C">10C</label>
        </li>
        <li class="seat">
          <input type="checkbox" id="10D" />
          <label onClick={() => { setname("10D");setvalid(!valid); settype("vip"); upp() }} for="10D">10D</label>
        </li>
        <li class="seat">
          <input type="checkbox" id="10E" />
          <label onClick={() => { setname("10E");setvalid(!valid); settype("vip"); upp() }} for="10E">10E</label>
        </li>
        <li class="seat">
          <input type="checkbox" id="10F" />
          <label onClick={() => { setname("10F");setvalid(!valid); settype("vip"); upp() }} for="10F">10F</label>
        </li>
      </ol>
    </li>
    <li class="row row--11">
      <ol class="seats" type="A">
        <li class="seat">
          <input type="checkbox" id="11A" />
          <label onClick={() => { setname("11A");setvalid(!valid); settype("vip"); upp() }} for="11A">11A</label>
        </li>
        <li class="seat">
          <input type="checkbox" id="11B" />
          <label onClick={() => { setname("11B");setvalid(!valid); settype("vip"); upp() }} for="11B">11B</label>
        </li>
        <li class="seat">
          <input type="checkbox" id="11C" />
          <label onClick={() => { setname("11C");setvalid(!valid); settype("vip"); upp() }} for="11C">11C</label>
        </li>
        <li class="seat">
          <input type="checkbox" id="11D" />
          <label onClick={() => { setname("11D");setvalid(!valid); settype("vip"); upp() }} for="11D">11D</label>
        </li>
        <li class="seat">
          <input type="checkbox" id="11E" />
          <label onClick={() => { setname("11E");setvalid(!valid); settype("vip"); upp() }} for="11E">11E</label>
        </li>
        <li class="seat">
          <input type="checkbox" id="11F" />
          <label onClick={() => { setname("11F");setvalid(!valid); settype("vip"); upp() }} for="11F">11F</label>
        </li>
      </ol>
    </li>
    <li class="row row--12">
      <ol class="seats" type="A">
        <li class="seat">
          <input type="checkbox" id="12A" />
          <label onClick={() => { setname("12A");setvalid(!valid); settype("vip"); upp() }} for="12A">12A</label>
        </li>
        <li class="seat">
          <input type="checkbox" id="12B" />
          <label onClick={() => { setname("12B");setvalid(!valid); settype("vip"); upp() }} for="12B">12B</label>
        </li>
        <li class="seat">
          <input type="checkbox" id="12C" />
          <label onClick={() => { setname("12C");setvalid(!valid); settype("vip"); upp() }} for="12C">12C</label>
        </li>
        <li class="seat">
          <input type="checkbox" id="12D" />
          <label onClick={() => { setname("12D");setvalid(!valid); settype("vip"); upp() }} for="12D">12D</label>
        </li>
        <li class="seat">
          <input type="checkbox" id="12E" />
          <label onClick={() => { setname("12E");setvalid(!valid); settype("vip"); upp() }} for="12E">12E</label>
        </li>
        <li class="seat">
          <input type="checkbox" id="12F" />
          <label onClick={() => { setname("12F");setvalid(!valid); settype("vip"); upp() }} for="12F">12F</label>
        </li>
      </ol>
    </li>
    <li class="row row--13">
      <ol class="seats" type="A">
        <li class="seat">
          <input type="checkbox" id="13A" />
          <label onClick={() => { setname("13A");setvalid(!valid); settype("vip"); upp() }} for="13A">13A</label>
        </li>
        <li class="seat">
          <input type="checkbox" id="13B" />
          <label onClick={() => { setname("13B");setvalid(!valid); settype("vip"); upp() }} for="13B">13B</label>
        </li>
        <li class="seat">
          <input type="checkbox" id="13C" />
          <label onClick={() => { setname("13C");setvalid(!valid); settype("vip"); upp() }} for="13C">13C</label>
        </li>
        <li class="seat">
          <input type="checkbox" id="13D" />
          <label onClick={() => { setname("13D");setvalid(!valid); settype("vip"); upp() }} for="13D">13D</label>
        </li>
        <li class="seat">
          <input type="checkbox" id="13E" />
          <label onClick={() => { setname("13E");setvalid(!valid); settype("vip"); upp() }} for="13E">13E</label>
        </li>
        <li class="seat">
          <input type="checkbox" id="13F" />
          <label onClick={() => { setname("13F");setvalid(!valid); settype("vip"); upp() }} for="13F">13F</label>
        </li>
      </ol>
      <div class="exit exit--front fuselage">
    
  </div>
    </li>
    <li class="row row--14">
      <ol class="seats" type="A">
        <li class="seat">
          <input type="checkbox" id="14A" />
          <label onClick={() => { setname("14A");setvalid(!valid); settype("vip"); upp() }} for="14A">14A</label>
        </li>
        <li class="seat">
          <input type="checkbox" id="14B" />
          <label onClick={() => { setname("14B");setvalid(!valid); settype("vip"); upp() }} for="14B">14B</label>
        </li>
        <li class="seat">
          <input type="checkbox" id="14C" />
          <label onClick={() => { setname("14C");setvalid(!valid); settype("vip"); upp() }} for="14C">14C</label>
        </li>
        <li class="seat">
          <input type="checkbox" id="14D" />
          <label onClick={() => { setname("14D");setvalid(!valid); settype("vip"); upp() }} for="14D">14D</label>
        </li>
        <li class="seat">
          <input type="checkbox" id="14E" />
          <label onClick={() => { setname("14E");setvalid(!valid); settype("vip"); upp() }} for="14E">14E</label>
        </li>
        <li class="seat">
          <input type="checkbox" id="14F" />
          <label onClick={() => { setname("14F");setvalid(!valid); settype("vip"); upp() }} for="14F">14F</label>
        </li>
      </ol>
    </li>
    <li class="row row--15">
      <ol class="seats" type="A">
        <li class="seat">
          <input type="checkbox" id="15A" />
          <label onClick={() => { setname("15A");setvalid(!valid); settype("vip"); upp() }} for="15A">15A</label>
        </li>
        <li class="seat">
          <input type="checkbox" id="15B" />
          <label onClick={() => { setname("15B");setvalid(!valid); settype("vip"); upp() }} for="15B">15B</label>
        </li>
        <li class="seat">
          <input type="checkbox" id="15C" />
          <label onClick={() => { setname("15C");setvalid(!valid); settype("vip"); upp() }} for="15C">15C</label>
        </li>
        <li class="seat">
          <input type="checkbox" id="15D" />
          <label onClick={() => { setname("15D");setvalid(!valid); settype("vip"); upp() }} for="15D">15D</label>
        </li>
        <li class="seat">
          <input type="checkbox" id="15E" />
          <label onClick={() => { setname("15E");setvalid(!valid); settype("vip"); upp() }} for="15E">15E</label>
        </li>
        <li class="seat">
          <input type="checkbox" id="15F" />
          <label onClick={() => { setname("15F");setvalid(!valid); settype("vip"); upp() }} for="15F">15F</label>
        </li>
      </ol>
    </li>
    <li class="row row--16">
      <ol class="seats" type="A">
        <li class="seat">
          <input type="checkbox" id="16A" />
          <label onClick={() => { setname("16A");setvalid(!valid); settype("vip"); upp() }} for="16A">16A</label>
        </li>
        <li class="seat">
          <input type="checkbox" id="16B" />
          <label onClick={() => { setname("16B");setvalid(!valid); settype("vip"); upp() }} for="16B">16B</label>
        </li>
        <li class="seat">
          <input type="checkbox" id="16C" />
          <label onClick={() => { setname("16C");setvalid(!valid); settype("vip"); upp() }} for="16C">16C</label>
        </li>
        <li class="seat">
          <input type="checkbox" id="16D" />
          <label onClick={() => { setname("16D");setvalid(!valid); settype("vip"); upp() }} for="16D">16D</label>
        </li>
        <li class="seat">
          <input type="checkbox" id="16E" />
          <label onClick={() => { setname("16E");setvalid(!valid); settype("vip"); upp() }} for="16E">16E</label>
        </li>
        <li class="seat">
          <input type="checkbox" id="16F" />
          <label onClick={() => { setname("16F");setvalid(!valid); settype("vip"); upp() }} for="16F">16F</label>
        </li>
      </ol>
    </li>
    <li class="row row--17">
      <ol class="seats" type="A">
        <li class="seat">
          <input type="checkbox" id="17A" />
          <label onClick={() => { setname("17A");setvalid(!valid); settype("vip"); upp() }} for="17A">17A</label>
        </li>
        <li class="seat">
          <input type="checkbox" id="17B" />
          <label onClick={() => { setname("17B");setvalid(!valid); settype("vip"); upp() }} for="17B">17B</label>
        </li>
        <li class="seat">
          <input type="checkbox" id="17C" />
          <label onClick={() => { setname("17C");setvalid(!valid); settype("vip"); upp() }} for="17C">17C</label>
        </li>
        <li class="seat">
          <input type="checkbox" id="17D" />
          <label onClick={() => { setname("17D");setvalid(!valid); settype("vip"); upp() }} for="17D">17D</label>
        </li>
        <li class="seat">
          <input type="checkbox" id="17E" />
          <label onClick={() => { setname("17E");setvalid(!valid); settype("vip"); upp() }} for="17E">17E</label>
        </li>
        <li class="seat">
          <input type="checkbox" id="17F" />
          <label onClick={() => { setname("17F");setvalid(!valid); settype("vip"); upp() }} for="17F">17F</label>
        </li>
      </ol>
    </li>
    <li class="row row--18">
      <ol class="seats" type="A">
        <li class="seat">
          <input type="checkbox" id="18A" />
          <label onClick={() => { setname("18A");setvalid(!valid); settype("vip"); upp() }} for="18A">18A</label>
        </li>
        <li class="seat">
          <input type="checkbox" id="18B" />
          <label onClick={() => { setname("18B");setvalid(!valid); settype("vip"); upp() }} for="18B">18B</label>
        </li>
        <li class="seat">
          <input type="checkbox" id="18C" />
          <label onClick={() => { setname("18C");setvalid(!valid); settype("vip"); upp() }} for="18C">18C</label>
        </li>
        <li class="seat">
          <input type="checkbox" id="18D" />
          <label onClick={() => { setname("18D");setvalid(!valid); settype("vip"); upp() }} for="18D">18D</label>
        </li>
        <li class="seat">
          <input type="checkbox" id="18E" />
          <label onClick={() => { setname("18E");setvalid(!valid); settype("vip"); upp() }} for="18E">18E</label>
        </li>
        <li class="seat">
          <input type="checkbox" id="18F" />
          <label onClick={() => { setname("18F");setvalid(!valid); settype("vip"); upp() }} for="18F">18F</label>
        </li>
      </ol>
    </li>
    <li class="row row--19">
      <ol class="seats" type="A">
        <li class="seat">
          <input type="checkbox" id="19A" />
          <label onClick={() => { setname("19A");setvalid(!valid); settype("vip"); upp() }} for="19A">19A</label>
        </li>
        <li class="seat">
          <input type="checkbox" id="19B" />
          <label onClick={() => { setname("19B");setvalid(!valid); settype("vip"); upp() }} for="19B">19B</label>
        </li>
        <li class="seat">
          <input type="checkbox" id="19C" />
          <label onClick={() => { setname("19C");setvalid(!valid); settype("vip"); upp() }} for="19C">19C</label>
        </li>
        <li class="seat">
          <input type="checkbox" id="19D" />
          <label onClick={() => { setname("19D");setvalid(!valid); settype("vip"); upp() }} for="19D">19D</label>
        </li>
        <li class="seat">
          <input type="checkbox" id="19E" />
          <label onClick={() => { setname("19E");setvalid(!valid); settype("vip"); upp() }} for="19E">19E</label>
        </li>
        <li class="seat">
          <input type="checkbox" id="19F" />
          <label onClick={() => { setname("19F");setvalid(!valid); settype("vip"); upp() }} for="19F">19F</label>
        </li>
      </ol>
    </li>
    <li class="row row--20">
      <ol class="seats" type="A">
        <li class="seat">
          <input type="checkbox" id="20A" />
          <label onClick={() => { setname("20A");setvalid(!valid); settype("vip"); upp() }} for="20A">20A</label>
        </li>
        <li class="seat">
          <input type="checkbox" id="20B" />
          <label onClick={() => { setname("20B");setvalid(!valid); settype("vip"); upp() }} for="20B">20B</label>
        </li>
        <li class="seat">
          <input type="checkbox" id="20C" />
          <label onClick={() => { setname("20C");setvalid(!valid); settype("vip"); upp() }} for="20C">20C</label>
        </li>
        <li class="seat">
          <input type="checkbox" id="20D" />
          <label onClick={() => { setname("20D");setvalid(!valid); settype("vip"); upp() }} for="20D">20D</label>
        </li>
        <li class="seat">
          <input type="checkbox" id="20E" />
          <label onClick={() => { setname("20E");setvalid(!valid); settype("vip"); upp() }} for="20E">20E</label>
        </li>
        <li class="seat">
          <input type="checkbox" id="20F" />
          <label onClick={() => { setname("20F");setvalid(!valid); settype("vip"); upp() }} for="20F">20F</label>
        </li>
      </ol>
    </li>
    <li class="row row--21">
      <ol class="seats" type="A">
        <li class="seat">
          <input type="checkbox" id="21A" />
          <label onClick={() => { setname("21A");setvalid(!valid); settype("vip"); upp() }} for="21A">21A</label>
        </li>
        <li class="seat">
          <input type="checkbox" id="21B" />
          <label onClick={() => { setname("21B");setvalid(!valid); settype("vip"); upp() }} for="21B">21B</label>
        </li>
        <li class="seat">
          <input type="checkbox" id="21C" />
          <label onClick={() => { setname("21C");setvalid(!valid); settype("vip"); upp() }} for="21C">21C</label>
        </li>
        <li class="seat">
          <input type="checkbox" id="21D" />
          <label onClick={() => { setname("21D");setvalid(!valid); settype("vip"); upp() }} for="21D">21D</label>
        </li>
        <li class="seat">
          <input type="checkbox" id="21E" />
          <label onClick={() => { setname("21E");setvalid(!valid); settype("vip"); upp() }} for="21E">21E</label>
        </li>
        <li class="seat">
          <input type="checkbox" id="21F" />
          <label onClick={() => { setname("21F");setvalid(!valid); settype("vip"); upp() }} for="21F">21F</label>
        </li>
      </ol>
    </li>
    <li class="row row--22">
      <ol class="seats" type="A">
        <li class="seat">
          <input type="checkbox" id="22A" />
          <label onClick={() => { setname("22A");setvalid(!valid); settype("vip"); upp() }} for="22A">22A</label>
        </li>
        <li class="seat">
          <input type="checkbox" id="22B" />
          <label onClick={() => { setname("22B");setvalid(!valid); settype("vip"); upp() }} for="22B">22B</label>
        </li>
        <li class="seat">
          <input type="checkbox" id="22C" />
          <label onClick={() => { setname("22C");setvalid(!valid); settype("vip"); upp() }} for="22C">22C</label>
        </li>
        <li class="seat">
          <input type="checkbox" id="22D" />
          <label onClick={() => { setname("22D");setvalid(!valid); settype("vip"); upp() }} for="22D">22D</label>
        </li>
        <li class="seat">
          <input type="checkbox" id="22E" />
          <label onClick={() => { setname("22E");setvalid(!valid); settype("vip"); upp() }} for="22E">22E</label>
        </li>
        <li class="seat">
          <input type="checkbox" id="22F" />
          <label onClick={() => { setname("22F");setvalid(!valid); settype("vip"); upp() }} for="22F">22F</label>
        </li>
      </ol>
    </li>
    <li class="row row--23">
      <ol class="seats" type="A">
        <li class="seat">
          <input type="checkbox" id="23A" />
          <label onClick={() => { setname("23A");setvalid(!valid); settype("vip"); upp() }} for="23A">23A</label>
        </li>
        <li class="seat">
          <input type="checkbox" id="23B" />
          <label onClick={() => { setname("23B");setvalid(!valid); settype("vip"); upp() }} for="23B">23B</label>
        </li>
        <li class="seat">
          <input type="checkbox" id="23C" />
          <label onClick={() => { setname("23C");setvalid(!valid); settype("vip"); upp() }} for="23C">23C</label>
        </li>
        <li class="seat">
          <input type="checkbox" id="23D" />
          <label onClick={() => { setname("23D");setvalid(!valid); settype("vip"); upp() }} for="23D">23D</label>
        </li>
        <li class="seat">
          <input type="checkbox" id="23E" />
          <label onClick={() => { setname("23E");setvalid(!valid); settype("vip"); upp() }} for="23E">23E</label>
        </li>
        <li class="seat">
          <input type="checkbox" id="23F" />
          <label onClick={() => { setname("23F");setvalid(!valid); settype("vip"); upp() }} for="23F">23F</label>
        </li>
      </ol>
    </li>
    <li class="row row--24">
      <ol class="seats" type="A">
        <li class="seat">
          <input type="checkbox" id="24A" />
          <label onClick={() => { setname("24A");setvalid(!valid); settype("vip"); upp() }} for="24A">24A</label>
        </li>
        <li class="seat">
          <input type="checkbox" id="24B" />
          <label onClick={() => { setname("24B");setvalid(!valid); settype("vip"); upp() }} for="24B">24B</label>
        </li>
        <li class="seat">
          <input type="checkbox" id="24C" />
          <label onClick={() => { setname("24C");setvalid(!valid); settype("vip"); upp() }} for="24C">24C</label>
        </li>
        <li class="seat">
          <input type="checkbox" id="24D" />
          <label onClick={() => { setname("24D");setvalid(!valid); settype("vip"); upp() }} for="24D">24D</label>
        </li>
        <li class="seat">
          <input type="checkbox" id="24E" />
          <label onClick={() => { setname("24E");setvalid(!valid); settype("vip"); upp() }} for="24E">24E</label>
        </li>
        <li class="seat">
          <input type="checkbox" id="24F" />
          <label onClick={() => { setname("24F");setvalid(!valid); settype("vip"); upp() }} for="24F">24F</label>
        </li>
      </ol>
    </li>
    <li class="row row--25">
      <ol class="seats" type="A">
        <li class="seat">
          <input type="checkbox" id="25A" />
          <label onClick={() => { setname("25A");setvalid(!valid); settype("vip"); upp() }} for="25A">25A</label>
        </li>
        <li class="seat">
          <input type="checkbox" id="25B" />
          <label onClick={() => { setname("25B");setvalid(!valid); settype("vip"); upp() }} for="25B">25B</label>
        </li>
        <li class="seat">
          <input type="checkbox" id="25C" />
          <label onClick={() => { setname("25C");setvalid(!valid); settype("vip"); upp() }} for="25C">25C</label>
        </li>
        <li class="seat">
          <input type="checkbox" id="25D" />
          <label onClick={() => { setname("25D");setvalid(!valid); settype("vip"); upp() }} for="25D">25D</label>
        </li>
        <li class="seat">
          <input type="checkbox" id="25E" />
          <label onClick={() => { setname("25E");setvalid(!valid); settype("vip"); upp() }} for="25E">25E</label>
        </li>
        <li class="seat">
          <input type="checkbox" id="25F" />
          <label onClick={() => { setname("25F");setvalid(!valid); settype("vip"); upp() }} for="25F">25F</label>
        </li>
      </ol>
    </li>
    

  </ol>
  <div class="exit exit--back fuselage">
    
  </div>
</div>
<div class="container">
    <div class="flight-info">
      <p>From: SFO, California, US</p>
      <p>To : {props.oneflight.destination}  </p>
      <p>Departure: </p>
      <p>Arrival: </p>
    </div>
    <div class="selected-class">
      
      
     
      <div>
         <img class="imageseats" src={imageeco} alt="" />
      <h2>Economic class<br></br> Selected</h2>
      <p class="pp">Rest and recharge during your flight with
extended leg room, personalized service,
and a multi-course meal service</p>
      <ul>
      <li><i class="fa-solid fa-circle"></i>Built-in entertainment system</li>
        <li><i class="fa-solid fa-circle"></i>Complimentary snacks and drinks</li>
        <li><i class="fa-solid fa-circle"></i>One free carry-on and personal item</li>
        </ul>
        </div>
<div>
<img class="imageseats" src={imagebus} alt=""/>
<h2>Business class <br />Selected</h2>
<p class="pp">Rest and recharge during your flight with extended leg room, personalized service, and a multi-course meal service.</p>
        <ul>
        <li><i class="fa-solid fa-check"></i>Extended leg room</li>
        <li><i class="fa-solid fa-check"></i>Personalized service</li>
        <li><i class="fa-solid fa-check"></i>First two checked bags free</li>
        <li><i class="fa-solid fa-check"></i>Priority boarding</li>
        <li><i class="fa-solid fa-check"></i>Enhanced food and drink service</li>
        <li><i class="fa-solid fa-check"></i>Seats that recline 40% more than economy</li>
      </ul>
      </div>
    </div>
    <div class="passenger-info">
      <p class="passengerinfop">Passenger 1: Sofia Knowles</p>
      <p class="passengerinfop">Seat number: {sits.length}</p>
      <button class="save-close-btn">Save and close</button>
      <button onClick={()=>props.changeView("Seats")} class="save-close-btn2">next flight</button>
    </div>
  </div>
</div>
</div>

)
}


export default Secondseats
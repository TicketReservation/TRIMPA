import React from 'react'
import  './../css/Confirmation.css'
import myImage from '../img/map.PNG';


function Confirmation() {
    return <div id='allll'>
    <section id='dda' className="mb-4">
      <div className="row">
      <div className="col-md-9 mb-md-0 mb-5">
          


      <div class="card-body text-success" id='bord'>
            <p>&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;Your flight has been booked successfully! Your confirmation number is #381029404387</p></div>  
           <div id='tata' > 
            <h2 id='bon'>Bon voyage, Sophia!</h2> 
            <p>Confirmation number: #381029404387</p>
            <p>Thank you for booking your travel with Tripma! Below is a summary of your trip to Narita airport in Tokyo, Japan. We’ve sent a copy of your booking confirmation to your email address. You can also find this page again in My trips.<br/></p>
           </div>
     <div>




         <div className="cardofFlight" > 
             <p>&nbsp; &nbsp;Flight summary</p>
                  <ul className="list-group list-group-flush"> 
                     <li className="list-group-item d-flex align-items-center" >
                       <img className="companyimage"  />
                       <p>companyName</p> &nbsp; &nbsp;
                       <p>DepartureDate</p>  &nbsp; &nbsp;
                       <p> price</p> &nbsp; &nbsp;
                     </li>
                     <li className="list-group-item d-flex align-items-center" >
                       <img className="companyimage"  />
                       <p>companyName</p> &nbsp; &nbsp;
                       <p>DepartureDate</p>  &nbsp; &nbsp;
                       <p> price</p> &nbsp; &nbsp;
                     </li>
                   </ul>
                   
        </div>



    <div   id='tt'>
                <h4>Price breakdown</h4>
             <div class="card"   >
                <p>   Departing Flight   </p>
                <p>   Arriving Flight     </p>
                <p>  Baggage fees    </p>
                <p>   Seat upgrade (business)   </p>
                <p>    Subtotal  </p>
                <p>    Taxes (9.4%)  </p>
                <h4>Amount paid : </h4>
             </div>
     </div> 

  <div id='paymenetMthd'>  Payment method
         <div class="card visa  " >     <br/>
            <h1 id='visa'>&nbsp;&nbsp;&nbsp;visa</h1> <br/>
            <h5>&nbsp;&nbsp;Sophia Knowles</h5><br/>
                <h6>&nbsp; &nbsp;••••••••••••3456 &nbsp; &nbsp; &nbsp; &nbsp; 34/56</h6>
 
         </div>
    </div>



    <div className="col-md-6" id='inpt'>
                <h5 id='aa'>Share your travel itinerary</h5> <br/>
                        <p>You can email your itinerary to anyone by entering their email address here.</p>
                  <div className="md-form mb-0">
                          <input type="text" id="email" name="email" placeholder='Your email' className="form-control" />
                  </div>
                  <div className="md-form mb-0">
                              <input type="text" id="email" name="email" placeholder='Your email' className="form-control" />
                  </div>
                  <div className="md-form mb-0">
                             <input type="text" id="email" name="email" placeholder='Your email' className="form-control" />
                  </div>
                        <button>Email itinerary</button>
                             <button>Add another</button>
        </div>
  <div className='row'  >
    <h5 id='aa'>Flight Route</h5>
        <img className='imgg' src={myImage} alt="Description of the image" />
        </div>
           </div>
        </div>

       <div  className="col-md-3 text-center">

          <div className='test'>
            <h3>Shop hotels</h3>
            <p>Tripma partners with thousands of hotels to get you the best deal. Save up to 30% when you add a hotel to your trip.</p>
            </div>


          <div class="card-deck">

  <div class="card" >
   
    <img  class="card-img-top" id='caardim' src='https://s3-alpha-sig.figma.com/img/26d7/054b/1ce2920c5ec71df15da27519689b9789?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BdbjUb3yj53ndWDGefKaRlmuoiGqzqZeQy3hHPnkKQdvhbda~T7ptQsWeSSxoK6~ckpArSaPC1ggUWaAl2qEqpv6rXNVFmTHaA4XbUd1PAWYMosa4Tvwjdq-F01MciZ7baAwf6hIQkyO16tktmmEIb8FvNjUgU7yyWG1Z8QlMcPSytfWPUZp~FyJ1dqc0EhuD4ZCcPM8YoCF2xtMLeNkGxg468dtFjcrPWsfD3fGVNCMNku0OZgIRB3sLgK8A5F5Q5JYS5FhYVK1HdwL7LFHdLnf~fc~J4j5zUvPXNbBLvbemoVdA3Sn8MVltap5F6BG208LDd5tB-2fKIVKU1skPA__'></img>
    <div class="card-body">
      <h5 class="card-title">Ryokan Japan</h5>
      <p class="card-text"><small class="text-muted">Enjoy views of the garden from your room</small></p>
    </div>
  </div>

  <div class="card" >
    <img class="card-img-top" id='caardim' src="https://s3-alpha-sig.figma.com/img/d092/f0bc/25cd9c6efcb6e1e6614c53024b9054cf?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PfUm3cfoKWgOru40t-XFv-QJBSafUK83gBNG2wPV1RI5kSj66ZwX2OSdI0HZmE7XHekvUolDGWnpKAC~YW0soOJClKBgDqiRHKAZf0rMXfzTs8Ry~5n-tB76ssHLk8NR5dSeLfCI-RbUUw3rAwGVCu0O68SqIug4lwXTIU~71vm8eyiJ8zBvnh0DUTvjcFbh9DafeAVOiiP5L~AgD2lle6p4bqJmNorX6q0S2lOrNTpgGmiEeNlPhA8fnLlyXMfxrEQXLlxCBHVNHuet0fZOG00b7q3z7iUc3k31tED4aJ25js7cAc6wSXG23-JXjzY-PzkzVLw9iiQF4NC~CEtgEw__" alt="Card image cap"></img>
    <div class="card-body">
      <h5 class="card-title">Bessho SASA</h5>
      <p class="card-text"><small class="text-muted">Japanese ryokan with private onsen bath</small></p>
    </div>
  </div>
  <div class="card" >
    <img class="card-img-top" id='caardim' src="https://s3-alpha-sig.figma.com/img/6c23/f293/2c753ba8499abd4b6461708531f7e670?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kd-19ZRNtZxb8GnFbR53sdOEwFPz9kRWPg3QVNqmvf7bIRgBLcalC~FtJD1jipmsyb6RMYTGPiziLp9K9L14qbfOSj5hHyrXoqkFoWr20HX10RlmMU9IVYGImJlmPCBjLf7pq8FoIkIakpiIJZaHEudBjKBycqLRBjKF3348SgBoLzPS96Fnzq~EMd9152I64TKLuoC7D9c0S37NvjPRdecuhm2KRc802EeCFaH7mRAvvRr7UoUbBD5~gth7f3azs-mCG2z9stFW5pMTvVpEaJndNletz3fDPNcKydcZ3hxMd8VFHZtoOg7nY1G66fEXB8fyKZY0iM7NAUzS2uSBLg__" alt="Card image cap"></img>
    <div class="card-body">
      <h5 class="card-title">HOTEL THE FLAG 大阪市</h5>
      <p class="card-text"><small class="text-muted">Modern hotel in the heart of Osaka</small></p>
    </div>
  </div>
           
  <div class="card" >
    <img class="card-img-top" id='caardim' src="https://s3-alpha-sig.figma.com/img/0c96/0e7a/18af705b2a0aed6fd32f8b9648c710b9?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Mg1LPSmOi~ueVgzc~JcaNV5mfeSQ76yxT1Zgnujj2gkypLLcBYhL~Y8ymFTUHLn3hdxMzwc0IFuOZvsU7gFuznXW1fmgxASPce86~IyyG2SEnk2eoqo7QgS~RzXJ0b~j6o1k1QqKHP7aAuu1iBXd1vfPqNxDlrsT1BmwmdfY-u88pU8IOtqqy-n6~91AO5BQsAEtZcuCEdgpLOFsb~bOtDVwat1o4xfmpXMNfxxupSiPM5cFVaDLjw9FcUODkbujiL53sTfps2VeUIjZVCsZ~yYncRqoTEaxAnJqjTlDp0840g8W5kQtgJOCAsZYVcyCGbv69ndqB42d6g~Rn0QhMw__" alt="Card image cap"></img>
    <div class="card-body">
      <h5 class="card-title">9 Hours Shinjuku</h5>
      <p class="card-text"><small class="text-muted">A convenient capsule hotel at Shinjuku station</small></p>
    </div>
  </div>
  <button>Shop all hotels</button>
           
  <div class="card" >
    <img class="card-img-top" id='caardim' src="https://s3-alpha-sig.figma.com/img/553c/4c81/df76abf6b7ef595f94a7e74dee17c78f?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IsPRDxF-ePitZ8Mmft2j2ZTyGmzyV~9wWEr3RD8nRV~Drnppw5ZKS-WOb8jB26-zBRTeyJ4doG1Dol~nsIe0lUDXSfus1k6afrgeXkcDJhorMa3dm0NXSR1TwQS8-MSDgcy9-ANfddoriKm~~n1Bab-7C5wycK5-BMMx6VJF-Kcy1-j0ERaCA3RSV5W7dDTAkH0I~5iR2QBz~1RKhrNHp8Hmwc3JHRUqEAxAjP7kvayloO0Tv1W2UaiJx10lx2XbKdE0Wi5bWngiazAhHV6cEfPrPZRQQZ5LDP0fUZ7wJAmsBiAFScqpwIxC3wpO7d2e63lESpr1MrPnPhcfQdpaAg__" alt="Card image cap"></img>
    <div class="card-body">
      <h5 class="card-title">Nihon Kimono</h5>
      <p class="card-text"><small class="text-muted">Wear the national dress of Japan around the city</small></p>
    </div>
  </div>

  <div class="card" >
    <img class="card-img-top" id='caardim' src="https://s3-alpha-sig.figma.com/img/1e57/4220/a4113b48c9bfbd6cc4d9376aff28881c?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bFzJ7ynGS7FsQZu3niBZ5z-Ni1qQ-MhRI9Q6Oq5ClnsWTTI0cLa4t~H7IjJnvzPQbhKX4JZ5wNM1lsMryH77-U3zx1VEOsCLsvY2--vBobXW-0c7R33zqycK3QxZVNuBk13H749hrYdw8TieL5RWaM-keOKWW9wKYe0l1sxRrageK5vLrjM1E3nvX6aIqbjZ~1GlJMXyt3MH9YEUknCMkiI6bHWhxVBVQq~7f7ibiYyoveX89INkRPXNJFwBWheDF2R~BKyLtZu1MQP5qcPnyPc4QGRhWcRlYx1ttYmiBFLlFsUMaYrzNsdPCeyUEcyTBMbY0iPonq4JBASX4XZ5Ng__" alt="Card image cap"></img>
    <div class="card-body">
      <h5 class="card-title">teamLab Borderless</h5>
      <p class="card-text"><small class="text-muted">A modern sensory experience of light and sound</small></p>
    </div>
  </div>

 
  <button>Shop all hotels</button>

</div> </div> </div>
    </section>
   
  </div>
    }
    
   

export default Confirmation

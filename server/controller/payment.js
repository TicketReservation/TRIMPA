const axios = require("axios")

module.exports={
 Add: async(req , res) =>{
    const url = 'https://developers.flouci.com/api/generate_payment'
const paye = {
        "app_token": "5f3db3de-a31e-4e6e-b418-db494c74cd83", 
        "app_secret": process.env.FLOUCI_SECRET ,
        "amount": req.body.amount,
        "accept_card": "true",
        "session_timeout_secs": 1200,
        "success_link": "http://localhost:3000/success",
        "fail_link": "https://localhost:3000/fail",
        "developer_tracking_id": "5aa70c0d-fc2a-4571-8bb0-358a8bfcebe8"
    }
  await axios.post(url,paye).then((result)=>{
    res.send(result.data);
    })
    .catch(err=>{console.log(err)})

 },
 Verify : async(req,res)=>{
  const payment_id = req.params.id

await axios.get(`https://developers.flouci.com/api/verify_payment/${payment_id}`,{
  headers : {
    'Content-Type': 'application/json',
    'apppublic': "5f3db3de-a31e-4e6e-b418-db494c74cd83", 
    'appsecret': process.env.FLOUCI_SECRET 
  }
}).then((result)=>{
  res.send(result.data)
})
.catch((err)=>{
console.log(err.message);
})
 }  
 

}
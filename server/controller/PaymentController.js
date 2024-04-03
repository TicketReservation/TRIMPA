const axios = require('axios');

module.exports = {
  add: async (req, res) => {
    const url = "https://developers.flouci.com/api/generate_payment";
    const pay = {
      "app_token": "9424a3af-cf87-487d-91ca-9d2ff1c6d186",
      "app_secret": "a9a2bbad-6b51-465e-832d-c3c4d84e7546",
      "amount": req.body.amount,
      "accept_card": "true",
      "session_timeout_secs": 1200,
      "success_link": "http://localhost:3001/confir",
      "fail_link": "http://localhost:3000/client/cart/fail",
      "developer_tracking_id": "8761617a-e86c-4462-a4a5-85a7ac3ba3c0"
    };
    await axios.post(url, pay)
      .then((result) => {
        res.send(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },

  verify: async (req, res) => {
    const payId = req.params.id;
    await axios.get(`https://developers.flouci.com/api/verify_payment/${payId}`,
      {
        headers: {
          'Content-Type': 'application/json',
          'apppublic': '9424a3af-cf87-487d-91ca-9d2ff1c6d186',
          'appsecret': 'a9a2bbad-6b51-465e-832d-c3c4d84e7546'
        }
      })
      .then((result) => {
        res.send(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

const express = require('express')
const router = express.Router()
const Nexmo = require('nexmo');
const nexmo = new Nexmo({
  apiKey: "740d5ce5",
  apiSecret: "EKu0gOY6sJ89RjLf"
});

// router.get("/get",(req, res) => {
//     res.send({
//         AllTodo: "sammk"
//     })
// })

// router.post("/Showsms", async (req, res) => {
// nexmo.message.sendSms(
//   201, '+923323819974', 'yo',
//     (err, responseData) => {
//       if (err) {
//         console.log(err);
//       } else {
//         console.dir(responseData);
//       }
//     }
//  );

// })

module.exports = router
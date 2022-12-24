const express = require('express');
const router = express.Router();
const Sib = require('sib-api-v3-sdk')
require('dotenv').config()

const client = Sib.ApiClient.instance

const apiKey = client.authentications['api-key']
apiKey.apiKey = process.env.API_KEY


const tranEmailApi = new Sib.TransactionalEmailsApi()

/* send email. */
router.get('/', function(req, res, next) {
  const sender = {
    email: 'senderemail@gmail.com',
    name: 'SaraaX',
  }

  const receivers = [
    {
      email: 'receiveremail@gmail.com',
    },
  ]

  tranEmailApi
      .sendTransacEmail({
        sender,
        to: receivers,
        subject: 'Hello there this is sample email from saraa',
        textContent: `
        This will give you an idea how can you use send in blue to end an email.
        `,
        htmlContent: `
        <h1>Saraa X</h1>
        <a href="#">Visit</a>
                `,
      })
      .then(()=>console.log("email sent"))
      .catch(console.log)





});

module.exports = router;
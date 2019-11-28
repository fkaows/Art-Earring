'use strict';
const functions = require('firebase-functions');
// const admin = require("firebase-admin");
// const fs=require('fs'); 
// const nodemailer = require('nodemailer');

// admin.initializeApp();

// const gmailEmail = "nunu.fang.belle@gmail.com";
// const gmailPassword = "nunufangbelle";
// const mailTransport = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: gmailEmail,
//     pass: gmailPassword,
//   },
// });

// var htmlmail=fs.readFileSync("welcome.html","utf-8").toString();

// exports.sendWelcomeEmail = functions.auth.user().onCreate((user) => {
//     const recipent_email = user.email; 
   
//     const mailOptions = {
//         from: '"sender name" <sendermail@gmail.com>',
//         to: recipent_email,
//         subject: 'Welcome to MY APP',
//          html: htmlmail
//     };
    
//   try {
//     mailTransport.sendMail(mailOptions);
//     console.log('mail send');
    
//   } catch(error) {
//     console.error('There was an error while sending the email:', error);
//   }
// return null; 
//   });
const admin = require('firebase-admin');
admin.initializeApp();
const nodemailer = require('nodemailer')
const gmailEmail = "nunu.fang.belle@gmail.com";
const gmailPassword = "mfmrzegqorzuheex";
const mailTransport = nodemailer.createTransport({
  //service: 'gmail',
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: gmailEmail,
    pass: gmailPassword,
  },
});

const APP_NAME = 'Art Earring Shop';
exports.WelcomeEmail = functions.auth.user().onCreate((user) => {
    const email = user.email; // The email of the user.
    const displayName = user.displayName; // The display name of the user.
    // [END eventAttributes]
  
    return WelcomeEmail(email, displayName);
  });

  async function WelcomeEmail(email, displayName) {
    const mailOptions = {
      from: `${APP_NAME} <nunu.fang.belle@gmail.com>`,
      to: email,
    };
  
    // The user subscribed to the newsletter.
    mailOptions.subject = `Welcome to ${APP_NAME}!`;
    mailOptions.text = `Thank for your register!!! ${email} Welcome to ${APP_NAME}. I hope you will enjoy in our shop.
    
    Art Earring 
    THANK YOU.`;
    await mailTransport.sendMail(mailOptions);
    console.log('New welcome email sent to:', email);
    return null;
  }

// exports.findProduct = functions.https.onRequest((req, res) => {
//     return admin.database().ref('order/item').once('value', (snapshot) => {
//         let products = snapshot.val()

//         let productTitle = req.query.item

//         test(productTitle, products, res)
//     })
// })
// function sendEmail(user) 
// {
// // Send welcome email to new users
// const mailOptions = 
// {
//     "From": "noreplay@firebase.com",
//     "To": user.data.email,
//     "Subject": "Test",
//     "TextBody": "Hello from Art Earring!"
// }
// // Process the sending of this email via nodemailer
// return mailTransport.sendMail(mailOptions)
//     .then(() => console.log('Welcome confirmation email sent'))
//     .catch((error) => console.error('There was an error while sending the welcome email:', error))
// }

// let test = async function(productTitle, products, res) {
//     let price = 'not found item'
//     await products.forEach(product => {
//         if(product.name == productTitle) {
//             price = product.price;
//         }
//     })

//     await res.json({'price': price.toString()})
// }
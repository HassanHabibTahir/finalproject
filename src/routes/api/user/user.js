const express = require('express');
const Userprofile = require('../../../module/user/userprofile');
//crypto
const crypto = require('crypto')
// dotenv

require('dotenv').config()


// node mailer requred
const nodemailer = require("nodemailer");
//bcrypt product

const bcrypt = require('bcryptjs')
//jsonwebTocken
const jwt = require('jsonwebtoken');
//router
const router = express.Router();
//keys
const keys = require('../../../config/key');
//passport
const passport = require('passport');


//get Token form ./user/token
const Tokenprofile = require("../../../module/token/token");

//valiidataier
const validatePhoneNumber = require('validate-phone-number-node-js');
//errosrs
let errors;


//user signUp
// /api/users

router.post('/rejister', (req, res) => {

//   const result = validatePhoneNumber.validate(+4333334123);
//   console.log(result)
//  if(result){
//   const errors = "incoreect phonenumber"
//   return res.status(400).json(errors)
//  }
  Userprofile.findOne({ email: req.body.email,PhoneNumber:req.body.PhoneNumber })
    .then((user) => {
      if (user) {
        const errors = "user already exist"
        return res.status(400).json(errors)
      }
      else {
        const newUser = new Userprofile({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password,
          product: req.body.product,
          PhoneNumber:req.body.PhoneNumber,
          typeAdmin:false,
          
        })


        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err
            newUser.password = hash
            //save and send to client
            newUser.save().then((user) => { res.json(user) })
              .catch(err => { console.log(err) })

          })
        })



      }
    })


})

//user login 
///api/users



router.post('/login', (req, res) => {


  const email = req.body.email;
  const password = req.body.password;
  Userprofile.findOne({ email }).then((user) => {
    if (!user) {
      errors = "user not found"
      return res.status(404).json(errors)
    }


    bcrypt.compare(password, user.password)
      .then((isMatch) => {
        if (isMatch) {

          const payload = { id: user.id, name: user.name ,Admin:user.typeAdmin }
          //using token
          jwt.sign(payload,
            keys.secretOrkey,
            { expiresIn: 5000 },
            (err, token) => {
              res.json({
                success: true,
                token: 'Bearer ' + token
              })
            }

          )


        }
        else {
          errors = "passsword in corect";
          return res.status(400).json(errors)
        }
      })


  })



})




router.get(
  '/user',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    res.json({
      id: req.user.id,
      name: req.user.name,
      email: req.user.email
    });
  }
);



//reset pawword

router.post('/forgetpassword', (req, res) => {

  if (req.body.email === '') {
    errors = " email is required"
    return res.status(400).json(errors)
  }

  const email = req.body.email
  const user = Userprofile.findOne({ email: email })
    .then((user) => {
      if (user === null) {
        errors = "emial is not in database"
        return res.status(403).json(errors)
      }

      else {
        const token = crypto.randomBytes(20).toString('hex')
         var TokenProfile=new Tokenprofile();
         TokenProfile.resetToken = token;
         TokenProfile.email = user.email;
         TokenProfile.resetTokenExpiration = Date.now() + 3600000
         TokenProfile.save((err, token)=>{
console.log(token)
         });
        // console.log(token)


        transporter = nodemailer.createTransport({
          host: 'smtp.gmail.com',
          port: 587,
          secure: false, // true for 465, false for other ports
          auth: {
            user: 'productsgobachi@gmail.com', //   company generated ethereal user
            pass: 'gobachi123'  // generated ethereal password
          }
        });

        // const transporter= nodemailer.createTransport({
        // service:'gmail',
        // auth:{
        //   user:`${process.env.EMAIL_ADDRESS}`,
        //   pass:`${process.env.EMAIL_PASSWORD}`,
        // }
        // })

        const mailOptions = {
          from: 'hassanhabibtahir@gmail.com',
          to: user.email,
          subject: 'Link to reset passsword',
          text: 'you are receiving this because you have requested to reset password for your account.\n'
            + 'please cliks on the following links\n'
            + `http://localhost:3000/reset/${token}`

        }

        transporter.sendMail(mailOptions, (err, resonce) => {
          if (err) {
            console.error('ther was an error', err)
          }
          else {
           
           res.status(200).json('recovery email is sent')
          }
        })

      }


    })

})

router.post('/reset/:token', (req, res) => {

  Tokenprofile.findOne({
    resetToken: req.params.token,
    resetTokenExpiration: { $gt: Date.now() }
  })
    .then((user) => {
      if (user == null) {
        res.json('password reset link is invalid or expired')
      }
      else {
        // Userprofile.findOneAndUpdate({ email: user.email }, )
        // .then((user)=>{


          var password = req.body.password;
          bcrypt.genSalt(10, (err, salt) => {
  
            bcrypt.hash(password, salt, (err, hash) => {
              if (err) throw err
              // user.password = hash
              //save and send to client
            //  user.save().then((user) => { 
                // console.log("paswordnew",user.password)
               // res.json(passwordnew=>{

                  Userprofile.findOneAndUpdate({ email: user.email },{password:hash},{ new: true} )
                  .then((err, data)=>{
                    res.json(data)
                  console.log("password is updata",res)
                  })

                //}) })
                .catch(err => { console.log(err) })
  
           // })
          })



        })
     

      
      }
    })

})


module.exports = router








































































// Skip to content
// Search or jump to…

// Pull requests
// Issues
// Marketplace
// Explore

// @Hamaddogar 
// Learn Git and GitHub without any code!
// Using the Hello World guide, you’ll start a branch, write comments, and open a pull request.


// Hamaddogar
// /
// ApniDokan
// 1
// 00
//  Code Issues 0 Pull requests 0 Actions Projects 0 Wiki Security Insights Settings
// ApniDokan/router/resetpassword.js
//  Hamad Ali Apni Dokhan
// 31a9c35 on Jan 1
// 34 lines (24 sloc)  984 Bytes

// const express = require('express');
// const router = express.Router();
// var bcrypt = require('bcrypt-nodejs');
// const Signup = require('../models/signupSceema');
// const  UserForgot = require('../models/forgotSceema');

//     router.post('/resetpassword/:token', function (req, res) {

//         UserForgot.findOne({ resetPasswordToken: req.params.token,
//            resetPasswordExpires: { $gt: Date.now() } }, function (err, user) {
//           if (user) {
//             var password = req.body.password
//             bcrypt.hash(password, null, null, function (err, hash) {
//               req.body.password = hash


//            Signup.findOneAndUpdate({ email: user.email }, req.body, function (err, user) {

//                 if (user) {

//                   res.json(user);

//                 }
//                 else {
//                   res.json(err)
//                 }

//               })

//             });
//           }

//         });
//       });
//       module.exports= router;
// © 2020 GitHub, Inc.
// Terms
// Privacy
// Security
// Status
// Help
// Contact GitHub
// Pricing
// API
// Training
// Blog
// About










// .............................................first..................
//   // 1) Get user based on POSTed email
//   const user =  Userprofile.findOne({ email: req.body.email });
//   if(!user){
//     errors="user not  found that email"
//     return res.status(404).json(errors)
//  }
//   // 2) Generate the random reset token
//   const resetToken = Userprofile.createPasswordResetToken();
//   Userprofile.save()







  // 1Get USER EMALIL ON POST METHOD
  //2 Generate  the  randome  reset token
  // ...............................................................second............
//  crypto.randomBytes(32, (err, buffer) => {
//     if (err) {
//       console.log(err);
//     }
//     const token = buffer.toString('hex');
//     console.log(token)
//     Userprofile.findOne({ email: req.body.email })
//       .then(user => {
//         if (!user) {
//           errors="user email not found"
//           return res.status(404).json(errors)
//         }

//        // Create a verification token
//     var token = new Token({
//       _userId: user._id,
//       token: crypto.randomBytes(16).toString("hex")
//     });


//     Userprofile.passwordResetToken = token.token;
//     Userprofile.resetTokenExpiration = Date.now() + 3600000;
//         Userprofile.save((err)=>{

//           if (err) {
//             return res.status(500).send({ message: err.message });
//           }
//           //token save
//           token.save((err)=>{
//             if (err) {
//               return res.status(500).send(err.message);
//             }







//           }).catch(error => {
//             return res.status(500).send({ message: error });
//           });

//         });
//       })

//   });

  //3 send to user Email

// .........................................thired...................





// const express = require('express');
// const router = express.Router();
// var nodemailer = require('nodemailer');
// var async = require('async');
// var crypto = require('crypto');
// const  UserForgot = require('../models/forgotSceema');


// router.post('/forgot', function (req, res, next) {
//     async.waterfall([
//       function (done) {
//         crypto.randomBytes(20, function (err, buf) {
//           var token = buf.toString('hex');
//           done(err, token);
//         });
//       },
//       function (token, done) {
//         var userForgot = new UserForgot();
  
//         userForgot.resetPasswordToken = token;
//         userForgot.resetPasswordExpires = Date.now() + 3600000;
//         userForgot.email = req.body.email;
  
//         userForgot.save(function (err) {
//           done(err, token, userForgot);
//         });
  
//       },
//       function (token, userForgot, done) {
//         var smtpTransport = nodemailer.createTransport({
//           host: "smtp.gmail.com",
//           port: 587,
//           secure: false,
//           auth: {
//             user: "shopmatechallenge@gmail.com",
//             pass: "12345hamad"
//           }
//         });
  
//         var mailOptions = {
//           to: userForgot.email,
//           from: 'shopmatechallenge@gmail.com',
//           subject: 'Shop Mate  (Turning)',
//           text: 'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n' +
//             'Please click on the following link, or paste this into your browser to complete the process:\n\n' +
//             'http://localhost:3000/reset/' + token + '\n\n' +
//             'If you did not request this, please ignore this email and your password will remain unchanged.\n'
//         };
//         smtpTransport.sendMail(mailOptions, function (err) {
//           res.json('Your e-mail Successfully  has been  sent to ' + userForgot.email + '');
//           done(err, 'done');
//         });
//       }
//     ], function (err) {
//       if (err) return next(err);
//       res.redirect('/forgot');
//     });
//   });
//   module.exports=router
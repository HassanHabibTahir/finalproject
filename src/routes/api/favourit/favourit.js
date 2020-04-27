const express = require('express');
const favRouter = express.Router();
// const favAdCtrl = require('../controller/fav');
const Products = require('../products/produts');
const Faourit = require('../../../module/favourit/favritAd')
const favConroler = require('../../../controler/Favourit')
const passport = require('passport');

favRouter.post('/favaddChanged',

passport.authenticate('jwt', { session: false }),

function(req,res){
    
    adId=req.body._id
    console.log(adId)
    favConroler.favAdClicked(req,function(err,ad){
        res.json(ad)
    })
})



favRouter.get('/getFavouritadd'
,
passport.authenticate('jwt', { session: false }),
function(req,res){
let user =req.user
    favConroler.showFavouritProduct(user,function(err,ad){
        res.json(ad)
    })


})


module.exports = favRouter
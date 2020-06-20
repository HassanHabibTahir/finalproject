const express = require('express');
const favRouter = express.Router();
// const favAdCtrl = require('../controller/fav');
const Products = require('../products/produts');
const Favourit = require('../../../module/favourit/favritAd')
const favConroler = require('../../../controler/Favourit')
const passport = require('passport');

favRouter.post('/favaddChanged',

passport.authenticate('jwt', { session: false }),

function(req,res){
    console.log(req)
    adId=req.body.favpro._id
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
        console.log(ad)
        res.json(ad)
    })


})

favRouter.get('/FavproductId',(req,res)=>{
    Favourit.find({}).then((Ads)=>{
        if(!Ads){
            errors = "there are no favourit proucts";
            return res.status(400).json(errors)
        }
        res.json(Ads);
    })

})




module.exports = favRouter
const express = require('express');
const router = express.Router();
const multer = require('multer');
const Product = require('../../../module/products/product');
const Users  = require('../../../module/user/userprofile')
const Productcontroler = require('../../../controler/product')
const passport = require('passport');
// var storage = multer.diskStorage({
//     destination: function (req, file, callback) {
//         callback(null, 'static/');
//     },
//     filename: function (req, file, callback) {
//         callback(null, Date.now()+''+file.originalname);
//     }
// });



var storage = multer.diskStorage({
    destination: function (req, file, cb) {
    cb(null, 'public/file')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now()+Math.random() + '-' +file.originalname )
  }
})

const imageFilter = function (req, file, cb) {
    //accept image files only
    if(!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
        return cb(new Error('Only image files are allowed!'), false);
    }
    cb(null, true);
};
//upload
// fileFilter: imageFilter
var upload = multer({ storage: storage,fileFilter: imageFilter  })
///api/product/upload
router.post('/upload',
passport.authenticate('jwt', { session: false }),
upload.array('files',7), (req, res) => {
      // console.log(req.user)
    // if (!req.files) {
    //     return res.send('Please upload File')

    // }
    //else if(req.files){

        Productcontroler.submitProduct(req, (err, product) => {
            res.json(product)
        })
    //}





})

// router.delete('/deleteProduct/:id', (req, res) => {

//     Product.findByIdAndDelete({ _id: req.params.id }).then((profile) => {

//         res.json("product delete succefully")
//     })

// })

// router.delete('/deleteproduct',(req,res)=>{
//     Productcontroler.deleteProduct(req,()=>{
//         res.json("delete elemets successfull")
//     })
// })



router.get('/profilebyid/:id',(req,res)=>{
  Product.findById({ _id: req.params.id }).then((profile) => {

 
   
      res.status(200).json(profile)
 

  })
})


// /api/product/getallproducts
router.post('/getallproducts',(req,res)=>{
  passport.authenticate('jwt', { session: false }),
  
  Product.find({user:req.body.user.id})
  .populate('user', ['name','isVarified'])
  .then((data)=>{
    res.status(200).json(data)
  })
  

})
// allProduts

router.get('/allProduts',(req,res)=>{
  Product.find()
  .populate('user', ['name' ,'isVarified' ])
  .then(allproduts => {
    if (!allproduts) {
      errors = "there are no products";
      return res.status(400).json(errors)
    }
// console.log(allusers)
    res.json(allproduts);
  })
  .catch(err => res.status(404).json({ profile: 'There are no products' }));
});


router.post('/PostCart',
passport.authenticate('jwt', { session: false }),
(req,res)=>{


  const prodId = req.body.id;
  console.log(prodId)
  Product.findById(prodId)
    .then(product => {
      console.log(req.user)
      return req.user.addToCart(product);
    })
    .then(result => {
      console.log(result);
      // res.redirect('/cart');
    });

})


router.get('/getCart',
passport.authenticate('jwt', { session: false }),
(req, res, next) => {
 console.log(req.user.cart.items.productId)
 
 req.user
 
 .populate('cart.items.productId')
 .execPopulate()
 .then(user => {
   const products = user.cart.items;
   res.json({products: products});
  console.log(products)
   //  res.render('shop/cart', {
  //    path: '/cart',
  //    pageTitle: 'Your Cart',
  //    products: products
  //  });
 })
 .catch(err => console.log(err));
});


module.exports = router
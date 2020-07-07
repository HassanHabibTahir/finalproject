const express = require('express');
const router = express.Router();
const multer = require('multer');
const Product = require('../../../module/products/product');
const Users  = require('../../../module/user/userprofile');
const Faourit = require('../../../module/favourit/favritAd')
const Order = require('../../../module/orders/order')
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

// router.delete('/deleteUserproduct/:id', (req, res) => {

    
//   Product.findByIdAndDelete({ _id: req.params.id }).then((profile) => {
//   })   
     
  
//   Faourit.deleteMany({"adId":req.params.id}).then((re)=>{

//   })
// })

router.delete('/deleteUserproduct/:id',
(req,res)=>{

  Productcontroler.deleteProduct(req,(err,pr)=>{

        res.json("delete elemets successfull")
    })
})



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
  .populate('user', ['name' ,'isVarified','userCondition' ])
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

router.post('/categoryProducts',(req,res)=>{

console.log(req)

    Product.find({"category":req.body.category})
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
})


// allProduts
router.post('/allProduts2',(req,res)=>{
  const keyword = req.body.keyword;
  console.log(keyword);
  Product.find({
    $or: [ 
      { productname: {'$regex': keyword }}, 
      { discription: {'$regex': keyword } } 
    ]
  })
 .populate('user', ['name' ,'isVarified' ])
 .then(allproduts => {
   console.log(allproduts);
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



router.post('/removeCartproduct',
passport.authenticate('jwt', { session: false }),
(req,res,next)=>{
  
  const prodId = req.body.id;
  console.log(prodId)
  req.user
    .removeFromCart(prodId)
    .then(result => {
    res.json("suceess fully deleted product")
    })
    .catch(err => console.log(err));

}
)
// /api/product/postOrdr
router.post('/postOrdr',
passport.authenticate('jwt', { session: false }),
(req,res)=>{
  console.log(req.body)
  req.user
  .populate('cart.items.productId')
  .execPopulate()
  .then(user => {
    console.log(user)
   const ordeProducts = user.cart.items.map( i=>{
     return {email: req.user.email,
       cellNo:req.user.cellNo,
       address: req.user.address,
       city: req.user.city,
       province: req.user.province,
       quantity: i.quantity, product: { ...i.productId._doc }}
   })
   const order = new Order({
    user: {
      email: req.user.email,
      userId: req.user,
      // cellNo:req.user.cellNo
    },
    products: ordeProducts,
    seller:req.body.id
  });
  return order.save().then((orders)=>{
    res.json("Order is posted on seller  account")
  });
  })
   .then(result => {
      return req.user.clearCart();
    })
    .catch(err => console.log(err));

})
  //  router.post('/getOrders',
  //  passport.authenticate('jwt', { session: false }),
  //  (req,res,next)=>{
  //    console.log(req.body.user.id)

  //   Order.findById({ 'seller': req.body.user.id })
  //   .then(orders => {
  //     res.json({orders: orders});
       
  
  //   })
  //   .catch(err => {
  //     res.json(err)
  
  //   });

  //  }
   
   
  //  )
 
  // router.route("/getOrders").get(function(req, res) {
  //   Order.findOne({}, function(err, result) {
  //     if (err) {
  //       console.log(err);
  //     } else {
  //       res.json(result);
  //     }
  //   });
  // });

  router.get('/getOrders',
  // passport.authenticate('jwt', { session: false }),



  (req, res) => {
    Order.find().then(products => {
    
        if (!products) {
          errors = "there are no profile";
          return res.status(400).json(errors)
        }
res.json(products)

      })
      .catch(err => res.status(404).json({ profile: 'There are no profiles' }));
  });

  // router.post('/deleteOrder',
  // passport.authenticate('jwt', { session: false }),
  // (req,res)=>{
    
  //   Order.find().then(products => {
    
  //     if (!products) {
  //       errors = "there are no profile";
  //       return res.status(400).json(errors)
  //     }
  // req.user.DeleteOrder(products,req,(prod,err)=>{

  //   prod
  // })

  //   })
  //   .catch(err => res.status(404).json({ profile: 'There are no profiles' }));

  // })

   router.post('/updatequantity',
   passport.authenticate('jwt', { session: false }),
   (req,res)=>{
   Users.findById(req.user._id).then((user)=>{
 return req.user.ChangedQuantity(req,user)
   })

  //   req.user.populate('cart.items.productId')
  // .execPopulate().then((user)=>{
  //   const Update = user.cart.items.filter( i=> i.id===req.body.ids._id)
        
  //         })
  })




module.exports = router
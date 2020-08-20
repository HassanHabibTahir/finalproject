// const crypto = require('crypto');
const geocoder = require('../../util/geocoder');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    // product: {
    //     type: String,
    //     required: true
    // },
    cellNo: {
        type: String,
        required: true
    },
    address: {

        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    province: {
        type:String,
        required:true

    },
    isVarified: {
        type: Boolean
        , default: false
    },
    typeAdmin: {
        type: Boolean,
        default: false
    },

    userCondition:{
      type:String,
      required:true
    },
    avatar: {
      type: String,
      required: true
  },
  bankname: {
    type: String,
    required: true
},
bankcode: {
    type: String,
    required: true
},

accountnumber: {
    type: String,
    required: true
},

  currentLocation: {
      latitude:{
        type:Number,
        required:true
      },
      longitude:{
        type:Number,
        required:true
      }
  }
// currentLocation: {
//   type: [Number],
//   required: true
// }
,
    cart: {
        items: [
          {
            productId: {
              type: Schema.Types.ObjectId,
              ref: 'products',
              required: true
            },
            quantity: { type: Number, required: true }
          }
        ]
      },

  

    resetToken: String,
    resetTokenExpiration: Date


})


// const Userprofile = mongoose.model('users', UserSchema);





userSchema.methods.addToCart = function(product) {
    const cartProductIndex = this.cart.items.findIndex(cp => {
          return cp.productId.toString() === product._id.toString();
        });
        console.log(cartProductIndex)
        let newQuantity = 10;
        const updatedCartItems = [...this.cart.items];
        
        if (cartProductIndex >= 0) {
              newQuantity = this.cart.items[cartProductIndex].quantity + 1;
              updatedCartItems[cartProductIndex].quantity = newQuantity;
            } else {
                  updatedCartItems.push({
                        productId: product._id,
                        quantity: newQuantity
                      });
                    }
                    const updatedCart = {
                          items: updatedCartItems
                        };
                        this.cart = updatedCart;
                        return this.save();
                    };
                     
                    
                    userSchema.methods.removeFromCart = function(productId) {
                      const updatedCartItems = this.cart.items.filter(item => {
                        console.log(item.id)
                        console.log(item.productId)
                        return item.id.toString() !== productId.toString();
                      });
                      this.cart.items = updatedCartItems;
                      return this.save();
                    };   
                    
                    userSchema.methods.clearCart = function() {
                      this.cart = { items: [] };
                      return this.save();
                    };

 userSchema.methods.ChangedQuantity = function(data,user) {
  console.log(user)
  const cartProductIndex=user.cart.items.findIndex( i=> {
    return  i.id===data.body.ids._id})
  // const cartProductIndex = this.cart.items.findIndex(cp => {
  //       return cp.productId.toString() === product._id.toString();
  //     });
      console.log(cartProductIndex)
      let newQuantity ;
       newQuantity = this.cart.items[cartProductIndex].quantity
      console.log(newQuantity)
      const updatedCartItems = [...this.cart.items];
      
      if (cartProductIndex >= 0) {
           let  newQuantity = this.cart.items[cartProductIndex].quantity = data.body.value;
            updatedCartItems[cartProductIndex].quantity = newQuantity;
          } 
      //else {
      //           updatedCartItems.push({
      //                 productId: product._id,
      //                 quantity: newQuantity
      //               });
      //             }
                  const updatedCart = {
                        items: updatedCartItems
                      };
                      this.cart = updatedCart;
                      return this.save();
  }



  // userSchema.methods.DeleteOrder = function(data,user,cb){
  //   // console.log(data,user)
  //      data.map((item) => {
    
  //         let a = item.products.filter((i) => {
  //           // console.log((i.product.user.toString()))
  //           return (i._id.toString() !== user.body.id)
  //         })
  //         console.log(a)
  //         // return item
  //   return cb(a)
  //       })
  //     }
      

// Geocode & create location
// userSchema.pre('save', async function(next) {
//   const loc = await geocoder.geocode(this.address);
//   console.log(loc)
  // this.location = {
  //   type: 'Point',
  //   coordinates: [loc[0].longitude, loc[0].latitude],
  //   formattedAddress: loc[0].formattedAddress
  // };

  // // Do not save address
  // this.address = undefined;
  // next();
// });

module.exports = mongoose.model('users', userSchema);
                    
                    
                    
                    
                    



// UserSchema.methods.createPasswordResetToken = function() {
//     const resetToken = crypto.randomBytes(32).toString('hex');

//     this.passwordResetToken = crypto
//       .createHash('sha256')
//       .update(resetToken)
//       .digest('hex');

//     console.log({ resetToken }, this.passwordResetToken);

//     this.passwordResetExpires = Date.now() + 10 * 60 * 1000;

//     return resetToken;
//   };
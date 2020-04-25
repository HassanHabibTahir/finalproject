// const crypto = require('crypto');
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
        type: Number,
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
    console.log(product)
    const cartProductIndex = this.cart.items.findIndex(cp => {
          return cp.productId.toString() === product._id.toString();
        });
        console.log(cartProductIndex)
        let newQuantity = 1;
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
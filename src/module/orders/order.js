const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const orderSchema = new Schema({
  products: [
    {
      product: { type: Object, required: true },
      quantity: { type: Number, required: true },
      email: {
        type: String,
        required: true
      },
      cellNo: {
        type:String,
        required: true,
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
    }
  ],
  user: {
    email: {
      type: String,
      required: true
    },
    userId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'users'
    },
  
  },
  seller:[{
    type: Schema.Types.ObjectId,
    required: true,
  }]
});



module.exports = mongoose.model('Order', orderSchema);

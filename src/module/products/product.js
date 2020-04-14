const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    price: {
        type: Number,
        required: true
    },
    discount: {
        type: Number,
        required: true
    },

    productname: {
        type: String,
        required: true
    },
    discription: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },

    fav:{
        type:Boolean
    }
,
    imgSrc: []
    ,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
      },

})
const Produts = mongoose.model('products', productSchema);

module.exports = Produts
let mongoose = require('mongoose');
const Schema = mongoose.Schema;
let  FavuritProducts=  new Schema({
    adId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'products'
    },
    fav:Boolean,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
      },
    //   buyer:{
    //     type: Schema.Types.ObjectId,
    //     ref: 'users' 
    //   }
})

const FacuritProduts = mongoose.model('FavuritProducts', FavuritProducts);
module.exports = FacuritProduts
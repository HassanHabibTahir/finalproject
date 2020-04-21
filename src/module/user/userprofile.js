// const crypto = require('crypto');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = new Schema({
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





    resetToken: String,
    resetTokenExpiration: Date


})


const Userprofile = mongoose.model('users', UserSchema);
module.exports = Userprofile



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
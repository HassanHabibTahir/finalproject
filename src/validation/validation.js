var Validator = require('validator');
// import isEmpty from './isEmpty'
const isEmpty =require('./isempty')
module.exports = function ValidateRegisterInput(data){
    let errors = {};
    var regularExpression  = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    data.password = !isEmpty(data.password) ? data.password : '';
    if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
      errors.password ='Password must be at least 6 characters';
      }
// if( !Validator.isAlphanumeric(data.password)){
//   errors.password = "password should contain atleast one number and one special character"
// }
     
      // if(!regularExpression.test(data.password)) {
      //   errors.password = "password should contain atleast one number and one special character"
      //   // return false;
    // }


return {
      errors,
      isValid: isEmpty(errors)
    };

}

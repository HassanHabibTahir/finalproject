const mongoose = require('mongoose');
const db = require('../config/key')


mongoose.connect(db.url,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:false
}).then(()=>{
    console.log('Mongoodb Connected')
}).catch((err)=>{
console.log(err)
})
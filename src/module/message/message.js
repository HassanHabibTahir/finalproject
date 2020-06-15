const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const messageSchema=new Schema({
    chatRoom:  {
        type: Schema.Types.ObjectId,
        ref: 'chartroom'
    },
    sender:{
        type:Schema.Types.ObjectId,
        ref:"users"
    },
    message_body:{
        type:String,
        required:true
    }
});

module.exports=mongoose.model("message",messageSchema);
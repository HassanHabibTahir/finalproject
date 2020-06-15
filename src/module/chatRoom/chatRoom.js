const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const chatRoomSchema = new Schema({
    users: [
        {
            type: Schema.Types.ObjectId,
            ref: 'users'
        }
    ],
    messages:[
        {
            type: Schema.Types.ObjectId,
            ref: 'message'
        }
    ],

},
{
    timestamps:true
}
);

module.exports=mongoose.model("chatroom",chatRoomSchema);
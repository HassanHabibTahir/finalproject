const message = require("../module/message/message");
const chatRoom = require("../module/chatRoom/chatRoom");

const handleMessage=(roomId,receiverSocketID,senderID,messageBody,socket,io)=>{
    const newmessage=new message({chatRoom:roomId,sender:senderID,message_body:messageBody});
    newmessage.save((err,saveMessage)=>{
        if(err)
        console.log(err)
        else{
            chatRoom.findById(roomId._id,(err,room)=>{
                if(err)
                console.log(err);
                else{
                    room.messages.push(saveMessage);
                    room.save((err,savedRoom)=>{
                        if(err)
                        console.log(err);
                        else
                        {
                            socket.emit("newMessage",roomId._id,saveMessage);
                            if(receiverSocketID)
                            {
                                io.sockets.connected[receiverSocketID].emit("newMessage",roomId._id,saveMessage);
                                
                            }
                        }
                    })
                }
            });
        }
    })
}
module.exports=handleMessage;
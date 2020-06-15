const message = require("../module/message/message");
const chatRoom = require("../module/chatRoom/chatRoom");

const handleMessage=(roomId,receiverSocket,senderID,messageBody,socket)=>{
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
                            socket.emit("newMessage",saveMessage);
                            if(receiverSocket)
                            {
                                console.log(receiverSocket)
                                receiverSocket.emit("newMessage",saveMessage);
                                
                            }
                        }
                    })
                }
            });
        }
    })
}
module.exports=handleMessage;
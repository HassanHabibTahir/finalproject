const chatRoom = require("../module/chatRoom/chatRoom");

const HandleChatRoom=(users,socket)=>{
    console.log(users)
chatRoom.find( {
    users:{$all:users}
    },)
    .populate("users")
    .populate("messages")
    .exec((err, res) => {
    if (err) {
        console.log(err)
    }
    else {
        if(!res.length>0)
        {
            const newChatRoom=new chatRoom({users:users});
            newChatRoom.save((err,room)=>{
                if(!err)
                room.populate("users",(err,popres)=>{
                    if(!err){
                        socket.emit("receiveroom",popres)
                    console.log(popres)
                }
                })
                else
                console.log(err)
            })
        }
        else
        {
            console.log(res)
            socket.emit("receiveroom",res[0]);
        }
    }

})
}

module.exports=HandleChatRoom;
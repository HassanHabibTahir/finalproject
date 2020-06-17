
const HandleChatRoom = require("./handleRoom");
const handleMessage = require("./HandleMessage");
const message = require("../module/message/message");
var sockets=[];
var people = {};
const handleChat = (socket,io) => {
    sockets.push(socket);
    socket.on('join', function(id){
        people[socket.id] = {id: id};
        console.log(people)
      });
    socket.on("getroom", (users) => {
       HandleChatRoom(users,socket)
    })
    socket.on("message",(roomId,receipentID,senderID,messageBody)=>{
    var receiverSocketID = findReceipentsSocket(receipentID);
        handleMessage(roomId,receiverSocketID,senderID,messageBody,socket,io);
    })

    socket.on("markasReaded",(unreadedMessages)=>{
      unreadedMessages.forEach(msg => {
        message.findOneAndUpdate({_id:msg._id},{readed:true},(err,res)=>{
          if(err)
          {
            console.log(err)
          }
        });
        
      });
    })

    socket.on('disconnect', function(){
        delete people[socket.id];
        sockets.splice(sockets.indexOf(socket), 1);
      });



      function findReceipentsSocket(receipentID){
        for(socketId in people){
          if(people[socketId].id === receipentID){
            {
              return socketId;
            }
          }
        }
        return false;
      }
};

module.exports = handleChat;
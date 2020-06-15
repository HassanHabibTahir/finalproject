
const chatRoom = require("../module/chatRoom/chatRoom");
const HandleChatRoom = require("./handleRoom");
const handleMessage = require("./HandleMessage");
var sockets=[];
var people = {};
const handleChat = (socket) => {
    sockets.push(socket);
    socket.on('join', function(id){
        people[socket.id] = {id: id};
        console.log(people)
      });
    socket.on("getroom", (users) => {
       HandleChatRoom(users,socket)
    })
    socket.on("message",(roomId,receipentID,senderID,messageBody)=>{
    var receiverSocket = findReceipentsSocket(receipentID);
        handleMessage(roomId,receiverSocket,senderID,messageBody,socket);
    })
    socket.on('disconnect', function(){
        delete people[socket.id];
        sockets.splice(sockets.indexOf(socket), 1);
      });



      function findReceipentsSocket(receipentID){
          console.log(people)
        for(socketId in people){
            console.log(people[socketId].id,receipentID)
          if(people[socketId].id === receipentID){
            return sockets.find(s=>s.id=socketId);
          }
        }
        return false;
      }
};

module.exports = handleChat;
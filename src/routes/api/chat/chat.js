const express = require('express');
const chatRoom = require("../../../module/chatRoom/chatRoom")
const chat = express.Router();

chat.get("/getall", (req, res) => {
    chatRoom.find({ users: { $in: [req.query.user]},messages: {$exists: true, $not: {$size: 0}}  })
        .populate("users")
        .populate("messages")
        .exec(
            (err, chatRooms) => {
                if (err)
                    console.log(err);
                else {
                    console.log(chatRooms);
                    res.json(chatRooms);
                }
            })
});

module.exports = chat
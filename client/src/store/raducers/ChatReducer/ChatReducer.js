


import { setChatData, addNewMessage, addNewRoom, markMessagesAsReaded } from '../../action/types/types'


const intialState = {
    chatRooms: []
}
function sortRooms(rooms){
rooms.sort((a,b)=> new Date(a.messages[a.messages.length-1].createdAt)-new Date(b.messages[b.messages.length-1].createdAt))
return rooms.reverse();
}

export default function (state = intialState, action) {



    switch (action.type) {



        case setChatData:
            {
                const rooms=sortRooms(action.payload);
                return ({ ...state, chatRooms: rooms});
            }

        case addNewMessage: {
            var updatedChatRooms = state.chatRooms.filter(chatRoom => {
                if (chatRoom._id == action.payload.RoomID)
                    chatRoom.messages.push(action.payload.message);
                return chatRoom;
            })
            updatedChatRooms=sortRooms(updatedChatRooms);
            return { ...state, chatRooms: updatedChatRooms }
        }
        case addNewRoom: {
            var rooms=sortRooms([...state.chatRooms, action.payload])
            return { ...state, chatRooms: rooms }
        }
        case markMessagesAsReaded: {
            var rooms = state.chatRooms.filter(chatRoom => {
                if (chatRoom._id == action.payload.chatRoomID) {
                    chatRoom.messages = chatRoom.messages.filter(msg => {
                        if (action.payload.unreadedMessages.find(m => m._id == msg._id))
                            msg.readed = true;
                        return msg;
                    })
                }
            }
            )
            rooms=sortRooms(rooms);
            return {
                ...state, chatRoomID: rooms
            }

        }

        default:
            return state
    }


}
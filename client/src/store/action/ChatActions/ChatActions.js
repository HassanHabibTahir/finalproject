import { setChatData, addNewMessage, addNewRoom, markMessagesAsReaded } from '../types/types';
// const BURL = window.location.hostname === 'localhost' ? 'http://localhost:8080' : '';

export const SetChatData = chat => {

    return {
        type: setChatData,
        payload: chat
    }
}
export const AddNewMessage = msg => {
    return {
        type: addNewMessage,
        payload: msg
    }
}
export const AddNewRoom = room => {

    return {
        type: addNewRoom,
        payload: room
    }
}

export const MarkMessagesAsReaded = (payload) => {
    return {
        type: markMessagesAsReaded,
        payload
    }
}
export default SetChatData;
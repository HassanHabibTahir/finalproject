import React, { Component } from "react";
import "./chatPopUp.css"
import { connect } from 'react-redux';
import { MarkMessagesAsReaded } from "../../store/action/ChatActions/ChatActions";

class ChatPopUp extends Component {


    constructor(props) {
        super(props);
        this.state = {
            chatRoom: {
            }
        }
    };

    componentDidMount() {
        const socket = window.socket;
        console.log("mounted")
        if (this.props.chatRoomID) {
            var room = this.props.chat.chatRooms.find(chatRoom =>
                chatRoom._id == this.props.chatRoomID
            )
            if (room) {
                this.setState({ ...this.state, chatRoom: { ...room } });
            }
        }
        else {
            var room = this.props.chat.chatRooms.find(chatRoom =>
                chatRoom.users.find(user => user._id == this.props.users[1])
            )
            if (room) {
                this.setState({ ...this.state, chatRoom: { ...room } });
            }
            else {
                // users[0] will the current user and users[1] will be the product owner
                socket.emit("getroom", this.props.users);
            }
        }

    }
    componentWillUpdate(nextProps, nextState) {
        if(nextState.chatRoom&&nextState.chatRoom.messages)
        var unreadedMessages = nextState.chatRoom.messages.filter(msg => msg.readed == "false" && msg.sender != this.props.auth.user.id);
        if (unreadedMessages&&unreadedMessages.length > 0) {
            this.props.dispatch(MarkMessagesAsReaded({ chatRoomID: nextState.chatRoom._id, unreadedMessages }))
            window.socket.emit("markasReaded", unreadedMessages);
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.props.chatRoomID)
            var room = this.props.chat.chatRooms.find(chatRoom =>
                chatRoom._id == this.props.chatRoomID
            )
        else if (this.props.users)
            var room = this.props.chat.chatRooms.find(chatRoom =>
                chatRoom.users.find(user => user._id == this.props.users[1])
            )
        console.log(room)
        if ((room && JSON.stringify(prevState.chatRoom) != JSON.stringify(room)) || prevProps.chatRoomID != this.props.chatRoomID) {

            this.setState({ chatRoom: { ...room } });
        }
        const containor = this.refs.messageContainor
        containor.scrollTop = containor.scrollHeight;

    }

    render() {
        const handleClick = e => {
            this.props.handleChatPopUp(false);
        }
        const handleSend = () => {
            const message = this.refs.message.value;
            const socket = window.socket;
            if (message) {
                socket.emit("message", this.state.chatRoom, this.state.chatRoom.users.find(user => user._id != this.props.auth.user.id)._id, this.props.auth.user.id, message)
                this.refs.message.value = ""
            }
        }
        const GetUserName = () => {
            return this.state.chatRoom.users.find(user => user._id != this.props.auth.user.id).name
        }
        return (
            <div className="chatPopup">
                <div className="header">
                    <p>{(this.state.chatRoom.users?.length > 0) ? GetUserName() : "loading..."}</p>
                    <button onClick={handleClick}>close</button>
                </div>
                <div className="messageContainor" ref={"messageContainor"}>

                    {
                        this.state.chatRoom?.messages?.map(msg => {

                            return (

                                <div className={(msg.sender != this.props.auth.user.id) ? "message" : "message right"}>
                                    <p>{msg.message_body}</p>
                                    <time>{new Date(msg.createdAt).toLocaleTimeString([], {timeStyle: 'short'})}</time>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="inputContainors">
                    <input placeholder="type message" type="text" ref={"message"}  ></input>
                    <button onClick={handleSend}>send</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    errors: state.erorr,
    auth: state.auth,
    chat: state.ChatReducer
});

export default connect(mapStateToProps)(ChatPopUp);
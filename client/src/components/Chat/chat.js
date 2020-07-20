import React, { Component } from 'react'
import './chat.css';
import { connect } from "react-redux"
import ChatPopUp from './chatPopUp';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chatRoomID: null
        }
    }
    render() {
console.log(this.props.chat)
        const closeChatPopup = (val) => {
            this.setState({ ...this.state, chatRoomID: null });
        };

        const handleClick = (ID) => {
            this.setState({ ...this.state, chatRoomID: ID })
        }
        return (
            (this.props.auth?.user?.id) ?
                <div className="chat">
                    <div className="chatContainor" >

                        {
                            this.props.chat.chatRooms.map(chatRoom => {

                                const unreadedMessages = chatRoom.messages.filter(msg=>msg.readed==="false"&&msg.sender!=this.props.auth.user.id)
                                const time=new Date(chatRoom.messages[chatRoom.messages.length - 1].createdAt)
                                return (
                                    <div key={chatRoom._id} onClick={e => handleClick(chatRoom._id)} className={(this.state.chatRoomID ===chatRoom._id) ? "chatroom selectedChat" : "chatroom"} >
                                        <h3>
                                            {
                                                chatRoom.users===undefined?"loading users.......":chatRoom.users?.find(user=>user._id!=this.props.auth.user.id)?.name
                                            }
                                        </h3>
                                        <time>{time.toLocaleTimeString()}</time>
                                        <div>
                                            <p>
                                                {
                                                    chatRoom.messages[chatRoom.messages.length - 1].message_body.slice(0,50)
                                                }
                                            </p>
                                        </div>
                                        {unreadedMessages.length>0&&
                                        
                                        <span className="badge">
                                            <p>{unreadedMessages.length}</p>
                                        </span>
                                        }
                                    </div>
                                )
                            })
                        }
                    </div>
                    {
                        this.state.chatRoomID &&
                        <ChatPopUp chatRoomID={this.state.chatRoomID} handleChatPopUp={closeChatPopup} />
                    }
                </div>
                : (
                    <Redirect to="/login" />
                )
        );
    }
}

Chat.propTypes={
    chat:PropTypes.object.isRequired,
    auth:PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
    errors: state.erorr,
    auth: state.auth,
    chat: state.ChatReducer
});

export default connect(mapStateToProps)(Chat);
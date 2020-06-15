import React, { Component } from "react";
import "./chatPopUp.css"
class ChatPopUp extends Component {


    constructor(props){
        super(props);
        this.state={
            chatRoom:{
            }
        }
    };

    componentDidMount() {
        var socket = window.socket;
        socket.emit("getroom", this.props.users);
        socket.emit("join",this.props.users[0]);
        socket.on("receiveroom",(room)=>this.setState({...this.state,chatRoom:room}))
        socket.on("newMessage",(msg)=>this.setState({...this.state,chatRoom:{...this.state.chatRoom,messages:[...this.state.chatRoom.messages,msg]}}))
    }
    componentDidUpdate(prevProps, prevState) {
        var socket = window.socket;
        console.log(socket);
        if (prevProps.users != this.props.users)
            socket.emit("getroom", this.props.users);
            console.log(this.state.chatRoom.messages)

    }

    render() {
        const handleClick = e => {
            this.props.handleChatPopUp(false);
        }
        const handleSend = () => {
            const message=this.refs.message.value;
            const socket=window.socket;
            if(message)
            {
                socket.emit("message",this.state.chatRoom,this.props.users[1],this.props.users[0],message)
                this.refs.message.value=""
            }
        }
        const GetUserName=()=>{
            return this.state.chatRoom.users.find(user=>user._id==this.props.users[1]).name
        }
        return (
            <div className="chatPopup">
                <div className="header">
        <p>{(this.state.chatRoom.users?.length>0)?GetUserName():"loading..."}</p>
                    <button onClick={handleClick}>close</button>
                </div>
                <div className="messageContainor">
{
    this.state.chatRoom?.messages?.map(msg=>{
    return <p>{msg.message_body}</p>
    })
}
                </div>
                <div className="inputContainor">
                    <input placeholder="type message" type="text" ref={"message"}  ></input>
                    <button onClick={handleSend}>send</button>
                </div>
            </div>
        );
    }
}
export default ChatPopUp;
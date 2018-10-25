import React from "react";
import ChatListItem from "./ChatListItem";
import { connect } from "react-redux";

import socketIOClient from "socket.io-client";
const endpoint = `${window.location.hostname}:8000`;

const socket = socketIOClient(endpoint);
class ChatList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    };
  }
  subscribe() {
    socket.on(`send message ${this.props.currentDialog}`, data => {
      this.setState({
        messages: [
          ...this.state.messages,
          {
            user: data.name,
            message: data.msg
          }
        ]
      });
    });
  }

  getPreviousMessages() {
    const table = `${this.props.currentDialog}Messages`;
    window
      .fetch(`/api/getMessages/${table}`, {
        method: "GET"
      })
      .then(data => data.json())
      .then(data => {
        this.setState({
          messages: data
        });
      });
  }

  componentDidUpdate(prevProps) {
    if (this.props.currentDialog !== prevProps.currentDialog) {
      this.setState({
        messages: []
      });
      this.getPreviousMessages();
      this.subscribe();
    }
  }

  componentDidMount() {
    this.getPreviousMessages();
    this.subscribe();
  }
  render() {
    const chatMessages = [
      { name: "Aeliita", message: "Hi John!" },
      { name: "John", message: "Hi, Aelitta" }
    ];
    const chatItems = this.state.messages
      ? this.state.messages.map(item => (
          <ChatListItem name={item.user} message={item.message} />
        ))
      : [];
    return <div className="chat chat-list-container">{chatItems}</div>;
  }
}

const mapStateToProps = ({ user, currentDialog }) => ({
  user,
  currentDialog
});

export default connect(mapStateToProps)(ChatList);

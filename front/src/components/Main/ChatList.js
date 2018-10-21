import React from "react";
import ChatListItem from "./ChatListItem";

export default class Main extends React.Component {
  render() {
    const chatMessages = [
      { name: "Aeliita", message: "Hi John!" },
      { name: "John", message: "Hi, Aelitta" }
    ];
    const chatItems = chatMessages.map(item => (
      <ChatListItem name={item.name} message={item.message} />
    ));
    return <div className="chat chat-list-container">{chatItems}</div>;
  }
}

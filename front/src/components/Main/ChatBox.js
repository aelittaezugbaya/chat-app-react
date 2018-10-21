import React from "react";
import { Col } from "react-bootstrap";
import InputContainer from "./InputContainer";
import ChatList from "./ChatList";

export default class ChatBox extends React.Component {
  render() {
    return (
      <Col md={10} className="main-part ">
        <div className="dialog-container">
          <ChatList />
        </div>
        <InputContainer />
      </Col>
    );
  }
}

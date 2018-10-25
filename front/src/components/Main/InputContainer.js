import React from "react";
import { FormGroup, InputGroup, Button, FormControl } from "react-bootstrap";

import { connect } from "react-redux";

import socketIOClient from "socket.io-client";
const endpoint = `${window.location.hostname}:8000`;

const socket = socketIOClient(endpoint);

class InputContainer extends React.Component {
  constructor(props) {
    super(props);

    this.sendMessage = this.sendMessage.bind(this);
  }

  saveMessage(msg) {
    const table = `${this.props.currentDialog}Messages`;
    window
      .fetch(`/api/saveMessage/`, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain"
        },
        body: JSON.stringify({
          table: table,
          message: msg,
          user: this.props.user
        })
      })
      .then(data => console.log(data));
  }

  sendMessage(ev) {
    ev.preventDefault();
    const msg = this.msg.value;
    this.saveMessage(msg);
    const data = {
      dialog: this.props.currentDialog,
      msg: msg,
      user: this.props.user
    };
    socket.emit("send message", data);

    this.msg.value = "";
  }
  render() {
    return (
      <div className="input-container">
        <form className="chat-input" onSubmit={this.sendMessage}>
          <FormGroup>
            <InputGroup>
              <FormControl type="text" inputRef={input => (this.msg = input)} />
              <div className="input-group-btn">
                <Button type="submit">Send</Button>
              </div>
            </InputGroup>
          </FormGroup>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ user, currentDialog }) => ({
  user,
  currentDialog
});

export default connect(mapStateToProps)(InputContainer);

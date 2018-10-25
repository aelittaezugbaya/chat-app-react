import React from "react";
import {
  FormControl,
  FormGroup,
  ControlLabel,
  HelpBlock
} from "react-bootstrap";

import socketIOClient from "socket.io-client";
const endpoint = `${window.location.hostname}:8000`;

const socket = socketIOClient(endpoint);

import { connect } from "react-redux";
import actions from "../redux/actions";

import { withRouter } from "react-router-dom";

class NewUserPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);

    this.state = {
      value: ""
    };
  }

  handleChange() {
    const value = this.nickname.value;
    this.setState({
      value
    });
  }

  submit() {
    this.props.addUser(this.state.value);
    this.props.history.push(`/${this.state.value}`);
  }

  render() {
    return (
      <div className="new-user-container container">
        <form onSubmit={this.submit}>
          <FormGroup>
            <ControlLabel>Type nickname</ControlLabel>
            <FormControl
              type="text"
              value={this.state.value}
              placeholder="Enter text"
              onChange={this.handleChange}
              inputRef={input => (this.nickname = input)}
            />
            <FormControl.Feedback />
            <HelpBlock>{this.state.status ? this.state.status : ""}</HelpBlock>
          </FormGroup>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  user
});

const mapDispatchToProps = dispatch => ({
  addUser: user =>
    dispatch({
      type: actions.ADD_USER,
      payload: user
    })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(NewUserPage));

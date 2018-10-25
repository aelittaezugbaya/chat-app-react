import React from "react";
import { Col } from "react-bootstrap";
import ListSideMenu from "./ListSideMeni";
import HeaderSideMenu from "./HeaderSideMenu";
import actions from "../../redux/actions";

import { connect } from "react-redux";

import socketIOClient from "socket.io-client";
const endpoint = `${window.location.hostname}:8000`;

const socket = socketIOClient(endpoint);

class SideMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      channels: []
    };
  }

  componentWillMount() {
    socket.emit("get current channels");
    socket.on("get current channels", data => {
      const channels = data ? data.map(channel => channel.name) : [];
      this.setState({
        channels
      });
    });
  }
  render() {
    if (!this.props.currentDialog) {
      this.props.chooseDialog("general");
    }
    return (
      <Col md={2} className="side-menu">
        <HeaderSideMenu nickname="aelittae" />
        <ListSideMenu name="Channels" items={this.state.channels} prefix="#" />
        <ListSideMenu name="Online Users" items={this.state.users} prefix="@" />
      </Col>
    );
  }
}

const mapStateToProps = ({ user, currentDialog }) => ({
  user,
  currentDialog
});

const mapDispatchToProps = dispatch => ({
  chooseDialog: dialog =>
    dispatch({
      type: actions.CHOOSE_DIALOG,
      payload: dialog
    })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideMenu);

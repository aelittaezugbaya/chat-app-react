import React from "react";
import { Col } from "react-bootstrap";
import ListSideMenu from "./ListSideMeni";
import HeaderSideMenu from "./HeaderSideMenu";
import actions from "../../redux/actions";

import { connect } from "react-redux";

class SideMenu extends React.Component {
  render() {
    if (!this.props.currentDialog) {
      this.props.chooseDialog("general");
    }
    return (
      <Col md={2} className="side-menu">
        <HeaderSideMenu nickname="aelittae" />
        <ListSideMenu
          name="Channels"
          items={["general", "random"]}
          prefix="#"
        />
        <ListSideMenu
          name="Online Users"
          items={["Chudik", "Udik"]}
          prefix="@"
        />
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

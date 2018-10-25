import React from "react";
import { PageHeader } from "react-bootstrap";
import actions from "../../redux/actions";

import { connect } from "react-redux";

class HeaderSideMenu extends React.Component {
  componentWillMount() {
    const username = window.location.pathname.slice(1);
    if (!this.props.user && username) {
      this.props.addUser(username);
    }
  }
  render() {
    return (
      <div className="menu-header">
        <PageHeader>Chat App</PageHeader>
        <h4 className="nickname">Welcome, @{this.props.user}!</h4>
        <hr className="header-hr" />
      </div>
    );
  }
}

const mapStateToProps = ({ user, currentDialog }) => ({
  user,
  currentDialog
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
)(HeaderSideMenu);

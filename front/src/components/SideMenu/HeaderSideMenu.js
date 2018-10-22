import React from "react";
import { PageHeader } from "react-bootstrap";
import actions from "../../redux/actions";

import { connect } from "react-redux";

class HeaderSideMenu extends React.Component {
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

export default connect(mapStateToProps)(HeaderSideMenu);

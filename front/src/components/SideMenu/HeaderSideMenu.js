import React from "react";
import { PageHeader } from "react-bootstrap";

export default class HeaderSideMenu extends React.Component {
  render() {
    return (
      <div className="menu-header">
        <PageHeader>Chat App</PageHeader>
        <h4 className="nickname">Welcome, @{this.props.nickname}!</h4>
        <hr className="header-hr" />
      </div>
    );
  }
}

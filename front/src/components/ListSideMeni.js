import React from "react";
import { Col, PageHeader } from "react-bootstrap";

export default class ListSideMenu extends React.Component {
  render() {
    const items = this.props.items.map(item => (
      <li>
        {" "}
        {this.props.prefix} {item}
      </li>
    ));
    return (
      <div>
        <PageHeader>
          <small>{this.props.name}</small>
        </PageHeader>
        <ul className="list">{items}</ul>
      </div>
    );
  }
}

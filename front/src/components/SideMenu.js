import React from "react";
import { Col, PageHeader } from "react-bootstrap";
import SideMenu from "./ListSideMeni";
import ListSideMenu from "./ListSideMeni";

export default class App extends React.Component {
  render() {
    return (
      <Col md={2} className="side-menu">
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

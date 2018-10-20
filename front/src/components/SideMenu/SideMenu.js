import React from "react";
import { Col } from "react-bootstrap";
import ListSideMenu from "./ListSideMeni";
import HeaderSideMenu from "./HeaderSideMenu";

export default class SideMenu extends React.Component {
  render() {
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

import React from "react";
import Menu from "../SideMenu/SideMenu";
import ChatBox from "./ChatBox";
import { Grid, Row } from "react-bootstrap";

export default class App extends React.Component {
  render() {
    return (
      <Grid fluid={true}>
        <Row>
          <Menu />
          <ChatBox room="general" />
        </Row>
      </Grid>
    );
  }
}

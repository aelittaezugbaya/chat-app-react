import React from "react";
import Menu from "./SideMenu/SideMenu";
import Main from "./Main/Main";
import { Grid, Row } from "react-bootstrap";

export default class App extends React.Component {
  render() {
    return (
      <Grid fluid={true}>
        <Row>
          <Menu />
          <Main room="general" />
        </Row>
      </Grid>
    );
  }
}

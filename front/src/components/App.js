import React from "react";
import Menu from "./SideMenu/SideMenu";
import Main from "./Main/Main";
import { Grid, Row } from "react-bootstrap";
import NewUserPage from "./NewUserPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={NewUserPage} />
          <Route path="/user/:nickname" component={Main} />
        </Switch>
      </BrowserRouter>
    );
  }
}

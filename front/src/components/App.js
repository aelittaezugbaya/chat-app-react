import React from "react";
import Menu from "./SideMenu/SideMenu";
import Main from "./Main/Main";
import { Grid, Row } from "react-bootstrap";
import NewUserPage from "./NewUserPage";
import { Provider } from "react-redux";
import chatApp from "../redux/reducers";
import { createStore } from "redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const store = createStore(
  chatApp,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={NewUserPage} />
            <Route path="/:nickname" component={Main} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

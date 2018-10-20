import React from "react";
import { Col } from "react-bootstrap";
import InputContainer from "./InputContainer";

export default class Main extends React.Component {
  render() {
    return (
      <Col md={10} className="main-part ">
        <div className="dialog-container" />
        <InputContainer />
      </Col>
    );
  }
}

import React from "react";
import { FormGroup, InputGroup, Button, FormControl } from "react-bootstrap";
export default class InputContainer extends React.Component {
  render() {
    return (
      <div className="input-container">
        <form className="chat-input">
          <FormGroup>
            <InputGroup>
              <FormControl type="text" />
              <div className="input-group-btn">
                <Button type="submit">Send</Button>
              </div>
            </InputGroup>
          </FormGroup>
        </form>
      </div>
    );
  }
}

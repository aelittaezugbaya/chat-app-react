import React from "react";
import {
  FormControl,
  FormGroup,
  ControlLabel,
  HelpBlock
} from "react-bootstrap";

export default class NewUserPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      value: ""
    };
  }

  handleChange() {
    const value = this.nickname.value;
    const length = value.length;
    let status;
    if (length > 10) {
      status = "Success";
    } else if (length == 0) {
      status = null;
    } else if (length <= 10) {
      status = "Such nickname exists";
    }
    this.setState({
      status,
      value
    });
  }

  render() {
    return (
      <div className="new-user-container container">
        <form>
          <FormGroup>
            <ControlLabel>Type nickname</ControlLabel>
            <FormControl
              type="text"
              value={this.state.value}
              placeholder="Enter text"
              onChange={this.handleChange}
              inputRef={input => (this.nickname = input)}
            />
            <FormControl.Feedback />
            <HelpBlock>{this.state.status ? this.state.status : ""}</HelpBlock>
          </FormGroup>
        </form>
      </div>
    );
  }
}

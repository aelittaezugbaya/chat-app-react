import React from "react";
import {
  FormControl,
  FormGroup,
  ControlLabel,
  HelpBlock
} from "react-bootstrap";

import { connect } from "react-redux";
import actions from "../redux/actions";

import { withRouter } from "react-router-dom";

class NewUserPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);

    this.state = {
      value: ""
    };
  }

  componentDidMount() {
    window
      .fetch("/api/test", {
        method: "GET",
        headers: {
          "Content-Type": "text/plain"
        }
      })
      .then(res => res.json())
      .then(res => console.log(res));
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

  submit() {
    this.props.addUser(this.state.value);
    this.props.history.push(`/user/${this.state.value}`);
  }

  render() {
    return (
      <div className="new-user-container container">
        <form onSubmit={this.submit}>
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

const mapStateToProps = ({ user }) => ({
  user
});

const mapDispatchToProps = dispatch => ({
  addUser: user =>
    dispatch({
      type: actions.ADD_USER,
      payload: user
    })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(NewUserPage));

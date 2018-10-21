import React from "react";

export default class Main extends React.Component {
  render() {
    return (
      <div>
        <h4> {this.props.name}</h4>
        <p>{this.props.message}</p>
        <hr />
      </div>
    );
  }
}

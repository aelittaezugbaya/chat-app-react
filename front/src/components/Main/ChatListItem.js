import React from "react";

export default class ChatListItem extends React.Component {
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

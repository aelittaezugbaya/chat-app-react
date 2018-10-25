import React from "react";
import { PageHeader } from "react-bootstrap";

import actions from "../../redux/actions";

import { connect } from "react-redux";

class ListSideMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      channels: []
    };
    this.onClickDialog = this.onClickDialog.bind(this);
  }

  onClickDialog(e) {
    this.props.chooseDialog(e.target.id);
  }
  render() {
    const items = this.props.items
      ? this.props.items.map(item => (
          <li
            id={item}
            className={
              item == this.props.currentDialog
                ? "active-dialog"
                : "not-active-dialog"
            }
            onClick={this.onClickDialog}
          >
            {this.props.prefix} {item}
          </li>
        ))
      : [
          <li id="nothing" className="no-users">
            There is no active users(
          </li>
        ];
    return (
      <div>
        <PageHeader>
          <small>{this.props.name}</small>
        </PageHeader>
        <ul className="list">{items}</ul>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  chooseDialog: dialog =>
    dispatch({
      type: actions.CHOOSE_DIALOG,
      payload: dialog
    })
});

const mapStateToProps = ({ user, currentDialog }) => ({
  user,
  currentDialog
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListSideMenu);

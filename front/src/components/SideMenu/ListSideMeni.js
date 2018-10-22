import React from "react";
import { PageHeader } from "react-bootstrap";

import actions from "../../redux/actions";

import { connect } from "react-redux";

class ListSideMenu extends React.Component {
  constructor(props) {
    super(props);
    this.onClickDialog = this.onClickDialog.bind(this);
  }

  onClickDialog(e) {
    console.log(e.target.id);
    console.log(e.target.className);
    console.log(this.props.currentDialog);
    console.log(this.props.user);
  }
  render() {
    const items = this.props.items.map(item => (
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
    ));
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
      currentDialog: dialog
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

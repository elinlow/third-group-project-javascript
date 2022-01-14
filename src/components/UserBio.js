import React, { Component } from "react";

class UserBio extends Component {
  state = {
    value: "Some text here",
    isInEditMode: false,
  };

  changeEditMode = () => {
    this.setState({
      isInEditMode: !this.state.isInEditMode,
    });
  };

  updateComponentValue = () => {
    this.setState({
      isInEditMode: false,
      value: this.refs.theTextInput.value,
    });
  };

  renderEditView = () => {
    return (
      <div>
        <input type="text" defaultValue={this.state.value} ref="theTextInput" />
        <button onClick={this.changeEditMode}>X</button>
        <button onClick={this.updateComponentValue}>OK</button>
      </div>
    );
  };

  renderDefaultView = () => {
    return <div onDoubleClick={this.changeEditMode}>{this.state.value}</div>;
  };

  render() {
    return this.state.isInEditMode
      ? this.renderEditView()
      : this.renderDefaultView();
  }
}

export default UserBio;

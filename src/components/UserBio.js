import React, { Component } from "react";

class UserBio extends Component {
  constructor(props) {
    super(props);
    this.theTextInput = React.createRef() }
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
      value: this.theTextInput.current.value,
    });
  };

  renderEditView = () => {
    return (
      <div>
        <input type="text" defaultValue={this.state.value} ref={this.theTextInput} />
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

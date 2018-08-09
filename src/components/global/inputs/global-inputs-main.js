import React, { Component } from "react";

class GlobalInputsMain extends Component {
  render(props) {
    return (
      <input
        className={this.props.className}
        type={this.props.type}
        name={this.props.name}
        pattern={this.props.pattern}
        title={this.props.title}
        placeholder={this.props.placeholder}
        required={this.props.required}
      />
    );
  }
}

export default GlobalInputsMain;

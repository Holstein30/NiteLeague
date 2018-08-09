import React, { Component } from "react";
import Input from "./global-inputs-main";
class GlobalInputsLabel extends Component {
  render(props) {
   
    return (
      <div>
        <label htmlFor={this.props.name}>
        {this.props.label}:&nbsp;
        </label>
      <Input />
      <br/>
      <br/>
      </div>
    );
  }
}

export default GlobalInputsLabel;
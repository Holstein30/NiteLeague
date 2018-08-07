import React, { Component } from "react";

class GlobalInputsMain extends Component {
  render(props) {
    return (
      <div>
        <input
          className={props.class}
          type={props.type}
          name={props.name}
          pattern={props.pattern}
          title={props.title}
          placeholder={props.placeholder}
          required={props.required}
        />
      </div>
    );
  }
}

export default GlobalInputsMain;

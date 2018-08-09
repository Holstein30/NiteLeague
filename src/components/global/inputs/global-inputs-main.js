import React, { Component } from "react";

class GlobalInputsMain extends Component {
  render(props) {
    console.log(this.props);
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
  // }
  // export default props => {
  //   return (
  //     <div>
  //     <input
  //       className={props.className}
  //       type={props.type}
  //       name={props.name}
  //       pattern={props.pattern}
  //       title={props.title}
  //       placeholder={props.placeholder}
  //       required={props.required}
  //     />
  //   </div>

  //   );
}

export default GlobalInputsMain;

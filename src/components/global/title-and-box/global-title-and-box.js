import React, { Component } from "react";


class TitleAndBox extends Component {
  render(props) {
    return (
      <div style={{textAlign: "center", width: this.props.width}}>
        <h3> {this.props.title} </h3>
        <div style={{border: "solid 1px black", padding: "10px", textAlign: "left"}} className="title-and-box">
        {this.props.children}
        </div>
      </div>
    );
  }
}

export default TitleAndBox;

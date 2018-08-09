import React, { Component } from "react";

class GlobalLinksMain extends Component {
  render(props) {
    
    return (
      <a href={this.props.links}> 
        <p> {this.props.children} </p>
      </a>
    );
  }
}
export default GlobalLinksMain;
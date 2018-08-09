import React, { Component } from "react";
import Create from "./create";
import JoinLeague from "./join/";

class HomePage extends Component {
  render() {
    return (
      <div>
        <h1>NiteLeague Homepage</h1>
        <Create />
        <JoinLeague />
      </div>
    );
  }
}

export default HomePage;

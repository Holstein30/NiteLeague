import React, { Component } from "react";
import Avatar from "../global/avatar";

class TeamPage extends Component {
  render() {
    return (
      <div>
        <div className="header-container">
          <Avatar avatar="../../../public/images/ph1.jpg" />
          <h1>username</h1>
        </div>
      </div>
    );
  }
}

export default TeamPage;

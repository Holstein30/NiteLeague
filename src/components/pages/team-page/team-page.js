import React, { Component } from "react";
import Avatar from "../../global/avatar";
import TeamPageLinks from "./links";

class TeamPage extends Component {
  render() {
    return (
      <div>
        <div>
          <Avatar avatar="../../../../public/images/ph1.jpg" />
          <h1>this.state.username</h1>
          <TeamPageLinks />
        </div>
      </div>
    );
  }
}

export default TeamPage;

import React, { Component } from "react";
import Portrait from "../../../global/portrait";

class TeamPageListRoster extends Component {
  render() {
    return (
      <div className="current-roster-container" style={{ border: "solid 2px" }}>
        <h2>Current Roster</h2>
        <div className="portrait-container">
          <Portrait className="league-portriat" name="Username" />
          <Portrait className="league-portriat" name="Username" />
        </div>
      </div>
    );
  }
}

export default TeamPageListRoster;

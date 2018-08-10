import React, { Component } from "react";
import Portrait from "../../../global/portrait";

class ProfilePageListTeam extends Component {
  render() {
    return (
      <div className="current-teams-container" style={{ border: "solid 2px" }}>
        <h2>Current Teams</h2>
        <div className="portrait-container">
          <Portrait
            className="team-portriat"
            name="team name"
            item1="league 1"
            item2="record"
          />
          <Portrait
            className="team-portriat"
            name="team name"
            item1="league 2"
            item2="record"
          />
          <Portrait
            className="team-portriat"
            name="team name"
            item1="league 3"
            item2="record"
          />
        </div>
      </div>
    );
  }
}

export default ProfilePageListTeam;

import React, { Component } from "react";
import Portrait from "../../../global/portrait";

class TeamPageListLeagues extends Component {
  render() {
    return (
      <div className="current-leagues-container">
        <h2>Current Leagues</h2>
        <div className="portrait-container">
          <Portrait
            className="league-portriat"
            name="league name"
            item1="team 1"
            item2="record"
          />
          <Portrait
            className="league-portriat"
            name="league name"
            item1="team 2"
            item2="record"
          />
          <Portrait
            className="league-portriat"
            name="league name"
            item1="team 3"
            item2="record"
          />
        </div>
      </div>
    );
  }
}

export default TeamPageListLeagues;

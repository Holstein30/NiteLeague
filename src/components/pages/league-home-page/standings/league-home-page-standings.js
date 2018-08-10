import React, { Component } from "react";
import { Link } from "react-router-dom";

class LeagueHomePageStandings extends Component {
  render() {
    return (
      <div className="standings-container">
        <h2>Standings</h2>
        <div className="standings-chart-container">
          <p>Rank</p>
          <p>Team</p>
          <p>W/L</p>
          <p>Streak</p>
          <div className="standings-chart-data">data here</div>
        </div>
      </div>
    );
  }
}

export default LeagueHomePageStandings;

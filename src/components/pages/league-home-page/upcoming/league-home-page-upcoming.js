import React, { Component } from "react";

class LeagueHomePageUpcoming extends Component {
  render() {
    return (
      <div className="upcoming-matches-container">
        <h2>Upcoming Matches</h2>
        <div>
          <p> Team 1 </p>
          <p> Team 2 </p>
          <p> Team 3 </p>
          <div className="upcoming-matches-data">
            <p> table data here</p>
          </div>
        </div>
      </div>
    );
  }
}

export default LeagueHomePageUpcoming;

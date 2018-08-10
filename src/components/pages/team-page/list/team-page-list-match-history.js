import React, { Component } from "react";

class TeamPageListMatchHistory extends Component {
  render() {
    return (
      <div className="match-history-container">
        <h2>Match History</h2>
        <div className="match-record-container">
          <div className="wins-container">
            <h3>Win #</h3>
            <h3>Wins</h3>
          </div>
          <div className="loses-container">
            <h3>loses #</h3>
            <h3>loses</h3>
          </div>
          <h3>Total Matchs: XX</h3>
        </div>
      </div>
    );
  }
}

export default TeamPageListMatchHistory;

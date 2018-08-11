import React, { Component } from "react";

// Map through props for leagues/Opponents/Times

class TeamPageListUpcomingMatches extends Component {
  render() {
    return (
      <div className="upcoming-matches-container">
        <table>
          <thead>
            <tr>
              <th>League</th>
              <th>Opponent</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>League 1</td>
              <td>Opponent 1</td>
              <td>1</td>
            </tr>
            <tr>
              <td>League 2</td>
              <td>Opponent 2</td>
              <td>2</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default TeamPageListUpcomingMatches;

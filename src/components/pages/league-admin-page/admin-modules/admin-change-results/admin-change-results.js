import React, { Component } from "react";

class AdminChangeResults extends Component {
  render() {
    return (
      <div className="change-results-container">
        <table>
          <thead>
            <tr>
              <th>Team 1</th>
              <th>Team 2</th>
              <th>Winner</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Team 1</td>
              <td>Team 2</td>
              <td>Team 1</td>
            </tr>
            <tr>
              <td>Team 1</td>
              <td>Team 2</td>
              <td>Team 1</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default AdminChangeResults;

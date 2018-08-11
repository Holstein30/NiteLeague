import React, { Component } from "react";
import Avatar from "../../../../global/avatar";
import Button from "../../../../global/buttons";

class AdminManageTeams extends Component {
  render() {
    return (
      <div className="teams-profile-container">
        <h3>Manage Teams</h3>
        <table>
          <tr>
            <td>
              <Avatar avatar="../../../../../../public/images/league.png" />
            </td>
            <td>Team Name</td>
            <td>
              <Button link="#" className="remove-button" name="Remove" />
            </td>
          </tr>
          <tr>
            <td>
              <Avatar avatar="../../../../../../public/images/league.png" />
            </td>
            <td>Team Name</td>
            <td>
              <Button link="#" className="remove-button" name="Remove" />
            </td>
          </tr>
        </table>
      </div>
    );
  }
}

export default AdminManageTeams;

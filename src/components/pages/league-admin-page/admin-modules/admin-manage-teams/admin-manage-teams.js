import React, { Component } from "react";
import Avatar from "../../../../global/avatar";
import Button from "../../../../global/buttons";

class AdminManageTeams extends Component {
  render() {
    return (
      <div className="teams-profile-container">
        <h3>Manage Teams</h3>
        <div className="team-container">
          <Avatar avatar="../../../../../../public/images/league.png" />
          <p>Team Name</p>
          <Button link="#" className="remove-button" name="Remove" />
        </div>
      </div>
    );
  }
}

export default AdminManageTeams;

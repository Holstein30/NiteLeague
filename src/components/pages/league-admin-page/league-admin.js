import React, { Component } from "react";
import Avatar from "../../global/avatar";
import Button from "../../global/buttons";
import LeagueAdminLinks from "./links";
import { ChangeResults, InvitePlayers } from "./admin-modules";

class LeagueAdmin extends Component {
  render() {
    return (
      <div>
        <div>
          <Avatar avatar="../../../../public/images/ph1.jpg" />
          <h1>this.state.username</h1>
          <LeagueAdminLinks />
          <ChangeResults />
          <InvitePlayers />
          <Button link="#" className="submit-button" name="Submit" />
        </div>
      </div>
    );
  }
}

export default LeagueAdmin;

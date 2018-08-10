import React, { Component } from "react";
import CreateTeamPageSocialMedia from "./social-media/create-team-page-social-media";
import CreateTeamPageTeamName from "./team-name/create-team-page-team-name";
import { CreateTeamPageTeamLogo } from "./team-logo";
import CreateTeamPageInvitePlayers from "./invite-players/create-team-page-invite-players";
class CreateTeamPageMain extends Component {
  render() {
    return (
      <div>
      <CreateTeamPageTeamName />
      <CreateTeamPageTeamLogo />
      <CreateTeamPageInvitePlayers/>
          <CreateTeamPageSocialMedia />
      
      </div>
    );
  }
}

export default CreateTeamPageMain;

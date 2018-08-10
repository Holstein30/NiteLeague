import React, { Component } from "react";
import CreateLeaguePageSocialMedia from "./social-media/create-league-page-social-media";
import CreateLeaguePageLeagueName from "./league-name/create-league-page-league-name";
import { CreateLeaguePageLeagueLogo } from "./league-logo";
import CreateLeaguePageInvitePlayers from "./invite-players/create-league-page-invite-players";
class CreateLeaguePageMain extends Component {
  render() {
    return (
      <div>
      <CreateLeaguePageLeagueName />
      <CreateLeaguePageLeagueLogo />
      <CreateLeaguePageInvitePlayers/>
          <CreateLeaguePageSocialMedia />
      
      </div>
    );
  }
}

export default CreateLeaguePageMain;

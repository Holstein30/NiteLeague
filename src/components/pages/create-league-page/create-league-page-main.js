import React, { Component } from "react";
import CreateLeaguePageSocialMedia from "./social-media/create-league-page-social-media";
import CreateLeaguePageLeagueName from "./league-name/create-league-page-league-name";
import { CreateLeaguePageLeagueLogo } from "./league-logo";
import CreateLeaguePageInvitePlayers from "./invite-players/create-league-page-invite-players";
import CreateLeaguePageLeagueFormat from "./league-format/create-league-page-league-format"
class CreateLeaguePageMain extends Component {
  render() {
    return (
      <div>
      <CreateLeaguePageLeagueName />
      <CreateLeaguePageLeagueLogo />
      <CreateLeaguePageInvitePlayers/>
          <CreateLeaguePageSocialMedia />
          <CreateLeaguePageLeagueFormat />

      
      </div>
    );
  }
}

export default CreateLeaguePageMain;

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
        <div style={{textAlign: "center"}}>
      <CreateLeaguePageLeagueName />
      </div>
      <br />
      <br />
      <div style={{float: "left", marginLeft: "15%"}}>
      <CreateLeaguePageLeagueLogo />
      </div>
      
      <div style={{float: "right", marginRight: "15%"}}>
      <CreateLeaguePageInvitePlayers/>
      </div>
     
      <div style={{clear: "both", marginLeft: "15%"}}>
      <br />
      <br />
          <CreateLeaguePageSocialMedia />
      </div>
      <div style={{float: "right", marginRight: "15%"}}>
          <CreateLeaguePageLeagueFormat />
      </div>
      <div style={{clear: "both"}}>
      
      </div>


      </div>
    );
  }
}

export default CreateLeaguePageMain;

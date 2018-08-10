import React, { Component } from "react";
import CreateTeamPageSocialMedia from "./social-media/create-team-page-social-media";
import CreateTeamPageTeamName from "./team-name/create-team-page-team-name";
import { CreateTeamPageTeamLogo } from "./team-logo";
class CreateTeamPageMain extends Component {
  render() {
    return (
      <div>
      <CreateTeamPageTeamName />
      <CreateTeamPageTeamLogo />
          <CreateTeamPageSocialMedia />
      
      </div>
    );
  }
}

export default CreateTeamPageMain;

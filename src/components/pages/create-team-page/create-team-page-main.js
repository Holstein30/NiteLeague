import React, { Component } from "react";
import CreateTeamPageSocialMedia from "./social-media/create-team-page-social-media";
import CreateTeamPageTeamName from "./team-name/create-team-page-team-name";
class CreateTeamPageMain extends Component {
  render() {
    return (
      <div>
      <CreateTeamPageTeamName />
          <CreateTeamPageSocialMedia />
      
      </div>
    );
  }
}

export default CreateTeamPageMain;

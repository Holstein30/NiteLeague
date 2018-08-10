import React, { Component } from "react";
import Avatar from "../../global/avatar";
import ProfilePageLinks from "./links";
import CurrentTeam from "./list/profile-page-list-teams";
import CurrentLeague from "./list/profile-page-list-leagues";
import Button from "../../global/buttons";
class ProfilePage extends Component {
  render() {
    return (
      <div>
        <div className="header-container" style={{ border: "solid 2px" }}>
          <Avatar avatar="../../../../../public/images/ph1.jpg" />
          <h1>this.state.username</h1>
          <ProfilePageLinks />
        </div>
        <CurrentTeam />
        <Button link="#" className="create-team-button" name="Create a team" />
        <CurrentLeague />
        <Button
          link="#"
          className="create-join-league-button"
          name="Create or Join a league"
        />
        <Button
          link="#"
          className="delete-profile-button"
          name="Delete Profile"
        />
      </div>
    );
  }
}

export default ProfilePage;

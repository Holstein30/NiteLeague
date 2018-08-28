import React, { Component } from "react";
import Avatar from "../../global/avatar";
import ProfilePageLinks from "./links";
import CurrentTeam from "./list/profile-page-list-teams";
import CurrentLeague from "./list/profile-page-list-leagues";
import Button from "../../global/buttons";

import axios from "axios";
class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: []
    };
  }

  componentDidMount() {
    axios.get("http://192.168.1.2:8080/api/users/").then(res => {
      const user = res.data;
      this.setState({
        user: user
      });
      console.log(this.state.user);
    });
  }
  render() {
    return (
      <div>
        <div className="header-container" style={{ border: "solid 2px" }}>
          <Avatar avatar="../../../../../public/images/ph1.jpg" />
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

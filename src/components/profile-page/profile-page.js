import React, { Component } from "react";
import Avatar from "../global/avatar";
import ProfilePageLinks from "./links";

class ProfilePage extends Component {
  render() {
    return (
      <div>
        <div className="header-container">
          <Avatar avatar="../../../public/images/ph1.jpg" />
          <h1>this.state.username</h1>
          <ProfilePageLinks />
        </div>
      </div>
    );
  }
}

export default ProfilePage;

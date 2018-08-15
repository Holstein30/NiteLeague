import React, { Component } from "react";
import Create from "./create";
import JoinLeague from "./join/";

class HomePage extends Component {
  render() {
    return (
      <div>
        <h1>NiteLeague Homepage</h1>
        <Create />
        <JoinLeague />
      </div>
    );
  }
}

export default HomePage;

// * Functionality *
// ! Make sure there are League's in DB
// TODO: Grab League's from DB to be featured
// TODO: Authentication flow working (display username when logged in - display login/registration if not)
// TODO: Event handler for profile/login/registration
// TODO: Event handler for create/join a league buttons

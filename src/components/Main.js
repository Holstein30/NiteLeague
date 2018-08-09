import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./home-page";
import ManageTeamPage from "./manage-team-page";
import ProfilePage from "./profile-page";
import RegistrationPage from "./registration-page";
import TeamPage from "./team-page";
import LoginPage from "./login-page";

// The Main component will render our various pages based of routing path
// only the home page will render at the exact path of "/"
// every other page will render at the matching base path, however,
// more specific routes can be added with various parameters
// including specific profiles of users and teams
const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/profile" component={ProfilePage} />
      <Route path="/manageteam" component={ManageTeamPage} />
      <Route path="/registration" component={RegistrationPage} />
      <Route path="/team" component={TeamPage} />
      <Route path="/login" component={LoginPage} />
    </Switch>
  </main>
);

export default Main;

import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./home-page";
import ManageTeamPage from "./manage-team-page";
import ProfilePage from "./profile-page";
import RegistrationPage from "./registration-page";
import TeamPage from "./team-page";

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/profile" component={ProfilePage} />
      <Route path="/manageteam" component={ManageTeamPage} />
      <Route path="/registration" component={RegistrationPage} />
      <Route path="/team" component={TeamPage} />
    </Switch>
  </main>
);

export default Main;

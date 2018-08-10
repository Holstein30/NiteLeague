import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/home-page";
import ManageTeamPage from "./pages/manage-team-page";
import ProfilePage from "./pages/profile-page";
import RegistrationPage from "./pages/registration-page";
import TeamPage from "./pages/team-page";
import LoginPage from "./pages/login-page";
import CreateTeamPage from "./pages/create-team-page";
import EditProfilePage from "./pages/edit-profile-page/";
import BrowseLeagues from "./pages/browse-leagues-page";
import CreateLeaguePage from "./pages/create-league-page";
import LeagueAdminPage from "./pages/league-admin-page";
import LeagueHomePage from "./pages/league-home-page";
import PremierLeaguesPage from "./pages/premier-leagues-page";
import StorePage from "./pages/store-page";
import SupportPage from "./pages/support-page";

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
      <Route path="/createteam" component={CreateTeamPage} />
      <Route path="/createleague" component={CreateLeaguePage} />
      <Route path="/editprofile" component={EditProfilePage} />
      <Route path="/browse" component={BrowseLeagues} />
      <Route path="/leagueadmin" component={LeagueAdminPage} />
      <Route path="/leaguehome" component={LeagueHomePage} />
      <Route path="/premierleagues" component={PremierLeaguesPage} />
      <Route path="/store" component={StorePage} />
      <Route path="/support" component={SupportPage} />
    </Switch>
  </main>
);

export default Main;

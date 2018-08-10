import React, { Component } from "react";
import Avatar from "../../global/avatar";
import TeamPageLinks from "./links";
import { LeagueList, RosterList, HistoryList, UpcomingList } from "./list";

class TeamPage extends Component {
  render() {
    return (
      <div>
        <div>
          <Avatar avatar="../../../../public/images/ph1.jpg" />
          <h1>this.state.username</h1>
          <TeamPageLinks />
          <RosterList />
          <HistoryList />
          <LeagueList />
          <UpcomingList />
        </div>
      </div>
    );
  }
}

export default TeamPage;

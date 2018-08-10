import React, { Component } from "react";
import LeagueHomePageLinks from "./links";
import Avatar from "../../global/avatar";

class LeagueHomePage extends Component {
  render() {
    return (
      <div>
        <div className="header-container" style={{ border: "solid 2px" }}>
          <Avatar avatar="../../../../../public/images/ph1.jpg" />
          <h1>this.state.leaguename</h1>
          <LeagueHomePageLinks />
        </div>
      </div>
    );
  }
}

export default LeagueHomePage;

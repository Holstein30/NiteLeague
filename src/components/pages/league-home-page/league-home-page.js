import React, { Component } from "react";
import LeagueHomePageLinks from "./links";
import Standings from "./standings";
import Avatar from "../../global/avatar";
import Upcoming from "./upcoming/";
import Playoffs from "./playoffs/";
import Champions from "./champions/";
import Button from "../../global/buttons";

class LeagueHomePage extends Component {
  render() {
    return (
      <div>
        <div className="header-container" style={{ border: "solid 2px" }}>
          <Avatar avatar="../../../../../public/images/ph1.jpg" />
          <h1>this.state.leaguename</h1>
          <LeagueHomePageLinks />
        </div>
        <div style={{ border: "solid 2px" }}>
          <Standings />
        </div>
        <div style={{ border: "solid 2px" }}>
          <Upcoming />
        </div>
        <div style={{ border: "solid 2px" }}>
          <Playoffs />
        </div>
        <div style={{ border: "solid 2px" }}>
          <Champions />
        </div>
        <div>
          <Button
            link="#"
            className="join-league-button"
            name="Join This League"
          />
          <Button link="#" className="message-admin" name="Message Admin" />
        </div>
      </div>
    );
  }
}

export default LeagueHomePage;

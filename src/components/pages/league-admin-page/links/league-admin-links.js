import React, { Component } from "react";
import Links from "../../../global/links";

class LeagueAdminLinks extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Links name="Start Season" link="#" />
          </li>
          <li>
            <Links name="Upgrade to Premium" link="#" />
          </li>
          <li>
            <Links name="Disband League" link="#" />
          </li>
        </ul>
      </div>
    );
  }
}

export default LeagueAdminLinks;

import React, { Component } from "react";
import Links from "../../../global/links";

class TeamPageLinks extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Links name="twitter" link="#" />
          </li>
          <li>
            <Links name="instagram" link="#" />
          </li>
          <li>
            <Links name="youtube" link="#" />
          </li>
        </ul>
      </div>
    );
  }
}

export default TeamPageLinks;

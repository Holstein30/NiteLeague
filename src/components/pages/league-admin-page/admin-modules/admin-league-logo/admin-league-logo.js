import React, { Component } from "react";
import Input from "../../../../global/inputs/global-inputs-main";
import Avatar from "../../../../global/avatar/global-avatar";

class AdminLeagueLogo extends Component {
  render() {
    return (
      <div>
        <h3> League Logo/Avatar </h3>
        <Avatar avatar="../../../../../../public/images/league.png" />
        League Logo:
        <br />
        <Input type="text" placeholder="League Logo Upload" />
      </div>
    );
  }
}

export default AdminLeagueLogo;

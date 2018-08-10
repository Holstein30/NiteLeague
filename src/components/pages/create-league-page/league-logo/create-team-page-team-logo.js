import React, { Component } from "react";
import Input from "../../../global/inputs/global-inputs-main";
import Avatar from "../../../global/avatar/global-avatar";
class CreateTeamPageTeamLogo extends Component{
    render(){
        return (<div> 
            <h3> Team Logo/Avatar </h3>
            <Avatar avatar="../../../../../../public/images/person-flat.png" />
            Team Logo:
            <br/>
            <Input type="text" placeholder="Team Logo Upload" />
        </div>)

    }
}

export default CreateTeamPageTeamLogo;
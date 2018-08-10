import React, { Component } from "react";
import Input from "../../../global/inputs/global-inputs-main";
import Avatar from "../../../global/avatar/global-avatar";
class CreateLeaguePageLeagueLogo extends Component{
    render(){
        return (<div> 
            <h3> Team Logo/Avatar </h3>
            <Avatar avatar="../../../../../../public/images/league.png" />
            Team Logo:
            <br/>
            <Input type="text" placeholder="League Logo Upload" />
        </div>)

    }
}

export default CreateLeaguePageLeagueLogo;
import React, { Component } from "react";
import Input from "../../../global/inputs/global-inputs-main";

class CreateTeamPageTeamName extends Component{
    render(){
        return (<div> 
            <h3> Team Name </h3>
            <Input type="text" placeholder="Team Name" />
        </div>)

    }
}

export default CreateTeamPageTeamName;
import React, { Component } from "react";
import Input from "../../../global/inputs/global-inputs-main";

class CreateLeaguePageLeagueName extends Component{
    render(){
        return (<div> 
            <h3> League Name </h3>
            <Input type="text" placeholder="League Name" />
        </div>)

    }
}

export default CreateLeaguePageLeagueName;
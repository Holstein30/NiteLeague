import React, { Component } from "react";
import Input from "../../../global/inputs";

class CreateLeaguePageInvitePlayers extends Component {

    render() {
        return (
            <div>
                <h3>Invite Players</h3>
                <label>Username: </label>
                <Input type="text"/>
                <br />
                <label>Username: </label>
                <Input type="text"/>
                <br />
                <label>Username: </label>
                <Input type="text"/>
                <br />
                <button> Invite </button>
                </div>
        )
    }

}

export default CreateLeaguePageInvitePlayers;
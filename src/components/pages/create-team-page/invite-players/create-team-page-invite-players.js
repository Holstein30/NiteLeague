import React, { Component } from "react";
import Input from "../../../global/inputs";

class CreateTeamPageInvitePlayers extends Component {

    render() {
        return (
            <div>
                <h3>Invite Players</h3>
                <label>Username: </label>
                <Input type="text"/>
                <br />
                <label>Role: </label>
                <select>
                    <option>orange</option>
                    <option>blue</option>
                    <option>green</option>
                    <option>red</option>
                    </select>
                </div>
        )
    }

}

export default CreateTeamPageInvitePlayers;
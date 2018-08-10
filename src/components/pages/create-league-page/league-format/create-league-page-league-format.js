import React, { Component } from "react";
import Input from "../../../global/inputs/global-inputs-main";
import Avatar from "../../../global/avatar/global-avatar";
class CreateLeaguePageLeagueFormat extends Component{
    render(){
        return (<div> 
            <h3> League Format</h3>
            Length: 
            <select>
                <option>0
                </option>
                <option>1
                </option>
                <option>2
                </option>
                <option>3
                </option>
            </select>
            <br />
            # of Teams: 
            <select>
                <option>0
                </option>
                <option>1
                </option>
                <option>2
                </option>
                <option>3
                </option>
            </select>
            <br />
            Playoff Spots:
            <select>
                <option>0
                </option>
                <option>1
                </option>
                <option>2
                </option>
                <option>3
                </option>
            </select>
            <br />
            Weekly Matches:
            <select>
                <option>0
                </option>
                <option>1
                </option>
                <option>2
                </option>
                <option>3
                </option>
            </select>
            <br />
            Premium:
            <select>
                <option>0
                </option>
                <option>1
                </option>
                <option>2
                </option>
                <option>3
                </option>
            </select>
            <br />
            Team Size:
            <select>
                <option>0
                </option>
                <option>1
                </option>
                <option>2
                </option>
                <option>3
                </option>
            </select>
            <br />
            Match Rules:
            <select>
                <option>0
                </option>
                <option>1
                </option>
                <option>2
                </option>
                <option>3
                </option>
            </select>
            <br />
        </div>)

    }
}

export default CreateLeaguePageLeagueFormat;
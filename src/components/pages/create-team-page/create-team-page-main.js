import React, { Component } from "react";
import CreateTeamSocialMedia from "./social-media/create-team-page-social-media";
import TitleAndBox from "../../global/title-and-box";
import CreateTeamPageSocialMedia from "./social-media/create-team-page-social-media";

class CreateTeamPageMain extends Component{
    render(){
        return (
            <div>
        
        <TitleAndBox title="Social" width="25%">
        <CreateTeamPageSocialMedia/>
        
        </TitleAndBox>
        </div>)

    }

}

export default CreateTeamPageMain;
import React, { Component } from "react";
import LabelInput from "../../global/inputs/global-inputs-label";

class CreateTeamPageSocialMedia extends Component {
    constructor(props) {
        super(props); 
        this.state = { loading: true };
      }

      createInputs(){
          const socialInputs = ["twitter", "instagram", "youtube", "stream"];
          return socialInputs.map((val, i) => {
              return <LabelInput key={i} name={val} label={val} className="socialMediaInput" placeholder={val + " name"} />
          })
         

      }
      
  render() {

        return (<div>
            
            {this.createInputs()}
          </div>)

      
  
  }
}

export default CreateTeamPageSocialMedia;

import React, { Component } from "react";

class CreateTeamPageSocialMedia extends Component {
  createInputs() {
    const socialInputs = ["twitter", "instagram", "youtube", "stream"];
    return socialInputs.map((val, i) => {
      return (
        <LabelInput
          key={i}
          name={val}
          label={val}
          className="socialMediaInput"
          placeholder={val + " name"}
        />
      );
    });
  }

  render() {
    return <div>{this.createInputs()}</div>;
  }
}

export default CreateTeamPageSocialMedia;

import React, { Component } from "react";
import Input from "../../../global/inputs";

class CreateLeaguePageSocialMedia extends Component {
  createLabelInputs(){
    const labels = ["Twitter", "Instagram", "YouTube", "Stream"];
    return labels.map((val, index) =>{
      return(
      <p key={index} >
        <label htmlFor={val}>{val}: </label>
      <Input name={val} type="text"/>
      <br />
      </p>);
    })
  }
  render() {
    return <div>
      <h3>Social Media</h3>
    {this.createLabelInputs()}
    </div>;
  }
}

export default CreateLeaguePageSocialMedia;

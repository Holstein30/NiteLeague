import React, { Component } from "react";
import Input from "../../global/inputs";

class RegistrationPageFormSignup extends Component {
    render(){
        return (
         
            <div>
                <form style={{textAlign:"center"}}>
         
                <Input className="registrationInput" type="text" name="Username" pattern=".*" title="" placeholder=" Username" required="true" />
                <br />
                <br />
                <Input className="registrationInput" type="text" name="Email" pattern=".*" title="" placeholder=" Email" required="true" />
                <br />
                <br />
                <Input className="registrationInput" type="password" name="Password" pattern=".*" title="" placeholder=" Password" required="true" />
                <br />
                <br />
                <Input className="registrationInput" type="password" name="confirmPassword" pattern=".*" title="" placeholder=" Confirm Password" required="true" />
                <br />
                <br />
                <Input className="registrationInput" type="text" name="epicGamesDisplay" pattern=".*" title="" placeholder=" Epic Games Display" required="true" />
                <br />
                <br />
                <Input className="registrationInput" type="text" name="xbox" pattern=".*" title="" placeholder=" Xbox Gamertag" required="false" />
                <br />
                <br />
                <Input className="registrationInput" type="text" name="psn" pattern=".*" title="" placeholder=" PSN ID" required="false" />
                <br />
                <br />
                <select className="registrationInput">
                <option value="United States">United States</option>
                </select>
                <br />
                <br />
                <Input className="registrationInput" type="date" name="dob" pattern=".*" title="" placeholder=" DOB" required="true" />
                <br />
                <br />
                <div style={{margin: "auto", border: "solid 2px black", height: "50px", width: "20%"}}></div>
                <h4> ^ CAPTCHA ^ </h4>
                <Input className="registrationInput" type="checkbox" name="terms" pattern=".*" title="" placeholder=" username" required="true" value="terms" />
                <label htmlFor="terms">I agree to terms & conditions</label>
                <br />
                <Input className="registrationInput" type="checkbox" name="ageCheck" pattern=".*" title="" placeholder=" username" required="true" value="ageCheck" />
                <label htmlFor="terms">I certify I am over xx years old</label>
                <br />
                <br />
                <button className="registrationInput" type="submit" name="signup" value="Sign me up">Sign Me Up! </button>
                </form>
                </div>
               

        );
    }

}

export default RegistrationPageFormSignup;
import React, { Component } from "react";
import Input from "../../global/inputs";

class RegistrationPageFormSignup extends Component {
    render(){
        return (
            <div>
                <form>
                <Input className="registrationInput" type="text" name="username" pattern=".*" title="" placeholder="username" required="true" />
                <br />
                <br />
                <Input className="registrationInput" type="text" name="email" pattern=".*" title="" placeholder="email" required="true" />
                <br />
                <br />
                <Input className="registrationInput" type="password" name="password" pattern=".*" title="" placeholder="password" required="true" />
                <br />
                <br />
                <Input className="registrationInput" type="password" name="confirmPassword" pattern=".*" title="" placeholder="confirmPassword" required="true" />
                <br />
                <br />
                <Input className="registrationInput" type="text" name="epicGamesDisplay" pattern=".*" title="" placeholder="epicGamesDisplay" required="true" />
                <br />
                <br />
                <Input className="registrationInput" type="text" name="xbox" pattern=".*" title="" placeholder="xbox" required="false" />
                <br />
                <br />
                <Input className="registrationInput" type="text" name="psn" pattern=".*" title="" placeholder="psn" required="false" />
                <br />
                <br />
                <select className="registrationInput">
                <option value="United States">United States</option>
                </select>
                <br />
                <br />
                <Input className="registrationInput" type="checkbox" name="terms" pattern=".*" title="" placeholder="username" required="true" value="terms" />
                <label htmlFor="terms">I agree to terms & conditions</label>
                <br />
                <Input className="registrationInput" type="checkbox" name="ageCheck" pattern=".*" title="" placeholder="username" required="true" value="ageCheck" />
                <label htmlFor="terms">I certify I am over xx years old</label>
                <br />
                <br />
                <Input className="registrationInput" type="submit" name="signup"  />
                </form>
                </div>
               

        );
    }

}

export default RegistrationPageFormSignup;
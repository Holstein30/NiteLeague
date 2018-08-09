import React, { Component } from "react";
import Input from "../global/inputs"

class Login extends Component {
  render() {
    return <div>
        <form style={{textAlign:"center"}}>
        <div style={{border: "solid 1px black", padding: "20px", margin: "5% 35% 0% 35%"}}>
        <br />
    <Input className="registrationInput" type="text" name="Username" pattern=".*" title="" placeholder=" Username" required="true" />
    <br />
    <br />
    
    <Input className="registrationInput" type="text" name="Password" pattern=".*" title="" placeholder=" Password" required="true" />
    <br />
    <br />
    <Input className="registrationInput" type="checkbox" name="Password" pattern=".*" title="" placeholder=" Password" required="true" />
    <label for="rememberMe"> Remember Me</label>
    <br />
    <br />
    <button className="registrationInput">Log in</button>
    <p> Forgot Password? <a href="#"> Click Here </a> </p>
    <p> Need to create an account? <a href="#"> Click Here </a> </p>

    </div>
    </form></div>;
  }
}

export default Login;
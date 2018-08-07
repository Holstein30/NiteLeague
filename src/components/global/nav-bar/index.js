import React, { Component } from "react";
import Button from "../buttons";

class Navbar extends Component {
  render() {
    return (
      <div className="nav-bar">
        <Button className="home-btn" name="Logo/Home" />
        <Button className="about-btn" name="About" />
        <Button className="premier-leagues-btn" name="Premier Leagues" />
        <Button className="open-leagues-btn" name="Open Leagues" />
        <Button className="shop-btn" name="Shop" />
        <Button className="support-btn" name="Support" />
        <Button className="login-btn" name="Login/Sign Up" />
        <hr />
       
      </div>
    );
  }
}

export default Navbar;

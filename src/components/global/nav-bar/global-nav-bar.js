import React, { Component } from "react";
import Button from "../buttons";

class Navbar extends Component {
  render() {
    return (
      <div className="nav-bar">
        <Button className="home-btn" name="Logo/Home" link="/" />
        <Button className="about-btn" name="About" />
        <Button className="premier-leagues-btn" name="Premier Leagues" />
        <Button className="open-leagues-btn" name="Open Leagues" />
        <Button className="shop-btn" name="Shop" />
        <Button className="support-btn" name="Support" />
        <Button className="login-btn" name="Sign Up" link="/registration" />
        <Button className="login-btn" name="Login" link="/login" />
        <hr />
      </div>
    );
  }
}

export default Navbar;

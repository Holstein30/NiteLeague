import React, { Component } from "react";
import Button from "../buttons";

class Navbar extends Component {
  render() {
    return (
      <div className="nav-bar">
        <Button className="home-btn" name="Logo/Home" link="/" />
        <Button
          className="premier-leagues-btn"
          name="Premier Leagues"
          link="/premierleagues"
        />
        <Button
          className="open-leagues-btn"
          name="Open Leagues"
          link="/browse"
        />
        <Button className="shop-btn" name="Shop" link="/store" />
        <Button className="support-btn" name="Support" link="/support" />
        <Button className="login-btn" name="Sign Up" link="/registration" />
        <Button className="login-btn" name="Login" link="/login" />
        <hr />
      </div>
    );
  }
}

export default Navbar;

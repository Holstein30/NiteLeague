import React, { Component } from "react";
import Social from "../links";
import Button from "../buttons";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="social-links">
          <Social className="facebook-btn" name="Facebook" />
          <Social className="twitter-btn" name="Twitter" />
        </div>
        <div className="copyright">&copy; NiteLeague 2018</div>
        <Button className="contact-btn" name="Contact Us" />
      </div>
    );
  }
}

export default Footer;

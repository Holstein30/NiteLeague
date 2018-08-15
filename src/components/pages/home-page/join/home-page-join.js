import React, { Component } from "react";
import Button from "../../../global/buttons";

class HomePageJoinLeague extends Component {
  handleEventJoinLeague() {
    console.log("click 2");
  }

  render() {
    return (
      <div>
        <img
          src="../../../../public/images/ph2.jpg"
          className="join-league-img"
        />
        <Button
          className="join-league-btn"
          name="Join a League"
          handleClick={this.handleEventJoinLeague}
        />
        <h3>Our Mission</h3>
        <p className="our-mission-p">
          Lorem ipsum dolor amet art party truffaut cold-pressed, try-hard pok
          pok mixtape banjo af vape pug salvia tbh hoodie hashtag vegan.
          Knausgaard twee farm-to-table, typewriter poutine locavore narwhal
          vaporware. Crucifix lo-fi live-edge chia. Brunch meh kombucha, venmo
          etsy chartreuse celiac pabst asymmetrical. Farm-to-table mixtape
          knausgaard lomo enamel pin butcher. Oh. You need a little dummy text
          for your mockup? How quaint. I bet you’re still using Bootstrap too…
        </p>
      </div>
    );
  }
}

export default HomePageJoinLeague;

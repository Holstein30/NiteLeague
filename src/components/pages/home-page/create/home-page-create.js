import React, { Component } from "react";
import Button from "../../../global/buttons";

class HomePageCreate extends Component {
  handleEventCreateLeague() {
    console.log("click");
  }

  render() {
    return (
      <div>
        <img
          src="../../../../../public/images/ph1.jpg"
          className="create-league-img"
        />
        <Button
          className="create-league-btn"
          name="Create League"
          handleClick={this.handleEventCreateLeague}
        />
        <h3>How It Works</h3>
        <p className="how-it-works-p">
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

export default HomePageCreate;

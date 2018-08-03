import React, { Component } from "react";
import Navbar from "./global/nav-bar";
import Footer from "./global/footer";
import Main from "./Main";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;

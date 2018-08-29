import React, { Component } from "react";
import { connect } from "react-redux";
import Navbar from "./global/nav-bar";
import Footer from "./global/footer";
import Main from "./Main";

// The App component holds our base rendering of the navbar and footer
// which are present on every single page
// the only changing page will be our Main component
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

export default connect(null)(App);

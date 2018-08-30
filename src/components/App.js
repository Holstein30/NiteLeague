import React, { Component } from "react";
import Navbar from "./global/nav-bar";
import Footer from "./global/footer";
import Main from "./Main";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";

import reducers from "./reducers";
import axios from "axios";
window.axios = axios;

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

// The App component holds our base rendering of the navbar and footer
// which are present on every single page
// the only changing page will be our Main component
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Navbar />
          <Main />
          <Footer />
        </div>
      </Provider>
    );
  }
}

export default App;

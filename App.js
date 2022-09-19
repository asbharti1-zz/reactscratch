import React, { Component } from "react";

import AppLayout from "./src/components/layout";

import "./app.css"
import {
  BrowserRouter as Router,
  Route,
  Link,
  useRouteMatch,
  useParams,
  Routes
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <>
      <Router>
        <AppLayout/>
      </Router>
      </>
    );
  }
}

export default App;

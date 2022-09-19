import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppLayout from "./src/components/layout";

import "./app.css"


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

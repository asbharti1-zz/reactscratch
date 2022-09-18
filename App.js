import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppLayout from "./src/components/layout";
import Employee from "./src/components/table";
import "./app.css";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Routes>
            <Route exact path="/" element={<AppLayout />} />
            <Route path="/table" element={<Employee />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;

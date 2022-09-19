import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppLayout from "./src/components/layout";

import "./app.css"


const App =({...props}) => {
    console.log(props);
    return (
      <>
      <Router>
        <AppLayout {...props}/>
      </Router>
      </>
    );
 
}

export default App;

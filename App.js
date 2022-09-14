import React, { Component } from "react";
import Header from "./src/components/header/index";
import Footer from "./src/components/footer/index";

class App extends Component {
  render() {
    const { name } = this.props;
    return (
      <div className="container">
        <Header />
        <div className="col-12">
          <h1>Hello {name}</h1>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import Header from "./src/components/header/index";
import Footer from "./src/components/footer/index";
import AuthorQuiz from "./src/quiz";

class App extends Component {
  render() {
    const { name, a,b} = this.props;
    return (
      <div className="container">
        <Header />
        <div className="col-12">
          <AuthorQuiz a={a} b={b}></AuthorQuiz>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;

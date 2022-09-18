import React, { Component } from "react";
//import Header from "./src/components/header/index";
import Footer from "./src/components/footer/index";
import Sidebar from "./src/components/sidebar/index";
import AuthorQuiz from "./src/quiz";
import Mounting from "./src/components/lifecycle/mounting";
import { LoginUi } from "./src/components/auth/login";

import AppLayout from "./src/components/layout";
import "antd/dist/antd.css"
class App extends Component {
  render() {
    const { name, a, b } = this.props;
    return (
      <AppLayout/>
    );
  }
}

export default App;

// <div className="container">
//         <Header /> 
//         <div className="main">
//           {/* <Sidebar />  */}
//         </div>
//         <div className="row">
//           <div className="col-6">
//               <LoginUi/>
//           </div>
//         </div>
//         <div className="col-12">
//           {/* <AuthorQuiz a={a} b={b}></AuthorQuiz> */}
//         </div>
//         <div className="col-6">
//           {/* <Mounting /> */}
//         </div>
//         <Footer />
//       </div>
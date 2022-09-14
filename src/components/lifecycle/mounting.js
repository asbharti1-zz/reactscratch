import React, { Component } from "react";

class Mounting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "Jhony Deph",
    };
  }

  getData() {
    setTimeout(() => {
      console.log("Our data is fetched");
      this.setState({
        data: "Hello Bin Disel",
      });
    }, 1000);
  }

  componentDidMount() {
    this.getData();
  }
  /*1-componentWillMount()
2-set the initial state in the constructor
3-render()
4-componentDidMount()
5-setState()
6-render()*/
  //componentWillMount() method is the least used lifecycle method and called before any HTML element is rendered
  componentWillMount() {
    console.log("componentWillMount()");
  }
  render() {
    return <div>{this.state.data}</div>;
  }
}

export default Mounting;

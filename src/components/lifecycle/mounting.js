import React, { Component } from "react";

/**
 * @description Point to Remeber
 * 1. setState doesn't garuntee when it will update. 
 */
class Mounting extends Component {

  /**
   * @description LifeCycle Call - 1
   *  */ 
  constructor(props) {
    
    super(props);
    this.state = {
      name : props.name,
      message : props.message ? props.message :" Hola Amigo! Click on this to change counter : ",
      clicks : 0
    };
    this.counter = 0;
    console.log("constructor :: Caller count - ", ++this.counter); 
  }

  /**
   * @description LifeCycle Call - 2
   *  */ 
  componentWillMount() {
    console.log("componentWillMount :: Caller count - ", ++this.counter); // 1
  }
  
  /**
   * @description LifeCycle Call - 3
   *  */ 
  render() {
    console.log("render :: Caller count - ", ++this.counter); // 2, 3 = development
    return (<div onClick={ this.onClickHandle.bind(this)} className="card col-12 center">
      <h3>
        {this.state.message} 
      </h3> 
      <h2 className="text-info">
        {this.state.clicks} 
        </h2>
        </div>);
  }

  /**
   * @description LifeCycle Call - 4 and 6
   *  */ 
   componentDidMount() {
    const that = this;
    let nme = this.state.name;
    setTimeout(() =>{
      console.log("componentDidMount :: Caller count -",++this.counter); //4 , 5 = development
      this.setState({
        message: "Hello "+{nme}+" you rendered this component at counter:  "+ (this.counter) + ". Wanna Play , Click me : ", // 6 , 7
      })
    }, 1000);
  }

  /**
   * @description LifeCycle Call - 5
   *  */ 
  shouldComponentUpdate(){
    console.log("shouldComponentUpdate :: Caller count -",++this.counter);
    return true;
  }

  /**
   * @description LifeCycle Call - 7
   *  */ 
  componentDidUpdate(){
    console.log("componentDidUpdate :: Caller count -",++this.counter);
    //return true;
  }

  componentDidCatch(){
    console.log("componentDidCatch :: Caller count -",++this.counter);
    //return true;
  }

  componentWillUnmount(){
    console.log("componentWillUnmount :: Caller count -",++this.counter);
    //return true;
  }

  onClickHandle = () =>{
    this.setState({clicks: ++this.state.clicks});
  }
  
}

export default Mounting;

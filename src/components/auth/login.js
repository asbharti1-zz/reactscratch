import React, { Component } from "react";

import { loginWithEmailPass ,logoutEmailUser} from "./fbeauth";

class LoginUi extends Component{

    constructor(props) {
        super(props);
    
        this.state = {
          email: '',
          password: ''
        };
      }

    handleSubmit = (event) =>{
        event.preventDefault();
        const email = this.state.email;
        const password = this.state.password;
        console.log("credentials info> ",email, password);
        loginWithEmailPass(email,password);
        this.setState({ email: '', password: '' });
    }
    handleLogout =(event) =>{
      event.preventDefault();
      console.log('logging out 00');
      logoutEmailUser();

    }

    handleChange = event => {
        const { value, name } = event.target;
    
        this.setState({ [name]: value });
      };

      render(){
        return (
           <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    {/* <!-- Email input --> */}
                    <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="emailId">Email address</label>
                        <input type="email" id="emailId" 
                        name="email" className="form-control"  
                        placeholder="jhon@jhon.com" 
                        onChange={this.handleChange.bind(this)}
                        required 
                        />
                        
                    </div>

                    {/* <!-- Password input --> */}
                    <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="passwordId">Password</label>
                        <input type="password" id="passwordId" name="password"
                        className="form-control" 
                        placeholder="******" onChange={this.handleChange.bind(this)}
                        required
                        />
                        
                    </div>

                    {/* <!-- 2 column grid layout for inline styling --> */}
                    <div className="row mb-4">
                        <div className="col d-flex justify-content-center">
                        {/* <!-- Checkbox --> */}
                        <div className="form-check">
                        <button type="submit" 
                        className="btn btn-primary btn-block mb-4">Sign in</button>
                        </div>
                        </div>
                    
                    </div>
                    <div>
                      <button type="button" className="btn btn-warning btn-block mb-4"
                       onClick={this.handleLogout.bind(this)}> LOGOUT</button>
                    </div>

                    {/* <!-- Submit button --> */}
                    
                    
                    </form>
           </div>
        );
      }
    

}
export {LoginUi};
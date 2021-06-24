import React, {Component} from 'react'

class SignUp extends Component{
    render(){
        return(
            <div>
            <form>
              <div>
                  <h1>Please Sign Up</h1>
                  <input type="text" name="email" placeholder="Email"/>
                  <label htmlFor="username">Email</label>
              </div>
              <div>
                  <input type="password" name="password" placeholder="Password"/>
                  <label htmlFor="password">Password</label>
              </div>
              <input type="submit" value="Login"/>
            </form>
          </div>
        )
    }
}

export default SignUp;
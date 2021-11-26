import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import { Auth, Amplify } from 'aws-amplify';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);

class App extends Component {
  constructor() {
    super();
    this.state = { username: '', };
    console.log('In constructor');
    console.log(this.state.username);
  }
  
  async componentDidMount() {
    const user = await Auth.currentAuthenticatedUser({bypassCache : false});
    this.setState({ username: user.username });
    console.log('in componentDidMount()');
    console.log(this.state.username);
  }
  
  render() {
    console.log('in render');
    console.log(this.state.username);
    return (
      <div className="App">
        <AmplifySignOut />
        <header className="App-header">
          <p>Welcome {this.state.username}</p>
          <p>Your current balance is 0Kilo</p>
          <p>You have no blockchain account associated with your profile</p>
          <p>Please upload your activity files</p>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default withAuthenticator(App);

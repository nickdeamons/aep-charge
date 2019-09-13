import React, { Component } from 'react';
import Zapchat from './components/Zapchat/index.js';

import axios from 'axios';
// import oauth from 'axios-oauth-client';

import config from './appConfig.json';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      authizations: [],
      errors: [],
      currentUser: {},
      users: [],
    }

    this.getData = this.getData.bind(this);
  }

  async getData() {
    // console.log('get data');
    console.log('getData called');
    const result = await axios.get('https://slack.com/api/users.list?token='+config.Slack.token)
    
    this.setState({ users: result.data.members });  
    console.log(result.data.members.length, this.state.users.length);
  }

  render() {
    return (
      <div className="App">
        <h1>Zapchat</h1>
        <button onClick={this.getData}>Populate Users Models</button>
        {this.state.users.length > 0 && 
          <Zapchat users={this.state.users} />
        }
      </div>
    );
  }
}

export default App;

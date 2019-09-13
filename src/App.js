import React, { Component } from 'react';
import Zapchat from './components/Zapchat/index.js';

import axios from 'axios';
// import oauth from 'axios-oauth-client';

import config from './appConfig.json';

import './App.css';

class App extends Component {
  constructor() {
    super();

    /**
      * This is to explain the intent of this state object
      * @property {Array} authorizations
      * Store authorizations this user has for acc
     */

    this.state = {
      errors: [],
      currentUser: {},
      users: [],
    }

    this.getData = this.getData.bind(this);
  }

  async getData() {
    // make the slack API call (requires a JEST mock)
    const result = await axios.get('https://slack.com/api/users.list?token='+config.Slack.token)
    // set the state to match the result set
    this.setState({ users: result.data.members });  
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

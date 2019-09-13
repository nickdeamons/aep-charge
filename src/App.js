import React, { Component } from 'react';
import Zapchat from './components/Zapchat/index.js';

import axios from 'axios';
// import oauth from 'axios-oauth-client';

import './App.css';
import config from './appConfig.json';

/*
const getUserInfo = oauth.client(axios.create(), {
  url: 'https://slack.com/api/users.list',
  grant_type: 'password',
  client_id: 'zapchat',
  client_secret: config.client_secret,
  signing_secret: config.signing_secret,
  verification_token: config.verification_token,
  token: config.token
}); */
 
// const auth = await getOwnerCredentials(); 


class App extends Component {

  componentDidMount() {
    /*async function test() {
      //const auth = await getUserInfo()
      //console.log(auth)
    }
    test();*/
    axios.get('https://slack.com/api/users.list?token='+config.Slack.token, {
      
    }).then((response) => {
      console.log(response);
    }).catch((error) => {
      console.log(error);
    })
  }


  render() {
    return (
      <div className="App">
        <h1>Zapchat</h1>
        <Zapchat />
      </div>
    );
  }
}

export default App;

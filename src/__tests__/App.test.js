import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import {shallow} from 'enzyme';
import App from '../App';


// Mock out all top level functions, such as get, put, delete and post:
import config from '../appConfig.json';

import mockData from '../models/membersResponse';

describe('App', () => {
  
  
  let app, appInstance;
  const spy = jest.spyOn(App.prototype, 'getData');
  function tick() {
    return new Promise(resolve => {
      setTimeout(resolve, 0);
    })
  }
  beforeEach(() => {
    app = shallow(<App />);
    
    const mock = new MockAdapter(axios);
       mock
        .onGet("https://slack.com/api/users.list?token="+config.Slack.token)
        .reply(200, mockData);
      app.find('button').simulate('click');
      
  })

  it('calls the `getData` function', () => { 
    expect(spy).toHaveBeenCalled();
  });    
  it('sets the state after the click is called', async () => {
      await tick();
      expect(app.state().users.length).toEqual(mockData.members.length);
  });
})

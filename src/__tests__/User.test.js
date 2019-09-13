import UserModel from '../models/User';

import React from 'react';
import ReactDOM from 'react-dom';
import User from '../components/Zapchat/User';
import {mount} from 'enzyme';

const UserTest = new UserModel();

import SlackDetails from '../models/Account/Slack/example.json';
import SlackAccount from '../models/Account/Slack';

describe('User', () => {

  let user, userInstance;
  beforeEach(() => {
    user = mount(<User data={SlackDetails.user} />)
    // create state reference
    userInstance = user.instance();
  })

  // describe our default User model on instantiation
  it('Has defaults: dude, nickstester, 1, and no accounts', () => {
    expect(UserTest.username).toEqual('nickstester');
    expect(UserTest.name).toEqual('dude');
    expect(UserTest.id).toEqual(1);
    expect(UserTest.accounts.length).toEqual(0);
  });

  it('Can add a new Slack account', () => {
    UserTest.addNewAccount(new SlackAccount(SlackDetails));
    expect(UserTest.hasAccountOfType('Slack')).toEqual(true);
  });

  it('Cannot add an account of an existing account type', () => {
    UserTest.addNewAccount(new SlackAccount(SlackDetails));
    UserTest.addNewAccount(new SlackAccount(SlackDetails));
    expect(UserTest.accounts.length).toEqual(1);
  })

  it('Deletes account of type', () => {
    UserTest.deleteAccountFromUser('Slack');
    expect(UserTest.accounts.length).toEqual(0);
  })

  describe('User Component', () => {
    it('has correct user name', () => {
      expect(user.find('#userName').text()).toEqual(SlackDetails.user.name);
    })
  });

});
import SlackAccount from '../models/Account/Slack';

import axios from 'axios';

import SlackDetails from '../models/Account/Slack/example.json';


describe('Slack Account', () => {
    it('is an account with slack type and data', () => {
        const testAccount = new SlackAccount(SlackDetails);
        expect(testAccount.getType()).toEqual('Slack');
        expect(testAccount.details.user.id).toEqual(SlackDetails.user.id);
    })
})
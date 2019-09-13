import Account from '../models/Account';

import SlackDetails from '../models/Account/Slack/example.json';

const AccountTest = new Account();

describe('Account', () => {
    //const account = new Account
    it('has default account data', () => {
        expect(AccountTest.type).toEqual('Slack');
        expect(AccountTest.details).toEqual({});
    })
    it('can set type', () => {
        AccountTest.setType('Discord');
        expect(AccountTest.type).toEqual('Discord');
    })
    it('can add details', () => {
        AccountTest.addDetails(SlackDetails.user);
        expect(AccountTest.details.id).toEqual(SlackDetails.user.id);
    })
    it('can populate from account of type', () => {
        const type = 'Slack';
        const details = SlackDetails.user;
        AccountTest.populate(type, details);
        expect(AccountTest.type).toEqual('Slack');
        expect(AccountTest.details.id).toEqual(SlackDetails.user.id);
    })
})
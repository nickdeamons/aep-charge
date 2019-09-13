import Account from '../';

class SlackAccount extends Account {
    constructor( details = {}) {
        super('Slack', details);
    }
    // Add Slack specific data retrieval methods or processing here
}

export default SlackAccount;
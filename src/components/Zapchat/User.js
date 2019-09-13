import React from 'react';

import UserModel from '../../models/User'
import AccountModel from '../../models/Account';

class User extends React.Component {

    constructor(props) {
        super(props)

        const user = new UserModel(props.data.name);
        // assume we're getting slack on first initialization        
        user.addNewAccount(new AccountModel('Slack', props.data))
        // again, assuming first pass is slack
        user.setPrimaryAccount('Slack');

        this.state = {
            user: user,
            authorizations: []
        }
    }

    getAccounts() {
        return this.state.user.accounts;
    }

    render() {
       return(
            <div >
                <h2 id="userName">{this.state.user.name}</h2>
                {this.getAccounts().length > 0 && 
                    this.getAccounts().map((account, index) => {
                        return(<div key={`account_${index}`}>
                            Slack account name: <strong>{account.details.name}</strong><br />
                            Slack account phone: {account.details.phone} <br />
                        </div>)
                    })
                    
                }
            </div>
        )
    }
    
}

export default User;
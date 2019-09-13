import React from 'react';

import User from './User';
class Zapchat extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users : this.props.users
        }
    }
    componentDidMount() {
        // console.log('mounted', this.state)
    }
    render() {
        return (
            <div>
                {this.state.users.map((user, index) => {
                    return(
                        <div key={`u_${index}`}>
                            <User data={user}  />
                        </div>)
                })}
            </div>
        )
    }
}

export default Zapchat;
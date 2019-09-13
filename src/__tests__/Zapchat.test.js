import React from 'react';

import Zapchat from '../components/Zapchat';

describe('Zapchat', () => {
    it('test', () => {

    })
    /* let zapchat, zcInstance;
    beforeEach(() => {
        zapchat = mount(<Zapchat users={[]} />)
        // create state reference
        zcInstance = zapchat.instance();
    })
    it('Zapchat mounts and completes the axios request without error', () => {
       let responseObj = [];
       console.log('pre-req')
       mockAxios.get.mockImplementationOnce(
        'https://slack.com/api/users.list?token='+config.Slack.token
            ).then((response) => {
            console.log(response);
            //this.setState({
              //  users: response.data.members
            //})
            
                responseObj = response.data.members;
                zcInstance.setState({
                    users: response.data.members,
                })
        console.log(zcInstance.state)

                expect(zcInstance.state.users.length).toEqual(responseObj.length)

            }).catch((error) => {
            console.log(error);
            })
        /* 
    })     */
})
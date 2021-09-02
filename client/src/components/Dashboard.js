import React from 'react';
import Sidebar from './Sidebar';
import OpenConversation from './OpenConversation';
import {useConversations} from '../contexts/ConversationsProvider';

function Dashboard({ id }){
    const {selectedConversation} = useConversations()
    return(

        <div className="d-flex" style={{ height: '100vh'}}>
            <Sidebar id={id}/>
            {selectedConversation && <OpnConversation />}
        </div>

    )
}

export default Dashboard;
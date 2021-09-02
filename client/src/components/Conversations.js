import React from 'react';
import {ListGroup} from 'react-bootstrap';
import {useConversations} from '../contexts/ConversationsProvider';

export default function Conversations(){
    const {conversations, selectConversations} = useConversations()
    
    return(
        <ListGroup variant="flush">
            {conversations.map((conversation, index) => (
                <ListGroup.Item
                    key={index}
                    action
                    onCLick={() => selectConversationIndex(index)}
                    active={conversation.selected}
                >
                    {conversation.recipients.map(r => r.name).join(', ')}
                </ListGroup.Item>
            ))}
            
        </ListGroup>
    )
}


import React from 'react'
import {Tab, Nav, Button} from 'react-bootstrap'
import {useState } from 'react';
import Conversations from './Conversations'
import Contacts  from './Contacts';
import NewContactModal from './NewContactModal';
import NewConversationModal from './NewConversationModal';

const CONVERSATIONS_KEY = 'conversations';
const CONTACTS_KEY = 'contacts';

export default function Sidebar({ id }){
    const [activeKey, setActiveKey] =  useState(CONVERSATIONS_KEY)
    const conversationOpen = activeKey === CONVERSATIONS_KEY
    return (
        <div style = {{ width: '250px'}} className = "d-flex flex-column">
            <Tab.Container activeKey={activeKey} onSelect = {setActiveKey}>
                <Nav variant = "tabs" className="justify-content-center">
                    <Nav.Item>
                        <Nav.Link eventKey={CONVERSATIONS_KEY}>
                            Conversations
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey = {CONTACTS_KEY}> 
                            Contacts
                        </Nav.Link>
                    </Nav.Item>
                </Nav>

                <Tab.Content className="overflow-auto border-right flex-gow-1">
                    <Tab.Pane eventKey={CONVERSATIONS_KEY}>
                        <Conversations/>
                        
                    </Tab.Pane>
                    <Tab.Pane eventKey={CONTACTS_KEY}>
                        <Contacts/>
                        
                    </Tab.Pane>
                </Tab.Content>

                <div className="p-2 border-top small border-right bottom-fixed">
                    Your id: {id}
                </div>
                <Button className="rounded p-2"> 
                    New {conversationOpen ? 'Conversations': 'Contact'}
                </Button>
            </Tab.Container>

            <Modal>
                {conversationOpen ?
                <NewConversationModal/> :
                <NewContactModal/>
                }
            </Modal>
        </div>
    )
}
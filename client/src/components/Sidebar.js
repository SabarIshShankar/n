import React from 'react'
import {Tab, Nav, Button, Modal} from 'react-bootstrap'
import {useState } from 'react';
import Conversations from './Conversations'
import Contacts  from './Contacts';
import NewContactModal from './NewContactModal';
import NewConversationModal from './NewConversationModal';

const CONVERSATIONS_KEY = 'conversations';
const CONTACTS_KEY = 'contacts';

export default function Sidebar({ id }){
    const [activeKey, setActiveKey] =  useState(CONVERSATIONS_KEY)
    const [modalOpen, setModalOpen] = useState(false)
    const conversationsOpen = activeKey === CONVERSATIONS_KEY

    function closeModal(){
        setModalOpen(false)
    }

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

                <Tab.Content className="overflow-auto border-right flex-glow-1">
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
                <Button onClick= {() => setModalOpen(true)} className="rounded p-2"> 
                    New {conversationsOpen ? 'Conversation': 'Contact'}
                </Button>
            </Tab.Container>

            <Modal show={modalOpen} onHide={closeModal}>
                {conversationsOpen ?
                <NewConversationModal closeModal={closeModal}/> :
                <NewContactModal cloaseModal={closeModal}/>
                }
            </Modal>
        </div>
    )
}
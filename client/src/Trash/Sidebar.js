import React, { useRef, useState } from 'react'
import { useContacts } from './ContactsProvider'
// import { Tab, Nav, Button, Modal } from 'react-bootstrap'
// import Conversations from './Conversations'
// import { useConversations } from '../contexts/ConversationsProvider';
// import Contacts from './Contacts'
import {useConversations} from './ConversationProvider';
// import NewContactModal from './NewContactModal'
// import NewConversationModal from './NewConversationModal'

const CONVERSATIONS_KEY = 'conversations'
const CONTACTS_KEY = 'contacts'

export default function Sidebar(props) {
    const emailref = useRef();
    const {contacts} = useContacts();
    const {createContact} =useContacts()
    const [activeKey, setActiveKey] = useState(CONVERSATIONS_KEY)
    const [modalOpen, setModalOpen] = useState(false)
    const [selectedContactIds, setSelectedContactIds] = useState([])
    const conversationsOpen = activeKey === CONVERSATIONS_KEY
    const { createConversation } = useConversations()
    const { conversations, selectConversationIndex } = useConversations()
function handleConversation(e) {
  e.preventDefault()
  createConversation(selectedContactIds)
}

function handleCheckboxChange(contactId) {
  setSelectedContactIds(prevSelectedContactIds => {
    if (prevSelectedContactIds.includes(contactId)) {
      return prevSelectedContactIds.filter(prevId => {
        return contactId !== prevId
      })
    } else {
      return [...prevSelectedContactIds, contactId]
    }
  })
}
const handleSubmit = (e) =>{
    e.preventDefault()

    createContact(emailref.current.value)
}
//   {conversations.map((conversation, index) => (
    //   {conversation.recipients.map(r => r.name).join(', ')}

//   }
  return (
    <div style={{ width: '250px', display:'flex', flexDirection: 'column'}} className="d-flex flex-column">
        {activeKey}
        {CONVERSATIONS_KEY}
        {CONTACTS_KEY}
        Mail:{props.id}
        {conversations}
        {contacts}
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter Email"  ref={emailref}></input>
            <button type='submit' value="Submit"></button>
        </form>

        <form onSubmit={handleSubmit}>
          {contacts.map(contact => (
              <input
                type="checkbox"
                value={selectedContactIds.includes(contact.id)}
                label={contact.name}
                onChange={() => handleCheckboxChange(contact.id)}
              />
          ))}
          <button type="submit">Create</button>
        </form>

      {/* <Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
        <Nav variant="tabs" className="justify-content-center">
          <Nav.Item>
            <Nav.Link eventKey={CONVERSATIONS_KEY}>Conversations</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey={CONTACTS_KEY}>Contacts</Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content className="border-right overflow-auto flex-grow-1">
          <Tab.Pane eventKey={CONVERSATIONS_KEY}>
            <Conversations />
          </Tab.Pane>
          <Tab.Pane eventKey={CONTACTS_KEY}>
            <Contacts />
          </Tab.Pane>
        </Tab.Content>
        <div className="p-2 border-top border-right small">
          Your Id: <span className="text-muted">{id}</span>
        </div>
        <Button onClick={() => setModalOpen(true)} className="rounded-0">
          New {conversationsOpen ? 'Conversation' : 'Contact'}
        </Button>
      </Tab.Container>

      <Modal show={modalOpen} onHide={closeModal}>
        {conversationsOpen ?
          <NewConversationModal closeModal={closeModal} /> :
          <NewContactModal closeModal={closeModal} />
        }
      </Modal> */}
    </div>
  )
}
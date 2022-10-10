import React from 'react'
import Sidebar from './Sidebar';
import OpenConversation from './OpenConversation';
// import { useConversations } from '../contexts/ConversationsProvider';


function ConversationDashboard({id}) {
//   const { selectedConversation } = useConversations()

  return (
    <div style={{ height: '100vh', display: 'flex' }}>
      <Sidebar id={id} />
      {/* {selectedConversation && <OpenConversation />} */}
      <OpenConversation/>
    </div>
  )
}

export default ConversationDashboard
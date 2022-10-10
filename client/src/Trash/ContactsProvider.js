import React, { useContext, useState } from 'react'

const ContactsContext = React.createContext()

export function useContacts() {
  return useContext(ContactsContext)
}

export function ContactsProvider({ children }) {
//   const [contacts, setContacts] = useLocalStorage('contacts', [])

  const [contacts, setContacts] = useState(["This"])
//   localStorage.setItem("contacts", contacts);
  function createContact(id, name) {
    setContacts(prevContacts => {
      return [...prevContacts, { id, name }]
    })
  }

  return (
    <ContactsContext.Provider value={{ contacts, createContact }}>
      {children}
    </ContactsContext.Provider>
  )
}
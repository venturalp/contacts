import uuid from 'uuid/v4'

const colors = [
  '#fa8d68',
  '#90d26c',
  '#68a0fa',
  '#fab668',
  '#8368fa',
  '#fa68b5',
  '#5fe2c4',
  '#f55a5a',
]

const randomRange = (min = 0, max = 1) => {
  return Math.floor(Math.random() * (max - min) + min)
}

export const fetchContacts = () => {
  return JSON.parse(window.localStorage.getItem('contacts') || false) || []
}

export const saveContact = data => {
  const contacts = fetchContacts()
  const contactsUpdated = contacts.map(contact => {
    if (contact.id === data.id) return data
    return contact
  })
  window.localStorage.setItem('contacts', JSON.stringify(contactsUpdated))
}

export const deleteContact = id => {
  const contacts = fetchContacts()
  const contactsUpdated = contacts.filter(contact => contact.id !== id)

  window.localStorage.setItem('contacts', JSON.stringify(contactsUpdated))
}

export const addContact = data => {
  const contacts = fetchContacts()
  const contact = { ...data, id: uuid() }
  window.localStorage.setItem(
    'contacts',
    JSON.stringify([...contacts, contact]),
  )
}

import {
  ADD_CONTACT,
  SET_EDIT_CONTACT,
  SAVE_CONTACT,
  GET_CONTACTS,
} from './types'

export const addContact = data => ({
  type: ADD_CONTACT,
  payload: data,
})

export const getContacts = data => ({
  type: GET_CONTACTS,
})

export const saveContact = data => ({
  type: SAVE_CONTACT,
  payload: data,
})

export const setEditContact = data => ({
  type: SET_EDIT_CONTACT,
  payload: data,
})

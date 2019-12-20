import {
  ADD_CONTACT,
  SET_EDIT_CONTACT,
  SAVE_CONTACT,
  GET_CONTACTS,
  DELETE_CONTACT,
} from './types'
import API from '../services/fakeApi'

export const addContact = data => {
  return {
    type: ADD_CONTACT,
    payload: API.addContact(data),
  }
}

export const getContacts = () => ({
  type: GET_CONTACTS,
  payload: API.fetchContacts(),
})

export const saveContact = data => ({
  type: SAVE_CONTACT,
  payload: API.saveContact(data),
})

export const deleteContact = id => ({
  type: DELETE_CONTACT,
  payload: API.deleteContact(id),
})

export const setEditContact = data => ({
  type: SET_EDIT_CONTACT,
  payload: data,
})

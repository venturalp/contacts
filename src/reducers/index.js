import {
  ADD_CONTACT,
  SET_EDIT_CONTACT,
  SAVE_CONTACT,
  GET_CONTACTS,
  DELETE_CONTACT,
} from '../actions/types'

const INITIAL_STATE = {
  // contacts: [
  //   {
  //     id: '3345345',
  //     name: 'Guilherme Ventura de Souza',
  //     email: 'venturalp@gmail.com',
  //     phone: '14981022002',
  //     color: '#8368fa',
  //   },
  // ],
  editContact: {},
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      }
    case SAVE_CONTACT:
      return {
        ...state,
        contacts: action.payload,
        editContact: {},
      }
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: action.payload,
      }
    case SET_EDIT_CONTACT:
      return {
        ...state,
        editContact: action.payload,
      }
    case GET_CONTACTS:
      return {
        ...state,
        contacts: action.payload,
      }
    default:
      return state
  }
}

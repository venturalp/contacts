// @flow
import React, { useState, useEffect } from 'react'
import Button from '../components/Button'
import IcoPlus from '../assets/ic-plus.svg'
import SearchBar from '../components/SearchBar'
import Header from '../components/Header'
import ContactList from '../components/ContactList'
import ModalContact from '../components/ModalContact'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { getContacts } from '../actions'

const Home = () => {
  const [isModalOpened, setIsModalOpened] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const contacts = useSelector(({ generalReducer }) => generalReducer.contacts)
  const dispatch = useDispatch()
  const [filteredContacts, setFilteredContacts] = useState(contacts)

  const onCreatContact = () => {
    setIsModalOpened(true)
  }

  const onCloseModal = () => {
    setIsModalOpened(false)
  }

  const onSubmit = value => {
    setSearchValue(value)
  }

  const filterContacts = () => {
    if (!searchValue) return contacts

    return contacts.filter(
      contact =>
        contact.name.toUpperCase().indexOf(searchValue.toUpperCase()) !== -1 ||
        contact.email.toUpperCase().indexOf(searchValue.toUpperCase()) !== -1 ||
        contact.phone.toUpperCase().indexOf(searchValue.toUpperCase()) !== -1,
    )
  }

  useEffect(() => {
    dispatch(getContacts())
    setFilteredContacts
  }, [])

  return (
    <>
      <Header
        contacts={contacts}
        onCreatContact={onCreatContact}
        onSubmit={onSubmit}
      />
      <ContactList
        contacts={filterContacts()}
        onCreatContact={onCreatContact}
      />
      {isModalOpened && <ModalContact onCloseModal={onCloseModal} />}
    </>
  )
}

export default Home

// @flow
import React, { useState } from 'react'
import Button from '../components/Button'
import IcoPlus from '../assets/ic-plus.svg'
import SearchBar from '../components/SearchBar'
import Header from '../components/Header'
import ContactList from '../components/ContactList'
import ModalContact from '../components/ModalContact'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

const Home = () => {
  const [isModalOpened, setIsModalOpened] = useState(false)
  const contacts = useSelector(({ generalReducer }) => generalReducer.contacts)
  const onCreatContact = () => {
    setIsModalOpened(true)
  }

  const onCloseModal = () => {
    setIsModalOpened(false)
  }

  return (
    <>
      <Header contacts={contacts} onCreatContact={onCreatContact} />
      <ContactList contacts={contacts} onCreatContact={onCreatContact} />
      {isModalOpened && <ModalContact onCloseModal={onCloseModal} />}
    </>
  )
}

export default Home

// @flow
import React, { useState } from 'react'
import Button from '../components/Button'
import IcoPlus from '../assets/ic-plus.svg'
import SearchBar from '../components/SearchBar'
import Header from '../components/Header'
import ContactList from '../components/ContactList'
import Modal from '../components/Modal'
import styled from 'styled-components'

const FooterWrapper = styled.div`
  text-align: right;
  ${Button} {
    margin-left: 16px;
  }
`

const Footer = () => (
  <FooterWrapper>
    <Button outline appearance="secondary">
      Cancelar
    </Button>
    <Button appearance="secondary">Salvar</Button>
  </FooterWrapper>
)

const Home = () => {
  const [isModalOpened, setIsModalOpened] = useState(false)

  const onCreatContact = () => {
    setIsModalOpened(true)
  }

  const onCloseModal = () => {
    setIsModalOpened(false)
  }

  return (
    <>
      <Header contacts={[{ teste: 1 }]} onCreatContact={onCreatContact} />
      <ContactList contacts={[{ teste: 1 }]} />
      {isModalOpened && (
        <Modal
          title="Criar novo contato"
          footer={Footer}
          onClose={onCloseModal}
        >
          testando body
        </Modal>
      )}
    </>
  )
}

export default Home

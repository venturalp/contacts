// @flow
import React, { useState } from 'react'
import styled from 'styled-components'
import EmptyList from './EmptyList'
import LineList from './LineList'
import ModalConfirm from '../ModalConfirm'

const ListWrapper = styled.div`
  margin: 32px 16px 0;
`

const ListHeader = styled.div`
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border: 1px solid ${props => props.theme.listBorder};
  border-bottom: 0;
  color: ${props => props.theme.listHeader};
  font-size: 13px;
  padding: 16px 0px 9px 56px;
  display: flex;
  justify-content: flex-start;
  & > p {
    width: 30%;
  }
  & > div {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: auto;
  }
`
type ContactListProps = {
  contacts: Array<Object>,
  onCreatContact: () => void,
}

const ContactListWrapper = styled.div``

export default (props: ContactListProps) => {
  const { contacts = [], onCreatContact } = props
  const [isConfirmOpened, setIsConfirmOpened] = useState(false)
  const [idToDelete, setIdToDelete] = useState()

  const onCloseModal = () => setIsConfirmOpened(false)
  const onOpenDelete = () => {
    setIsConfirmOpened(true)
  }
  const onEdit = () => {
    onCreatContact()
  }

  return (
    <ContactListWrapper>
      {!contacts || contacts.length === 0 ? (
        <EmptyList createContact={onCreatContact} />
      ) : (
        <ListWrapper>
          <ListHeader>
            <p>Contatos</p>
            <p>E-mail</p>
            <p>Telefone</p>
          </ListHeader>
          {contacts.map(contact => (
            <LineList
              contact={contact}
              key={JSON.stringify(contact)}
              onOpenDelete={onOpenDelete}
              onEdit={onEdit}
            />
          ))}
          {isConfirmOpened && (
            <ModalConfirm id={idToDelete} onCloseModal={onCloseModal} />
          )}
        </ListWrapper>
      )}
    </ContactListWrapper>
  )
}

// @flow
import React from 'react'
import styled from 'styled-components'
import EmptyList from './EmptyList'

type ContactListProps = {
  contacts: Array<Object>,
}

const ContactListWrapper = styled.div``

export default (props: ContactListProps) => {
  const { contacts = [] } = props
  return (
    <ContactListWrapper>
      {!contacts || contacts.length === 0 ? (
        <EmptyList createContact={() => alert('create contact')} />
      ) : null}
    </ContactListWrapper>
  )
}

// @flow
import React from 'react'
import styled from 'styled-components'
import IcoBook from '../../../assets/ic-book.svg'
import IcoPlus from '../../../assets/ic-plus.svg'
import Button from '../../Button'

const EmptyListStyled = styled.div`
  margin: 20px auto 0;
  text-align: center;
  & > svg {
    height: 140px;
    margin-bottom: 24px;
  }
  & > p {
    margin: 0 0 24px;
    padding: 0;
    line-height: 1;
  }
  @media screen and (min-width: 650px) {
    margin: 112px auto 0;
    & > svg {
      height: 220px;
    }
  }
`

type EmptyListProps = {
  createContact: () => void,
}

export default (props: EmptyListProps) => {
  const { createContact } = props

  return (
    <EmptyListStyled>
      <IcoBook />
      <p>Nenhum contato foi criado ainda.</p>
      <Button
        onClick={createContact}
        icon={IcoPlus}
        iconPosition="left"
        appearance="primary"
      >
        Criar contato
      </Button>
    </EmptyListStyled>
  )
}

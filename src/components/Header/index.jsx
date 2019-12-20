// @flow
import React from 'react'
import styled from 'styled-components'
import Grid, { Col } from '../Grid'
import IcoLogo from '../../assets/ic-logo.svg'
import IcoPlus from '../../assets/ic-plus.svg'
import Button from '../Button'
import SearchBar from '../SearchBar'

const HeaderStyled = styled(Grid)`
  display: block;
  padding: 16px;

  & > div {
    & > svg {
      width: 148px;
      margin-right: 0px;
    }
  }
  ${Button} {
    margin-right: 0px;
    padding-top: 8px;
    padding-bottom: 8px;
    ${props =>
      !props.buttonVisible
        ? `
      visibility: hidden;
    `
        : ''}
  }
  & > ${Grid}:last-child {
    flex-direction: column;
    form {
      order: -1;
      width: 100%;
      margin: 20px 0;
    }
  }
  @media screen and (min-width: 650px) {
    display: flex;
    & > div {
      & > svg {
        margin-right: 65px;
      }
    }
    ${Button} {
      margin-right: 24px;
    }
    & > ${Grid}:last-child {
      flex-direction: row;
      flex-grow: 1;
      form {
        order: 2;
        width: auto;
      }
    }
  }
`

type HeaderProps = {
  contacts?: Array<Object>,
  onSubmit?: () => void,
  searchValue?: string,
  onCreatContact?: () => void,
}

export default (props: HeaderProps) => {
  const { contacts, onSubmit, searchValue, onCreatContact } = props

  return (
    <HeaderStyled
      justify="space-between"
      buttonVisible={contacts && contacts.length > 0}
    >
      <Grid>
        <IcoLogo />
      </Grid>
      <Grid>
        <Button
          appearance="primary"
          icon={IcoPlus}
          iconPosition="left"
          onClick={onCreatContact}
        >
          Criar contato
        </Button>
        <SearchBar />
      </Grid>
    </HeaderStyled>
  )
}

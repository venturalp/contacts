// @flow
import React from 'react'
import styled from 'styled-components'
import Grid, { Col } from '../Grid'
import IcoLogo from '../../assets/ic-logo.svg'
import IcoPlus from '../../assets/ic-plus.svg'
import Button from '../Button'
import SearchBar from '../SearchBar'

const HeaderStyled = styled(Grid)`
  padding: 16px;
  & > div {
    & > svg {
      width: 148px;
      margin-right: 60px;
    }
  }
  ${Button} {
    margin-right: 24px;
    padding-top: 8px;
    padding-bottom: 8px;
    ${props =>
      !props.buttonVisible
        ? `
      visibility: hidden;
    `
        : ''}
  }
  ${Grid}:last-child {
    flex-grow: 1;
  }
`

type HeaderProps = {
  contacts?: Array<Object>,
  onSubmit?: () => void,
  searchValue?: string,
}

export default (props: HeaderProps) => {
  const { contacts, onSubmit, searchValue } = props

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
          onClick={e => console.log(e)}
        >
          Criar contato
        </Button>
        <SearchBar />
      </Grid>
    </HeaderStyled>
  )
}

// @flow
import React from 'react'
import styled from 'styled-components'
import IcoSearch from '../../assets/ic-search.svg'

type SearchBarProps = {
  placeholder?: string,
  value?: string,
  onChange?: () => void,
  onSubmit?: () => void,
}

const SearchBarWrapper = styled.form`
  position: relative;
  flex-grow: 1;
  display: flex;
  svg {
    fill: ${props => props.theme.searchPlaceholder};
    width: 16px;
    position: absolute;
    right: 8px;
    top: 8px;
  }
`

const SearchBarInput = styled.input`
  background-color: ${props => props.theme.searchBg};
  font-size: 16px;
  color: ${props => props.theme.searchPlaceholder};
  appearance: none;
  padding: 7px 32px 6px 8px;
  border-radius: 4px;
  border: 1px solid ${props => props.theme.searchBg};
  width: 100%;
  font-family: ${props => props.theme.fontBase};
  ::placeholder {
    color: ${props => props.theme.searchPlaceholder};
  }
  &:focus {
    outline: none;
    border: 1px solid ${props => props.theme.searchPlaceholder};
  }
`

export default (props: SearchBarProps) => {
  const { onSubmit, onChange, placeholder = 'Buscar...', value } = props

  return (
    <SearchBarWrapper onSubmit={onSubmit}>
      <SearchBarInput
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
      <IcoSearch />
    </SearchBarWrapper>
  )
}

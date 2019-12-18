import React from 'react'
import Book from '../assets/ic-book.svg'

export const HeaderVT = props => {
  const { txt } = props

  return (
    <header>
      {' '}
      <Book /> <br />
      HEADER {txt}
    </header>
  )
}

export default HeaderVT

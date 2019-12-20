import React, { useState, useEffect } from 'react'
import Modal from '../Modal'
import Button from '../Button'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { addContact } from '../../actions/index'
import Input from '../Input'
import FormGroup from '../FormGroup'
import { isObjEmpty } from '../../helpers/formHelpers'

const FooterWrapper = styled.div`
  text-align: right;
  ${Button} {
    margin-left: 12px;
  }
`

type FooterProps = {
  onCancel?: () => void,
  onDelete?: () => void,
}

const Footer = ({ onCancel, onDelete }: FooterProps) => {
  return (
    <FooterWrapper>
      <Button outline appearance="secondary" onClick={onCancel}>
        Cancelar
      </Button>
      <Button appearance="secondary" onClick={onDelete}>
        Excluir
      </Button>
    </FooterWrapper>
  )
}

const ContentWrapper = styled.form`
  width: 384px;
  font-size: 14px;
  line-height: 1;
  & > input:last-child {
    margin-bottom: 35px;
  }
`

type ModalConfirmProps = {
  onCloseModal: () => void,
  id: string,
}

export default (props: ModalConfirmProps) => {
  const { onCloseModal, id } = props
  const dispatch = useDispatch()

  const onDelete = () => {}

  return (
    <Modal
      title="Excluir contato"
      footer={() => Footer({ onCancel: onCloseModal, onDelete })}
      onClose={onCloseModal}
    >
      <ContentWrapper>Deseja realmente excluir o contato?</ContentWrapper>
    </Modal>
  )
}

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
  onSave?: () => void,
  isDisable: Boolean,
}

const Footer = ({ onCancel, onSave, isDisable }: FooterProps) => {
  return (
    <FooterWrapper>
      <Button outline appearance="secondary" onClick={onCancel}>
        Cancelar
      </Button>
      <Button appearance="secondary" disable={isDisable}>
        Salvar
      </Button>
    </FooterWrapper>
  )
}

const FormWrapper = styled.form`
  width: 384px;
  & > input:last-child {
    margin-bottom: 0px;
  }
`

type ModalContactProps = {
  onCloseModal: () => void,
  isEdit: Boolean,
}

export default (props: ModalContactProps) => {
  const { onCloseModal, isEdit = false } = props
  const dispatch = useDispatch()
  const [isDisable, setIsDisable] = useState(false)
  const formDataEdit = useSelector(
    ({ generalReducer }) => generalReducer.editContact,
  )
  const [formData, setFormData] = useState(formDataEdit || {})

  useEffect(() => {
    setIsDisable(isObjEmpty(formData))
  })

  const handleChange = e => {
    const { target: { value = '', id } = {} } = e
    if (id) setFormData({ ...formData, [id]: value })
  }

  return (
    <Modal
      title="Criar novo contato"
      footer={() => Footer({ onCancel: onCloseModal, isDisable })}
      onClose={onCloseModal}
    >
      <FormWrapper>
        <FormGroup>
          <label htmlFor="name">Nome</label>
          <Input
            type="text"
            value={formData.name || ''}
            id="name"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="email">E-mail</label>
          <Input
            type="emaiil"
            value={formData.email || ''}
            id="email"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup width="40%">
          <label htmlFor="phone">Telefone</label>
          <Input
            type="text"
            value={formData.phone || ''}
            id="phone"
            onChange={handleChange}
          />
        </FormGroup>
      </FormWrapper>
    </Modal>
  )
}

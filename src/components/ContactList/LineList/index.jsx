import React from 'react'
import styled from 'styled-components'
import IcoEdit from '../../../assets/ic-edit.svg'
import IcoDelete from '../../../assets/ic-delete.svg'
import { useDispatch } from 'react-redux'
import { saveContact } from '../../../actions'

const BtWrapper = styled.span`
  margin-left: 24px;
  &:first-child {
    margin-left: 0;
  }
  & svg {
    width: 16px;
    fill: ${props => props.theme.searchPlaceholder};
    cursor: pointer;
  }
`

const LineWrapper = styled.div`
  color: ${props => props.theme.txt};
  font-size: 13px;
  display: flex;
  position: relative;
  padding: 12px 0 12px 56px;
  border: 1px solid ${props => props.theme.listBorder};
  border-bottom: 0px;
  transition: all 0.2s linear;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  &:nth-last-child(1) {
    border-bottom: 1px solid ${props => props.theme.listBorder};
  }
  &:hover {
    background-color: ${props => props.theme.listHover};
  }
  background-color: ${props =>
    props.highlight ? props.theme.listHover : 'initial'};
  & > p {
    width: auto;
  }
  & > div:last-child {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: auto;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 16px;
  }
  @media screen and (min-width: 650px) {
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    & > p {
      width: 30%;
    }
  }
`

const PinWrapper = styled.div`
  background-color: ${props => props.color};
  display: inline-block;
  vertical-align: middle;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  font-size: 16px;
  line-height: 1;
  color: #fff;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 16px;
`

const Pin = (props: Object) => {
  const { children, color } = props
  return <PinWrapper color={color}>{children}</PinWrapper>
}

type LineProps = {
  contact: Object,
  onOpenDelete: () => void,
  onEdit: () => void,
}

export default ({ contact, onOpenDelete, onEdit }: LineProps) => {
  const dispatch = useDispatch()
  if (contact.highlight) {
    setTimeout(() => {
      dispatch(saveContact({ ...contact, highlight: false }))
    }, 10000)
  }
  return (
    <LineWrapper highlight={contact.highlight}>
      <Pin className="" color={contact.color}>
        {contact.name.substr(0, 1)}
      </Pin>
      <p>{contact.name}</p>
      <p>{contact.email}</p>
      <p>{contact.phone}</p>
      <div>
        <BtWrapper onClick={onEdit}>
          <IcoEdit />
        </BtWrapper>
        <BtWrapper onClick={() => onOpenDelete(contact.id)}>
          <IcoDelete />
        </BtWrapper>
      </div>
    </LineWrapper>
  )
}

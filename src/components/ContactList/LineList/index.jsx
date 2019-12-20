import React from 'react'
import styled from 'styled-components'
import IcoEdit from '../../../assets/ic-edit.svg'
import IcoDelete from '../../../assets/ic-delete.svg'

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
  color: ${props => props.theme.listHeader};
  font-size: 13px;
  display: flex;
  position: relative;
  justify-content: flex-start;
  align-items: center;
  padding: 12px 0 12px 56px;
  border: 1px solid ${props => props.theme.listBorder};
  & > p {
    width: 30%;
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
  return (
    <LineWrapper>
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
        <BtWrapper onClick={onOpenDelete}>
          <IcoDelete />
        </BtWrapper>
      </div>
    </LineWrapper>
  )
}
